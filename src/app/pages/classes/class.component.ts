import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@src/app/services/utils.service';
import { Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { Store, select } from '@ngrx/store';
import { selectRecordingEntities } from '@src/app/store/modules/recording/recording.selectors';
import { GetRecordingBySlugRequestAction } from '@src/app/store/modules/recording/recording.actions';
import { ActivatedRoute } from '@angular/router';
import { RecordingStateService } from '@src/app/services/recording/recording-state.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-class',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  recordedClass: any;
  audio: any;

  isAudioLoaded = false;
  audioDuration: any;
  poseImagePath = '/assets/img/class.png';
  tabIndex = 0;
  

  public subscriptions: Subscription[] = [];
  public recording$ = this.store.pipe(select(selectRecordingEntities));
  public recording;

  public creatorSlug: string = this.activatedRoute.snapshot.paramMap.get('creatorslug');
  public recordingSlug: string = this.activatedRoute.snapshot.paramMap.get('slug');

  public emptyField = 'n/a';

  public title = '';

  public DEBUG = 'test';
  private waitForPlay:boolean = false;

  constructor(
    private utilsService: UtilsService,
    private store: Store<IAppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.load();

    this.subscriptions.push(

      this.recording$.subscribe(recording => {
        if (!recording.file_item) return;

        this.initRecording(recording);
        this.title = recording.title;
      })
    );
  }

  initRecording(recording: any) {
    // console.log('init recording')
    this.recordedClass = { ...recording };

    this.audio = new Audio();
    this.audio.src = this.recordedClass.file_item;

    this.recordedClass.start_timestamp = this.recordedClass.start_timestamp ? +this.recordedClass.start_timestamp : 0;
    this.recordedClass.end_timestamp = this.recordedClass.end_timestamp
      ? +this.recordedClass.end_timestamp
      : this.audio.duration;

    

    this.audio.addEventListener('timeupdate', () => {
      this.onAudioTimeUpdate();
    });
    this.audio.addEventListener('canplaythrough', () => {
      // this keeps firing on non ios browsers
      if(!this.isAudioLoaded)
      {
        this.audioLoaded();
      }
    });

    this.audio.load();
    this.audio.pause();

  }

  playPauseAudio() {
    // console.log('playPauseAudio')
    // console.log(this.audio)
    // console.log(this.audio.paused)
    if (!this.isAudioLoaded)
    {
      this.waitForPlay = true;
      return;
    }
    if (!this.audio.paused) {
      this.audio.pause();
    } else {
      this.play();
    }

    this.onAudioTimeUpdate();
  }

  movePlayback(isForward: boolean) {
    if (!this.audio.paused) {
      this.audio.pause();
      this.audio.currentTime = isForward ? this.audio.currentTime + 30 : this.audio.currentTime - 30;
      this.play();
    } else {
      this.audio.currentTime = isForward ? this.audio.currentTime + 30 : this.audio.currentTime - 30;
    }
  }

  onSliderChangeEnd(change) {
    this.seekTo(change.value);
  }

  audioLoaded() {
    this.isAudioLoaded = true;
    // console.log(this.recordedClass.start_timestamp, this.recordedClass.end_timestamp)
    // console.log(isNaN(this.recordedClass.start_timestamp))
    if(isNaN(this.recordedClass.start_timestamp))
    {
      this.recordedClass.start_timestamp = 0;
    }
    // console.log(isNaN(this.recordedClass.end_timestamp))
    if(isNaN(this.recordedClass.end_timestamp))
    {
      // console.log('set the bloody thing')
      this.recordedClass.end_timestamp = this.audio.duration - this.recordedClass.start_timestamp;
    }
    // console.log(this.recordedClass.end_timestamp)
    this.audio.currentTime = this.recordedClass.start_timestamp;
    if(this.recordedClass.end_timestamp <= this.recordedClass.start_timestamp) {
      // start but no end
      this.audioDuration = this.audio.duration - this.recordedClass.start_timestamp;
      // console.log('duration 1')
    }
    else {
      // console.log('duration 3')
      this.audioDuration = this.recordedClass.end_timestamp - this.recordedClass.start_timestamp;
    }
    // console.log(this.audioDuration)
    // lets check if we already want to play something
    if(this.waitForPlay)
    {
      this.play();
    }
  }

  onAudioTimeUpdate() {
    if (this.isAudioLoaded) {
      // console.log('onAudioTimeUpdate')
      // console.log(this.audio.currentTime)
      // ensure the timestamp isn't incorrect
      if(this.recordedClass.end_timestamp == 0 || 
        this.recordedClass.end_timestamp < this.recordedClass.start_timestamp)
      {
        this.recordedClass.end_timestamp = this.audio.duration
      }
      if (
        this.audio.currentTime >= this.recordedClass.end_timestamp ||
        this.audio.currentTime < this.recordedClass.start_timestamp
      ) {
        this.DEBUG = 'here? Current: '+this.audio.currentTime+" start: "+this.recordedClass.start_timestamp+" end: "+this.recordedClass.end_timestamp;
        // console.log('here? Current: '+this.audio.currentTime+" start: "+this.recordedClass.start_timestamp+" end: "+this.recordedClass.end_timestamp)
        this.audio.pause();
        this.audio.currentTime = this.recordedClass.start_timestamp;
      }

      this.updatePoseImage();
    }
  }

  copyLinkToClipboard() {
    const url = window.location.href;
    this.utilsService.copyTextToClipboard(url);
  }

  swipeLeft() {
    if (this.tabIndex > 0) {
      this.tabIndex--;
    }
  }

  swipeRight() {
    if (this.tabIndex < this.recordedClass.poses.length - 1) {
      this.tabIndex++;
    }
  }

  private updatePoseImage() {
    // console.log('update pose?',this.audio.currentTime)
    let currentPose = this.recordedClass.poses.find((pose: any, index: number) => {
      if (this.recordedClass.poses[index + 1]) {
        return (
          this.audio.currentTime >= pose.timestamp &&
          this.recordedClass.poses[index + 1].timestamp > this.audio.currentTime
        );
      } else {
        return this.audio.currentTime >= pose.timestamp;
      }
    });

    this.poseImagePath = currentPose ? currentPose.pose.image : this.poseImagePath;
  }

  ngOnDestroy() {
    if (this.audio) {
      this.DEBUG += 'ngOnDestroy';
      this.audio.pause();
    }
    this.audio = null;
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private load() {
    const body = { creatorslug: this.creatorSlug, slug: this.recordingSlug };
    this.store.dispatch(new GetRecordingBySlugRequestAction(body));
  }

  private seekTo(seconds) {
    this.DEBUG += 'seekTo: '+seconds;
    this.audio.currentTime = seconds;
  }

  private play() {
    this.DEBUG += 'play me really!! ';
    // console.log('play me really')
    this.audio.play();
  }
}
