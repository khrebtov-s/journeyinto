import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { RecordingService } from '@src/app/services/recording/recording.service';
import { AudioRecordingService } from '@src/app/services/audio/audio-recording.service';
import { exhaustMap, map, catchError, tap, withLatestFrom, concatMap, mergeMap, switchMap, startWith, mapTo, takeWhile, takeUntil } from 'rxjs/operators';
import { Observable, of, EMPTY, interval, timer, Subject } from 'rxjs';
import {
  AudioRecordingsActionTypes,
  StartRecordingRequestAction,
  StartRecordingFailureAction,
  UploadRecordingRequestAction,
  UploadRecordingSuccessAction,
  UploadRecordingFailureAction,
  FinishRecordingRequestAction,
  FinishRecordingSuccessAction,
  FinishRecordingFailureAction,
  UploadRecordingBlobRequestAction,
  UploadRecordingBlobFailureAction,
  UploadRecordingBlobSuccessAction
} from './audio-recording.actions';
import { selectAudioRecordingState } from './audio-recording.selectors';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { Action } from 'rxjs/internal/scheduler/Action';
import { UtilsService } from '@src/app/services/utils.service';

@Injectable()
export class AudioRecordingEffects {

  public recording$ = this.store.pipe(select(selectAudioRecordingState));

  constructor(
    protected actions$: Actions,
    protected router: Router,
    protected recordingService: RecordingService,
    protected audioRecordingService: AudioRecordingService,
    protected store: Store<IAppState>,
    private utils: UtilsService
    ) {}



  // Start recording
  @Effect()
  protected startedRecordingRequest = this.actions$.pipe(
    ofType<StartRecordingRequestAction>(AudioRecordingsActionTypes.START_RECORDING_REQUEST),
    mergeMap(({ payload }: any) => {
        this.log('started recording request', payload)
        return this.audioRecordingService.startRecording(payload)
              .pipe(
                map((response: any) => new UploadRecordingRequestAction(response)),
                catchError((error: any) => of(new StartRecordingFailureAction(error)))
              )
      }
    )
  );

  @Effect({ dispatch: false })
  protected startedRecordingFailure: Observable<any> = this.actions$.pipe(
    ofType(AudioRecordingsActionTypes.START_RECORDING_FAILURE)
  );

  // Upload (in other words, create the recording on the server) recording
  @Effect()
  protected uploadRecordingRequest = this.actions$.pipe(
    ofType(AudioRecordingsActionTypes.UPLOAD_RECORDING_REQUEST),
    withLatestFrom(this.recording$),
    mergeMap((payload) => {
        this.log('upload recording request result', payload)
        // this.log('now lets try to create the recording on the server', payload)
        return this.audioRecordingService.uploadRecording(payload[1]).pipe(
              map((response: any) => {
                this.log('upload suscces', response)
                return new UploadRecordingSuccessAction(response)
              }),
              catchError((error: any) => of(new UploadRecordingFailureAction(error)))
            )
      }
    )
  );

  @Effect({ dispatch: false })
  protected uploadRecordingSuccess: Observable<any> = this.actions$.pipe(
    ofType(AudioRecordingsActionTypes.UPLOAD_RECORDING_SUCCESS),
    tap(() => {
      this.log('tap on uploadrecordingsuccess');
    })
  );

  @Effect({ dispatch: false })
  protected uploadRecordingFailure: Observable<any> = this.actions$.pipe(
    ofType(AudioRecordingsActionTypes.UPLOAD_RECORDING_FAILURE),
    tap(() => {this.log('tap on uploadRecordingFailure');})
  );

