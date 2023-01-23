import { Injectable } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import * as moment from 'moment';

import { selectRecordingEntities, selectRecording, selectRecordingState, selectRecordings } from '@src/app/store/modules/recording/recording.selectors';
import { Observable, Subject, of, from, BehaviorSubject, throwError } from 'rxjs';
import { ApiService } from '../api.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { getIsOnline } from '@src/app/store/modules/offline-detection/offline-detection.selectors';
import { UpdateRecordingRequestAction, GetRecordingsListRequestAction } from '@src/app/store/modules/recording/recording.actions';
import {
  UploadRecordingRequestAction,
  UploadRecordingBlobRequestAction,
  FinishRecordingRequestAction } from '@src/app/store/modules/audio-recording/audio-recording.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Dexie from 'dexie';
import { DexieService } from '../local-db/dexie.service';
import { BlobStatus, RecordingStatus } from '@src/app/pages/teacher/recordings/recording-status';
import { mergeMap, map, concatMap, switchMap, delay, takeUntil, takeWhile, catchError } from 'rxjs/operators';
import { UtilsService } from '../utils.service';

interface RecordedAudioOutput {
  recordingId: number;
  blob: Blob;
  fileName: string;
  status: string;
  time: number;
}
interface RecordedAudioStatus {
  recordingId: string;
}

@Injectable({ providedIn: 'root' })
export class AudioRecordingService extends ApiService {
  public deviceINPUT: string;
  public deviceOUTPUT: string;

  private table: Dexie.Table<RecordedAudioOutput, number>;
  private recordingStatusTable: Dexie.Table<RecordedAudioStatus, number>;

  public recorder: any;
  private stream: any;
  private recordingId: any;
  private interval: any;
  private startTime: any;

  private _recorded = new Subject<RecordedAudioOutput>();
  private _recordingDone = new Subject<boolean>();
  private _recordingTime = new Subject<string>();
  private _recordingFailed = new Subject<string>();

  private recordingForm: any;

  private isAppOnline$ = this.store.select(getIsOnline);
  public isOnline: boolean;

  public recordings$ = this.store.pipe(select(selectRecordings));
  public recordings = null;

  public blobsUploaded = [];
  public dbBlobsCount = 0;


  constructor(
    protected store: Store<IAppState>,
    protected http: HttpClient,
    private dexieService: DexieService,
    private utilsService: UtilsService
    ) {
      super(http, store);

      this.log('INIT audio recording!!', dexieService);

      // make sure database exists and is initiated
      this.initDatabase();
      // keep checking if we're online/offline
      this.initOnlineCheck();
      // check which audio input/output devices we've got
      this.initDevices();

      this.test();

      this.initRecordingSub();
      this.getBlobsCount();
  }

  initRecordingSub() {
    this.recordings$
      .pipe(
        // once the recordings array is not null anymore, stop the subscription
        takeWhile(() => this.recordings == null)
      )
      .subscribe(({ recordings }) => {
        this.log('GOT SERVICE RECORDINGS', recordings);

        if (recordings && Array.isArray(recordings)) {
          this.recordings = recordings;
          this.doRecordingActionsCheck(true);
        }
      });
  }

  test() {
    this.log('TEST START!!!!!!, check local database blobs', this.table, this.recordingStatusTable);
    this.table.each(blobData => {
      this.log('BLOBBBBB TESTING ===: ', blobData);
    });
    this.recordingStatusTable.each(rec => {
      this.log('RECORDING TESTING ===: ', rec);
    });
  }

  initDatabase() {
    this.log('INIT DATABASE');
    this.table = this.dexieService.table('jirecordings');
    this.recordingStatusTable = this.dexieService.table('jirecordingstatus');
  }

  initDevices() {
    const browser = <any>navigator;
    const self = this;

    // this.log('navigator', navigator);
    this.log('browser', browser);
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      this.log('enumerateDevices() not supported.');
      // TODO: IOS https://webrtchacks.com/guide-to-safari-webrtc/
      return;
    }

    // const AudioContext = window['AudioContext'] || window['webkitAudioContext'] || false;

    // if (AudioContext) {
    //   const audioContext = new AudioContext;
    //   this.log('AUDIO CONTEXT', audioContext);
    // }

    this.log('MEDIA DEVICES OBJ ===>', browser.mediaDevices);

