import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { IAppState } from '@src/app/store/app.reducers';
import { Store, select } from '@ngrx/store';
import {
  UpdateRecordingRequestAction,
  UpdateRecordingPosesRequestAction,
  GetRecordingBySlugRequestAction,
  GetRecordingsListRequestAction
} from '@src/app/store/modules/recording/recording.actions';
import { Subscription } from 'rxjs';
import { selectPoses } from '@src/app/store/modules/poses/poses.selectors';
import { GetPosesListRequestAction } from '@src/app/store/modules/poses/poses.actions';
import { selectRecordingEntities } from '@src/app/store/modules/recording/recording.selectors';
import { RouteNames } from '@src/app/route-names';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';
import { UtilsService } from '@src/app/services/utils.service';
import { SetBackSharedAction } from '@src/app/store/modules/shared/shared.actions';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { RecordingStatus } from '../../recording-status';
import { SpinnerOverlayService } from '@src/app/services';
@Component({
  selector: 'app-record-edit-audio',
  templateUrl: './record-edit-audio.component.html',
  styleUrls: ['./record-edit-audio.component.scss']
})
export class RecordEditAudioComponent implements OnInit, OnDestroy {
  routeNames = RouteNames;
  recordingStatus = RecordingStatus;
  audio: any;
  isAudioLoaded = false;
  audioDuration: any;
  recordingId: number;
  pointerControlHeight = 48;
  timelineHeight = 0;
  timelineTicks: { tickTime: string; tickPosition: number }[] = [];
  timelineTicksCount = 10;
  factor = 1;
  timelinePoses: any[] = [];
  pointerControlTopOffset = { x: 0, y: 0 };
  positionPointerControl: { x: number; y: number };
  currentPosition = 0;
  cursorTopOffset = { x: 0, y: 0 };
  cursorBottomOffset = { x: 0, y: 0 };
  cursorTopPosition = 0;
  cursorBottomPosition = 0;
  overlayedTopAreaHeight: number;
  overlayedBottomAreaHeight: number;
  public poses$ = this.store.pipe(select(selectPoses));
  public poses: any = [];
  public subscriptions: Subscription[] = [];
  public isAddingPose: boolean = false;
  selectedPose: any;
  currentPose: any;
  public recordings$ = this.store.pipe(
    select(selectRecordingEntities),
    filter(Boolean),
    filter((recordings: any) => {
      const isArray = Array.isArray(recordings);
      if (!isArray && this.status !== RequestStatus.pending) {
        this.store.dispatch(new GetRecordingsListRequestAction());
      }
      return isArray;
    })
  );
  public recording;
  public status;
  public creatorSlug: string = this.activatedRoute.snapshot.paramMap.get('creatorslug');
  public recordingSlug: string = this.activatedRoute.snapshot.paramMap.get('slug');
  private editRecordingUrl = ['/', RouteNames.teacher, RouteNames.recordings, RouteNames.editRecording];

  constructor(
    private router: Router,
    private store: Store<IAppState>,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private utils: UtilsService,
    public spinner: SpinnerOverlayService
  ) {}

