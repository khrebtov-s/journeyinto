import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioRecordingService } from '@src/app/services/audio/audio-recording.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import {
  StartRecordingRequestAction,
  FinishRecordingRequestAction
} from '@src/app/store/modules/audio-recording/audio-recording.actions';
import {
  UpdateRecordingRequestAction,
  DeleteRecordingRequestAction,
} from '@src/app/store/modules/recording/recording.actions';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RecordingStatus } from '../recording-status';
import { ConfirmationDialogComponent } from '@src/app/components/modals/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material';
import { RouteNames } from '@src/app/route-names';
import { filter, take } from 'rxjs/operators';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { RecordingInterface } from '@src/app/interfaces/recording';
import { UtilsService } from '@src/app/services/utils.service';
import { getIsOnline } from '@src/app/store/modules/offline-detection/offline-detection.selectors';
import { DexieService } from '@src/app/services/local-db/dexie.service';
import { isString } from 'util';
import { selectAudioRecording } from '@src/app/store/modules/audio-recording/audio-recording.selectors';
import { NotificationDialogComponent } from '@src/app/components/modals/notification-dialog/notification-dialog.component';
import { SpinnerOverlayService } from '@src/app/services';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit, OnDestroy {

  public recording: RecordingInterface;
  public user;
  recordingUniqueKey:string;
  isCanceled = false;
  recordedTime: any;
  binaryArray: any;
  recordingId: number;
  creatorSlug: string;
  recordingSlug: string;

  public subscriptions: Subscription[] = [];
  public recording$: Observable<RecordingInterface> = this.store.pipe(
    select(selectAudioRecording),
    filter(recording => Boolean(recording))
  );
  public user$ = this.store.pipe(
    select(selectUserActive),
    filter(Boolean)
  );
  public isOnline$: Observable<boolean>;


  constructor(
    public audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer,
    private store: Store<IAppState>,
    private dialog: MatDialog,
    private router: Router,
    private utilsService: UtilsService,
    private dexieService: DexieService,
    public spinner: SpinnerOverlayService
  ) {
    this.spinner.hide();

    // check if we can use persistent storage
    // TODO: uncomment
    this.initStoragePersistence();
    // start the time update display
    this.initTimeDisplay();

    // this.audioRecordingService.recordingFailed().subscribe(() => {
    //   console.log('recording failed')
    //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    //     data: {
    //       message: 'Sorry your recording failed',
    //       buttonText: {
    //         ok: 'Close',
    //       }
    //     }
    //   });
    //   this.isRecording = false;
    // });

  }

  initTimeDisplay() {
    this.subscriptions.push(
      this.audioRecordingService.getRecordedTime()
        .subscribe(time => {
          if (time) {
            this.log('recordedtime', time);
          }
          this.recordedTime = time;
        })
    );
  }

  async initStoragePersistence() {
    const self = this;
    const persist = await this.dexieService.tryPersistWithoutPromtingUser();
    this.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX initStoragePersistence', persist);
    switch (persist) {
      case 'never':
        this.log('never persist!!');
        if (navigator.storage && navigator.storage.persist) {
          navigator.storage.persist().then(function(persistent) {
            if (persistent) {
              self.log('Storage will not be cleared except by explicit user action');
            } else {
              self.log('Storage may be cleared by the UA under storage pressure.');
            }
          });
        } else {
          this.log('There is not storage in navigator object at alll.....!');
        }
        break;

      case 'persisted':
        this.log('Successfully persisted storage silently');
        break;

      case 'prompt':
        navigator.storage.persist()
          .then(function(persistent) {
            if (persistent) {
              self.log('Storage will not be cleared except by explicit user action');
            } else {
              self.log('Storage may be cleared by the UA under storage pressure.');
            }
          });
        break;
    }
  }


  ngOnInit() {
    this.log('init record component');

    this.subscriptions.push(
      this.recording$.subscribe(recording => {
        this.log('recording subscription', recording);

        this.recording = recording;

        // this.recordingStateService.RecordingId = this.recording.id;
        // this.creatorSlug = this.recording.creatorslug;
        // this.recordingSlug = this.recording.slug;
        // this.audioRecordingService.startRecording(this.recording.id);
      }),
      this.user$.subscribe(
        user => {
          this.user = user;
        }
      )
    );

  }

  // click the recording button - either starts or stops the recording depending on action
  startStopRecording() {
    if (!this.audioRecordingService.recorder) {
      this.log('start Recording and get an id');
      this.recordingUniqueKey = this.utilsService.getUuid();
      this.log(this.recordingUniqueKey);
      this.isCanceled = false;

      // Store recording started and sets status 'recording'
      this.store.dispatch(new StartRecordingRequestAction(this.recordingUniqueKey));
    } else {
      // finish the recording via dispatches
      this.log('recording has stopped....',this.recording);

      this.audioRecordingService.stopRecording(this.recordingUniqueKey);
      if (this.audioRecordingService.isOnline) {
        this.router.navigate(['/', RouteNames.teacher, RouteNames.recordings, this.recording.slug, RouteNames.editRecording]);
      } else {
        this.openOfflineDialog();
      }
    }
  }

  openOfflineDialog() {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      data: {
        message: 'You are currently offline. Your recording will be saved in your browser until you are online again.',
      }
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        this.router.navigate(['/', RouteNames.teacher]);
      })
    );
  }

  openCancelRecordingDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Do you really want to cancel and discard this recording?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.isCanceled = true;
          this.audioRecordingService.abortRecording();
  
          // the teacher does not want to save the recording!
          if (this.recording && this.recording.id) {
            this.store.dispatch(new DeleteRecordingRequestAction(this.recording.id));
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.audioRecordingService.abortRecording();

    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private log(text, ...args) {
    this.utilsService.log(text, this.constructor.name, ...args);
  }
}

interface FileReaderEventTarget extends EventTarget {
  result: ArrayBuffer;
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
}