    browser.mediaDevices.enumerateDevices()
      .then((deviceInfo) => this.gotDevices(deviceInfo))
      .catch((err) => {
        this.log('No media devices detected', err);
      });

  }

  private gotDevices(deviceInfos) {
    // this.log('GOT DEVICES', deviceInfos);

    for (let i = 0; i !== deviceInfos.length; ++i) {
      let deviceInfo = deviceInfos[i];
      if (deviceInfo.kind === 'audioinput') {
        // this.log('input', deviceInfo.toJSON());
      } else if (deviceInfo.kind === 'audiooutput') {
        // this.log('output', deviceInfo.toJSON());
      }
    }
  }


  getRecordingDone(): Observable<boolean> {
    return this._recordingDone.asObservable();
  }

  getRecordedTime(): Observable<string> {
    return this._recordingTime.asObservable();
  }

  recordingFailed(): Observable<string> {
    return this._recordingFailed.asObservable();
  }

  initOnlineCheck() {
    const self = this;
    this.isAppOnline$
      .subscribe(isOnline => {
        this.isOnline = isOnline;
        if (isOnline) {
          self.log('XXXXXXXXXXX we are online again!');
          setTimeout(function () {
            self.log('doRecordingActionsCheck');
            self.doRecordingActionsCheck();
        }, 3);
        }

      });
  }

  private doRecordingActionsCheck(finish = false) {
    if (!finish) {
      this.log('CHECK IF WE NEED TO UPLOAD ANYTHING');
      // check if we need to create a recording
      this.uploadBlobs();
      // and also make sure we don't have any accidental items left over
      this.resetBlobUploads(null);
    } else {
      this.log('CHECK IF THERE ARE RECORDINGS TO FINISH');
      // now, we got the recordings.. we check agains all the recordings that are in status RECORDING
      // we check whether there is
      this.recordings
        .filter(rec => rec.status === RecordingStatus.RECORDING)
        .map(recording => {
          this.finishTableRecording(recording.unique_id);
        });
    }
      // only do this if we're actually recording

      // do we already have a current recording? if not lets create one
      // this.store.dispatch(new UploadRecordingRequestAction());

      // check if we need to finish off any recordings
      // this.store.dispatch(new FinishRecordingRequestAction());
  }



  public startRecording(uniqueId: string) {

    this.log('audio start recording: ', uniqueId);

    this.recordingId = uniqueId;

    this.initTableRecording();

    // actually record stuff

    // we're already recording, why the hell are we here?
    if (this.recorder) {
      return;
    }

    this._recordingTime.next('00:00:00');

    const browser = <any>navigator;

    browser.getUserMedia =
      browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia;

    // this.log('Getusermedia ' + !!browser.getUserMedia);
    // this.log('mediaDevices ' + !!browser.mediaDevices);
    browser.mediaDevices.getUserMedia({ audio: true })
      .then(s => {
        this.log('stream?', s);

        this.stream = s;
        this.record();
      })
      .catch(error => {
        this.log('error recording: ', error);

        this._recordingFailed.next();
      });
    return of({ uniqueId: uniqueId });
  }

  initTableRecording() {
    this.recordingStatusTable.add({
      recordingId: this.recordingId
    })
    .then(rec => {
      this.log('ADDED!!!', rec);
    })
    .catch(err => {
      this.log('ERRORRR!!!', err);
    });
  }

  finishTableRecording(uniqueId) {
    if (uniqueId) {
      this.log('FINSIHTABLERECORDING!!!!!!!!', uniqueId);

      this.recordingStatusTable
        .where('recordingId')
        .equals(uniqueId)
        .first()
        .then(filtered => {
          if (filtered) {
            setTimeout(() => {
              this.log('DISPATCH REQUEST TO FINISH RECORDING');
              this.store.dispatch(new FinishRecordingRequestAction(uniqueId));
            }, 1);
          } else {
            this.log('NO RESULTS...');
          }
        });
    }
  }

  deleteDbRecording(uniqueId) {
    this.recordingStatusTable
        .where('recordingId')
        .equals(uniqueId)
        .delete()
        .then(deleteCount => this.log(`Deleted ${deleteCount} entries`));
  }

  private doRecordBlob(blob) {
    this.log('doRecordBlob', blob);
    const self = this;

    this.saveBlob(blob, new Date().getTime()).subscribe(
      (blobData) => {
        self.log('================> BLOB SAVED');

        self.getBlobsCount();

        if (self.isOnline) {
          self.log('Dispatch 1 UploadRecordingBlobRequestAction', blobData);
          self.store.dispatch(new UploadRecordingBlobRequestAction(blobData));
        }
      }
    );
  }

  private getBlobsCount() {
    if (this.recordingId) {
      this.log('GET BLOBS COUNT');
      this.table
        .where('recordingId')
        .equals(this.recordingId)
        .count()
        .then(count => (this.dbBlobsCount = count));
    }
  }

  // actually record audio in the browser
  private record() {
    this.log('actually start the recorder');

    const self = this;
    // configure recorder
    this.recorder = new RecordRTC.StereoAudioRecorder(this.stream, {
      type: 'audio',
      mimeType: 'audio/wav', /* this was ogg, but from the documentation
        it looks like that format is only for Firefox? https://recordrtc.org/ */
      numberOfAudioChannels: 2,
      sampleRate: 44100,
      audioBitsPerSecond: 128000,
      // From the spec: This value controls how frequently the audioprocess event is
// dispatched and how many sample-frames need to be processed each call.
// Lower values for buffer size will result in a lower (better) latency.
// Higher values will be necessary to avoid audio breakup and glitches
// bug: how to minimize wav size?
// workaround? obviously ffmpeg!
// The size of the buffer (in sample-frames) which needs to
// be processed each time onprocessaudio is called.

// Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
      bufferSize: 16384,
      timeSlice: 1000, // concatenate intervals based blobs - save every 1 sec and try to uplaod
      ondataavailable: function(blob) {
        self.log('ondataavailable start blob saving');
        self.doRecordBlob(blob);
      } // get intervals based blobs
    });

    // and start recording!
    this.recorder.record();

    // update time display
    this.startTime = moment();
    this.interval = setInterval(() => {
      const currentTime = moment();
      const diffTime = moment.duration(currentTime.diff(this.startTime));
      const time = this.toString(diffTime.hours()) + ':' + this.toString(diffTime.minutes()) + ':' + this.toString(diffTime.seconds());
      this._recordingTime.next(time);
    }, 1000);

    setTimeout(() => {
      this.log('timeout end... we should check whether any blobs have been uploaded');
      if (!this.blobsUploaded.length) {
        alert('mmmmm,... were not actually uploading any blobs...');
      } else {
        this.log('were uploading blobs!!!');
      }
    }, 5000);
  }


  private saveBlob(blob, time) {
    const fileName = encodeURIComponent(`audio-${this.recordingId}-${time}.wav`);
    this.log('saveBlob file name: ', fileName);
    this.blobsUploaded.push(fileName);

    const newBlob = {
      blob: blob,
      fileName: fileName,
      recordingId: this.recordingId,
      status: BlobStatus.SAVED,
      time: time
    };
    return from(this.table.add(newBlob)).pipe(map(() => newBlob));
  }

  // Check any 
  public uploadBlobs() {
    const self = this;
    // first, lets check all the blobs in the local databse
    if (this.isOnline) {
      this.log('start upload blobs --- get one at a time');

      // this.table.each(blob => {
      //   self.log('EACHBLOB, no difference', blob);
      // });

      // get one at a time
      this.table.where('status').equals(BlobStatus.SAVED).each(blobData => {
          self.log('********* ********* blobdata for upload? ', blobData, typeof blobData);

          setTimeout(() => {
            self.store.dispatch(new UploadRecordingBlobRequestAction(blobData));
          }, 1);
        });
    } else {
      return of(null);
    }
  }

  /**
   * This checks the local indexeddb for blobs that aren't uploaded yet
   * and if they have the correct status and the system is online
   * uploads them
   * 
   * Called by the uploadRecordingBlobRequest Effect
   * 
   * @param blobData (from indexeddb)
   */
  public uploadBlob(blobData: any): Observable<any> {
    this.log('upload file', blobData);

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'text/plain');
    headers = headers.append('X-Recording-Id', `${blobData.recordingId}`);
    headers = headers.append('X-Recording-Name', `${blobData.fileName}`);
    headers = headers.append('X-Recording-Blob-Id', `${blobData.id}`);
    this.log('blobData.id: ', blobData.id);

    // update the table status
    return from(this.table.update(blobData.id, { status: BlobStatus.UPLOADING }))
      .pipe(
        mergeMap(() => {
          this.log('actually doing the post upload');
          // and actually start the upload
          return this.http.post(
            `${this.API_URL}/upload-recordings`,
            blobData.blob,
            { headers: headers }
          );
        }),
        catchError((err) => {
          this.log('ERROR UPLOADING THE RECORDING', err, err.message);
          if (err.message === 'DataError Failed to write blobs.') {
            this.table.where('id').equals(blobData.id).delete();
          }
          return throwError(err);
        })
      );
  }

  /**
   * Once a blob has successfully uploaded, it can be deleted from the local database.
   * This is called from the uploadRecordingBlobSuccess Effect
   * @param blobId
   */
  public finishBlobUpload(blobId: any) {
    this.log('finishBlobUpload', blobId);

    if (blobId) {
      return from(this.table.delete(parseInt(blobId)));
    }
  }


  /**
   * resetBlobUpload
   */
  public resetBlobUploads(blobId: any | null) {
    if (blobId && !isNaN(blobId)) {
      this.log('resetBlobUploads: reset my blob with id ', blobId);
      return from(this.table.where('id').equals(parseInt(blobId)).modify({status: BlobStatus.SAVED}));
    } else {
      this.log('resetBlobUploads: reset all, there is no blob id', blobId);
      setTimeout(() => this.table.where('status').equals(BlobStatus.UPLOADING).modify({status: BlobStatus.SAVED}), 1000);
      // return of('all')

      this.table.each(blob => {
        this.log('resetBlobUploads: LOOKING AT EACH TABLE BIT', blob);
      });
      // we're only doing one at a time, so lets just reset all and try again to be on the save side
      return of('all done');
    }
  }
  // audio-f3f012e5-55e7-4dcb-ad50-53208856751a-1578655284550.wav

  /**
   * This gets called after all blobs have been uploaded
   * It finishes off the recording
   * @param recordingId Unique id
   */
  public stopRecording(recordingId) {
    const self = this;

    this.log('stop the recording', recordingId);

    if (this.recorder) {
      this.recorder.stop(
        blob => {
          self.stopMedia();
          self._recordingDone.next();

          self.log('FINISH RECORDING? 2');
          self.finishTableRecording(recordingId);
        },
        () => {
          self.stopMedia();
          self._recordingFailed.next();
        }
      );
      // wait until all files are uploaded
      // mark recording as being completed
    }
  }

  // check if tehre are any blobs left of a specific recording
  public blobsLeft(recordingId: string) {
    const self = this;
    let dbLookup;
    this.log('blobsleft', recordingId);
    if (recordingId) {
      dbLookup = this.table.get({recordingId: recordingId});

    } else {
      dbLookup = this.table.toArray();

    }
    return from(dbLookup).pipe(
      map((blobData) => {
        this.log('blobData ↓');
        if (
          blobData == undefined
          || !blobData
          || (Array.isArray(blobData)
          && blobData.length == 0)
        ) {
          this.log('no more items, lets finish this recording');
          return true;
        } else {
          this.log('got items to upload, can not finish', this.recordingId, recordingId);
          return false;
        }
      })
    );
  }

  public finishRecording(recordingId: string | null) {
    this.log('finishrecording', recordingId);
    if (this.isOnline) {
      this.log('yes finishrecording', recordingId);

      return this.http.patch(
        `${this.BASE_URL}/recordings/file/${recordingId}/`,
        { status: RecordingStatus.UPLOADED }
      );
    }

    return of({/*SILENCE*/});
  }


  // this creates the inital recording entry in the database and returns the id
  public uploadRecording(curRecordingInfo) {
    this.log('uploadRecording');

    if (curRecordingInfo.uniqueId && !curRecordingInfo.entities) {
      // check if we currently have a unique id and NO ID
      return this.http.post(
        `${this.BASE_URL}/recordings/record/`,
        { unique_id: curRecordingInfo.uniqueId }
      );
    }
    return of({/*Silence*/});
  }

  abortRecording() {
    this.stopMedia();
    if (this.recordingId) {
      this.log('ABORT RECORDING');
      this.recordingStatusTable.delete(this.recordingId);
    }
  }


  private stopMedia() {
    this.log('stopMedia 1');

    if (this.recorder) {
      this.log('stopMedia 2');

      this.recorder = null;
      clearInterval(this.interval);
      this.startTime = null;
      if (this.stream) {
        this.stream.getAudioTracks().forEach(track => track.stop());
        this.stream = null;
      }

      // and make sure we've uploaded everything
      this.uploadBlobs();
    }
  }

  private toString(value) {
    let val = value;
    if (!value) {
      val = '00';
    }
    if (value < 10) {
      val = '0' + value;
    }
    return val;
  }

  setRecordingFormState(form) {
    this.recordingForm = form;
  }

  getRecordingFormState() {
    return this.recordingForm;
  }

  private log(text, ...args) {
    this.utilsService.log(text, this.constructor.name, ...args);
  }
}