  ngOnInit() {
    this.log('init audio edit');

    this.load();

    this.audio = new Audio();
    this.log('AUDIO: ', this.audio);

    this.subscriptions.push(
      this.recordings$.subscribe(recordings => {
        this.recording = recordings.find(recording => recording.slug === this.recordingSlug);
        this.log('subscribe to recordings/', this.recording);

        if (!this.recording) {
          this.router.navigate(['/', RouteNames.notFound]);
        }

        this.store.dispatch(
          new SetBackSharedAction(['/', RouteNames.teacher, RouteNames.recordings, this.recording.slug])
        );

        this.recordingId = this.recording.id;
        if (this.recording.file_item) {
          this.audio.src = this.recording.file_item;
          this.audio.currentTime = 0;
          this.log('audio src', this.audio.src, this.audio.currentTime);
        }
        if (this.recording.start_timestamp) {
          this.audio.currentTime = this.recording.start_timestamp * this.factor;
          this.log('reupdate current time: ', this.audio.currentTime);
        }
        this.audio.addEventListener('timeupdate', () => {
          this.onAudioTimeUpdate();
        });
        // THIS WON'T WORK ON IOS!!
        this.audio.addEventListener('loadeddata', () => {
          this.log('loadeddata EVENT');
          // this.audioLoaded();
        });
        this.audio.addEventListener('canplaythrough', () => {
          // this keeps firing on non ios browsers
          this.log('audio loaded already');
          if (!this.isAudioLoaded) {
            this.log('load this mofo');
            this.audioLoaded();
          }
        });
        this.audio.addEventListener('ended', () => {
          this.audioEnded();
        });

        this.audio.load();
        this.pause();

        this.spinner.hide();
      }),
      this.poses$.subscribe(poses => {
        this.poses = poses;
      })
    );
  }
  audioLoaded() {
    this.isAudioLoaded = true;
    this.audioDuration = this.audio.duration;
    this.log('Audio duration: ', this.audioDuration);
    this.buildTimeline();
  }
  onPlayPauseRecord() {
    if (this.isAudioLoaded) {
      if (!this.audio.paused) {
        this.pause();
      } else {
        this.audio.play();
      }
    }
  }
  private pause() {
    if (this.audio) {
      this.audio.pause();
      this.log('paused? ', this.audio.paused);
    }
  }
  audioEnded() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  onAudioTimeUpdate() {
    this.log('onAudioTimeUpdate');
    this.currentPosition = this.audio.currentTime * this.factor;
    this.log('onAudioTimeUpdate1', this.currentPosition, this.audio.currentTime);
    this.positionPointerControl = { x: 0, y: this.currentPosition };
    this.log('onAudioTimeUpdate3 positionPointerControl', this.positionPointerControl);
    if (this.currentPosition >= this.cursorBottomPosition - 36) {
      this.log('onAudioTimeUpdate2', this.currentPosition);
      this.currentPosition = this.cursorBottomPosition - 36;
      this.audio.pause();
      this.audio.currentTime = this.currentPosition;
    }
  }
  onSetAudioCurrentTime(event) {
    this.pointerControlTopOffset = { ...(<any>event.source._dragRef)._passiveTransform };
    this.currentPosition = Math.abs(Math.trunc(this.pointerControlTopOffset.y));
    this.log('onSetAudioCurrentTime', this.currentPosition);
    if (this.currentPosition <= this.cursorTopPosition) {
      this.log('onSetAudioCurrentTime1', this.currentPosition);
      this.currentPosition = this.cursorTopPosition * this.factor - 12;
      this.audio.pause();
      this.audio.currentTime = this.currentPosition;
    }
    if (this.currentPosition >= this.cursorBottomPosition) {
      this.log('onSetAudioCurrentTime2', this.currentPosition);
      this.currentPosition = this.cursorBottomPosition - 36;
      this.audio.pause();
      this.audio.currentTime = this.currentPosition;
    }
    if (this.currentPosition <= this.audioDuration * this.factor) {
      this.log('onSetAudioCurrentTime3', this.currentPosition, this.audioDuration);
      this.audio.currentTime = this.currentPosition / this.factor;
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.currentPosition = 0;
    }
  }

  onMovedCursorTop(event) {
    this.cursorTopOffset = { ...(<any>event.source._dragRef)._passiveTransform };
    this.cursorTopPosition = Math.abs(Math.trunc(this.cursorTopOffset.y)) / this.factor;
    this.overlayedTopAreaHeight = Math.abs(Math.trunc(this.cursorTopOffset.y));
    if (this.currentPosition <= this.cursorTopPosition) {
      this.currentPosition = this.cursorTopPosition - 12;
      this.audio.currentTime = this.currentPosition;
      this.positionPointerControl = { x: 0, y: this.currentPosition };
    }
  }