  // Upload recording blobs
  @Effect()
  protected uploadRecordingBlobRequest = this.actions$.pipe(
    ofType<UploadRecordingBlobRequestAction>(AudioRecordingsActionTypes.UPLOAD_RECORDING_BLOB_REQUEST),
    // mergemap allows multiple dispatches at the same time
    mergeMap((response) => {

      this.log('uploadRecordingBlobRequest now lets try to upload blobs the recording on the server', response);
      return this.audioRecordingService.uploadBlob(response.payload).pipe(
        map((response: string) => {
          this.log('UPLOAD BLOB ** RESPONSE **', response);
          if (response) {
            this.log('finish blob upload');
            this.audioRecordingService.finishBlobUpload(response);
          } else {
            this.log('DONOT finish blob upload...', response);
          }
          return new UploadRecordingBlobSuccessAction(response);
        }),
        catchError(error => {
          this.log('catch blob upload error', error);
          return of(new UploadRecordingBlobFailureAction(error));
        })
      );

    })
  );



  @Effect({ dispatch: false })
  protected uploadRecordingBlobSuccess: Observable<any> = this.actions$.pipe(
    ofType(AudioRecordingsActionTypes.UPLOAD_RECORDING_BLOB_SUCCESS),
    tap((payload) => {
      this.log('tap on uploadRecordingBlobSuccess',payload);
      return payload.payload
    })
  );

  @Effect({ dispatch: false })
  protected uploadRecordingBlobFailure: Observable<any> = this.actions$.pipe(
    ofType<UploadRecordingBlobFailureAction>(AudioRecordingsActionTypes.UPLOAD_RECORDING_BLOB_FAILURE),
    mergeMap((response) => {
      this.log('uploadRecordingBlobFailure', response);

      // if the message is a number, reset blob uploads
      // TODO: add some explanatory comments
      if (!isNaN(response.payload.message)) {
        this.log(response.payload.message);
        return this.audioRecordingService.resetBlobUploads(response.payload.message);

      } else if (response.payload.status == 406) {
        // we can't upload for this id any longer! delete the blob
        return this.audioRecordingService.finishBlobUpload(response.payload.message);

      }
      return this.audioRecordingService.resetBlobUploads(null);

    })
  );


  // finish the recording
  private pollingUntil$: Subject<boolean> = new Subject<boolean>();
  @Effect()
  protected finishRecordingRequest = this.actions$.pipe(
      ofType<FinishRecordingRequestAction>(AudioRecordingsActionTypes.FINISH_RECORDING_REQUEST),
      // this is an inte rval that is being called ever 3 secondsduring recording to check if we need to finish things
      switchMap(pollAction => interval(3000).pipe(
        takeUntil(timer(60000)),
        takeUntil(this.pollingUntil$),
        mapTo(pollAction),
        switchMap(
          (action: FinishRecordingRequestAction) => {
            this.log('777777777777777777 first', action.payload);

            return this.audioRecordingService.blobsLeft(action.payload).pipe(
                switchMap((doFinish) => {
                  this.log('777777777777777777 second', doFinish);
                  if (doFinish) {
                    // stop interval
                    this.pollingUntil$.next(true);
                    this.log('77777777 stop interval anda tually finid', doFinish);
                    // upload finish commend to server
                    return this.audioRecordingService.finishRecording(action.payload).pipe(
                      map((response:any) => {
                        this.log('77777777777 done with uploading?', response);
                        this.audioRecordingService.deleteDbRecording(response.recording.unique_id);
                        return new FinishRecordingSuccessAction(response);
                      }),
                      catchError(error => {
                        this.log('catch finish recording error', error);
                        return of(new FinishRecordingFailureAction(error));
                      })
                    );
                  }
                  return of();
                })
              );
          }
        )
      ),
    )
  );

  @Effect({ dispatch: false })
  protected finishRecordingSuccess: Observable<any> = this.actions$.pipe(
    ofType(AudioRecordingsActionTypes.FINISH_RECORDING_SUCCESS),
    // tap(() => {
    //   this.log('tap on finishRecordingSuccess');
    // })
  );

  @Effect({ dispatch: false })
  protected finishRecordingFailure: Observable<any> = this.actions$.pipe(
    ofType(AudioRecordingsActionTypes.FINISH_RECORDING_FAILURE),
    // tap(() => {
    //   this.log('tap on finishRecordingFailure');
    // })
  );

  private log(text, ...args) {
    this.utils.log(text, this.constructor.name, ...args);
  }
}