  onMovedCursorBottom(event) {
    this.cursorBottomOffset = { ...(<any>event.source._dragRef)._passiveTransform };
    this.cursorBottomPosition = this.timelineHeight - Math.abs(Math.trunc(this.cursorBottomOffset.y));
    this.overlayedBottomAreaHeight = Math.abs(Math.trunc(this.cursorBottomOffset.y));
    if (this.currentPosition >= this.cursorBottomPosition) {
      this.currentPosition = this.cursorBottomPosition - 36;
      this.audio.currentTime = this.currentPosition;
      this.audio.pause();
      this.positionPointerControl = { x: 0, y: this.currentPosition };
    }
  }
  onAddPose() {
    this.isAddingPose = true;
  }

  onDeletePose(pose) {
    const index = this.timelinePoses.indexOf(pose);
    if (index > -1) {
      this.timelinePoses.splice(index, 1);
    }
  }

  onSavePose() {
    if (this.currentPose) {
      this.timelinePoses.push({ timestamp: this.currentPosition, pose: this.currentPose });
    }
    this.currentPose = null;
    this.isAddingPose = false;
  }

  onChangeSelectedPose(pose) {
    this.currentPose = pose;
  }

  onCancelAddPose() {
    this.isAddingPose = false;
  }

  onCancelEditRecording() {
    this.audioEnded();
    this.location.back();
  }

  onSaveEditRecording() {
    let start_timestamp = this.cursorTopPosition;
    if (this.cursorTopPosition >= 12) {
      start_timestamp = this.cursorTopPosition - 12;
    }
    const end_timestamp = this.cursorBottomPosition - 36;
    const body = {
      start_timestamp: start_timestamp,
      end_timestamp: end_timestamp
    };
    const poses: { timestamp: number; pose: number }[] = [];
    this.timelinePoses.forEach(pose => {
      poses.push({ timestamp: pose.timestamp, pose: pose.pose.id });
    });

    this.store.dispatch(
      new UpdateRecordingRequestAction({
        id: this.recordingId,
        body
      })
    );

    this.store.dispatch(
      new UpdateRecordingPosesRequestAction({
        id: this.recordingId,
        poses: { poses: poses }
      })
    );

    this.router.navigate(this.editRecordingUrl, {
      queryParams: { creatorslug: this.creatorSlug, recordingSlug: this.recordingSlug }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  load() {
    this.store.dispatch(new GetRecordingsListRequestAction());
  }

  private buildTimeline() {
    this.timelineHeight = Math.trunc(this.audioDuration) + this.pointerControlHeight;
    // make sure that our timeline has the correct height for small recordings too! stretch to a min height
    if (this.timelineHeight < 500) {
      // TODO: uncomment and figure out factor thing
      // this.factor = 3;
      this.timelineHeight = this.timelineHeight * this.factor;
    }
    this.log('timelineHeight', this.timelineHeight);
    this.log('pointerControlHeight', this.pointerControlHeight);

    this.cursorBottomPosition = this.timelineHeight - this.pointerControlHeight / 4;
    // timelineTicks
    const ticks = new Array(this.timelineTicksCount);
    this.timelineTicks = new Array(this.timelineTicksCount);

    this.log('Ticks 1:', ticks, this.timelineTicks);

    const timelineTickHeight = (this.timelineHeight - this.pointerControlHeight) / this.timelineTicks.length;

    this.log('timelineTickHeight:', timelineTickHeight, this.audioDuration);

    for (let i = 0; i < this.timelineTicks.length; i++) {
      if (i === 0) {
        const lineItem = this.pointerControlHeight / 2;
        this.timelineTicks[i] = { tickTime: '00:00:00', tickPosition: lineItem };
        i++;
      }
      const tickItem = Math.trunc(
        i > 0 ? timelineTickHeight + this.timelineTicks[i - 1].tickPosition : timelineTickHeight
      );

      const tickTime = moment()
        .set({ hour: 0, minute: 0, second: (tickItem - this.pointerControlHeight / 2) / this.factor, millisecond: 0 })
        .format('HH:mm:ss');

      this.log('TICKS? ', tickItem, tickTime);
      this.timelineTicks[i] = {
        tickTime: tickTime,
        tickPosition: tickItem
      };
    }
    this.log('Ticks 2:', ticks, this.timelineTicks);
  }

  log(text, ...args) {
    this.utils.log(text, this.constructor.name, ...args);
  }
}