import {
  OnInit,
  AfterViewInit,
  Input,
  Component,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { RecordingInterface } from "@src/app/interfaces/recording";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { UtilsService } from "@src/app/services/utils.service";
import { IAppState } from "@src/app/store/app.reducers";
import { RouteNames } from "@src/app/route-names";
import { HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { GestureConfig, MatDialog } from "@angular/material";
import { DeleteRecordingRequestAction } from "@src/app/store/modules/recording/recording.actions";
import { environment } from "../../../environments/environment";
import { RecordingUtilsService } from "@src/app/services/recording/recording-utils.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { ConfirmationDialogComponent } from "../modals/confirmation-dialog/confirmation-dialog.component";
import { filter } from "rxjs/operators";
import * as moment from "moment";
import { MinuteSecondsPipe } from "@src/app/pipes/minutes-seconds.pipe";
import { SpinnerOverlayService } from "@src/app/services/spinner-overlay/spinner-overlay.service";

@Component({
  selector: "app-class-recording",
  templateUrl: "./class-recording.component.html",
  styleUrls: ["./class-recording.component.scss"],
  providers: [
    MinuteSecondsPipe,
    // {
    //     provide: HAMMER_GESTURE_CONFIG,
    //     useClass: GestureConfig
    // }
  ],
})
export class ClassRecordingComponent implements OnInit, AfterViewInit {
  @ViewChild("slider", { static: false }) slider;
  @ViewChild("sliderVideo", { static: false }) sliderVideo;
  @Input() recording: RecordingInterface;
  @Input() canEdit = false;

  isMobile = false;

  routeNames = RouteNames;

  recordedClass: any;
  audio: any;
  video: any;
  recordType = null;
  classImage = "assets/img/class1.png";

  isTrackLoaded = false;
  trackDuration: any;
  poseImagePath = "/assets/img/class.png";
  tabIndex = 0;
  playTimeout = null;
  sliderValue = 0;

  public emptyField = "n/a";

  public title = "";

  public DEBUG = "test";
  private waitForPlay: boolean = false;

  public apiUrl = environment.apiUrl;

  public sliderHover = false;

  public trackedTime = 0;
  public trackedVideoTime = 0;

  constructor(
    private utilsService: UtilsService,
    private store: Store<IAppState>,
    private activatedRoute: ActivatedRoute,
    private recordingUtilsService: RecordingUtilsService,
    private deviceService: DeviceDetectorService,
    public dialog: MatDialog,
    private minuteSeconds: MinuteSecondsPipe,
    public spinner: SpinnerOverlayService
  ) {
    this.isMobile =
      this.deviceService.isMobile() || this.deviceService.isTablet();
  }

  ngOnInit() {
    this.initRecording();
  }

  ngAfterViewInit() {
    if (this.recordedClass.video_item) {
      this.video = document.getElementById("classVideo");

      if (this.recordedClass.video_item.charAt(0) === "/") {
        this.video.src = this.apiUrl + this.recordedClass.video_item;
      } else {
        this.video.src = this.recordedClass.video_item;
      }
      this.video.onloadedmetadata = () => {
        this.video.start_timestamp = this.recordedClass.start_timestamp;
        this.trackDuration = this.video.duration - this.video.start_timestamp;
        this.isTrackLoaded = true;
      };
      this.video.addEventListener("timeupdate", (e) => {
        this.onAudioTimeUpdate("video");
      });
    }
  }

  initRecording() {
    this.recordedClass = { ...this.recording };

    this.spinner.hide();

    if (this.recordedClass && this.recordedClass.thumbnail) {
      this.classImage = this.recordedClass.thumbnail;
      this.poseImagePath = this.recordedClass.thumbnail;
    }
    if (this.recordedClass.video_item) {
      this.recordType = "video";
    }

    if (this.recordedClass.file_item && !this.recordedClass.video_item) {
      this.audio = new Audio();
      this.recordType = "audio";
      if (this.recordedClass.file_item.charAt(0) === "/") {
        this.audio.src = this.apiUrl + this.recordedClass.file_item;
      } else {
        this.audio.src = this.recordedClass.file_item;
      }

      this.log(this.audio.src);

      this.recordedClass.start_timestamp = this.recordedClass.start_timestamp
        ? +this.recordedClass.start_timestamp
        : 0;
      this.recordedClass.end_timestamp = this.recordedClass.end_timestamp
        ? +this.recordedClass.end_timestamp
        : this.audio.duration;

      this.audio.currentTime = this.recordedClass.start_timestamp;

      this.log(
        "on init:",
        this.recordedClass.start_timestamp,
        this.recordedClass.end_timestamp
      );

      this.audio.addEventListener("error", (err) => {
        this.audio = null;
      });
      this.audio.addEventListener("timeupdate", (e) => {
        this.onAudioTimeUpdate("audio");
      });
      this.audio.addEventListener("canplaythrough", () => {
        // this keeps firing on non ios browsers
        if (!this.isTrackLoaded) {
          this.audioLoaded();
        }
      });

      this.audio.load();
      this.pause();
    } else {
      this.audio = null;
    }
  }

  playPauseAudio() {
    this.log("playPauseAudio");
    if (!this.isTrackLoaded) {
      this.waitForPlay = true;
      return;
    }

    if (!this[this.recordType].paused) {
      this.pause();
    } else {
      this.DEBUG += " PLAY 1 ";
      this.play();
    }

    // this.onAudioTimeUpdate();
  }

  moveFullScreen() {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else if (this.video.webkitRequestFullscreen) {
      /* Safari */
      this.video.webkitRequestFullscreen();
    } else if (this.video.msRequestFullscreen) {
      /* IE11 */
      this.video.msRequestFullscreen();
    }
  }

  doEndTimeStamp(recording) {
    if (this[this.recordType]) {
      this.recordedClass.end_timestamp = this.recordedClass.end_timestamp
        ? +this.recordedClass.end_timestamp
        : this[this.recordType].duration;
    }
  }

  onAudioTimeUpdate(recordType) {
    if (
      (this.isTrackLoaded && this.audio) ||
      (this.isTrackLoaded && this.video)
    ) {
      // ensure the timestamp isn't incorrect
      if (
        this.recordedClass.end_timestamp === 0 ||
        this.recordedClass.end_timestamp < this.recordedClass.start_timestamp
      ) {
        this.doEndTimeStamp(this.recordedClass);
      }

      if (
        this[this.recordType].currentTime >= this.recordedClass.end_timestamp ||
        this[this.recordType].currentTime < this.recordedClass.start_timestamp
      ) {
        this.log(
          this[this.recordType].currentTime,
          this.recordedClass.end_timestamp,
          this.recordedClass.start_timestamp
        );

        this.log(
          "on audio time update => time is either before beginning or after end"
        );
        this.pause();
        this.changeCurrentTime(this.recordedClass.start_timestamp);

        if (this.recordedClass.poses.length && this.audio) {
          this.poseImagePath = this.recordedClass.poses[0].pose.image;
        }
      }

      this.updatePoseImage();
      this.sliderValue = this[this.recordType].currentTime;
      if (this.isMobile) {
        this.getTrackTime();
      }
    }
  }

  public formatLabel = (value: number) => {
    return this.minuteSeconds.transform(this.getTrackTime());
  };

  public getTrackTime() {
    this.trackedTime =
      this[this.recordType].currentTime - this.recordedClass.start_timestamp;
    return this.trackedTime;
  }

  private updatePoseImage() {
    if (this.audio) {
      let currentPose = this.recordedClass.poses.find(
        (pose: any, index: number) => {
          if (this.recordedClass.poses[index + 1]) {
            return (
              this.audio.currentTime >= pose.timestamp &&
              this.recordedClass.poses[index + 1].timestamp >
                this.audio.currentTime
            );
          } else {
            return this.audio.currentTime >= pose.timestamp;
          }
        }
      );

      this.poseImagePath = currentPose
        ? currentPose.pose.image
        : this.poseImagePath;
    }
  }

  movePlayback(isForward: boolean) {
    if (this[this.recordType]) {
      const time = isForward
        ? this[this.recordType].currentTime + 30
        : this[this.recordType].currentTime - 30;

      this.DEBUG += " movePlayback ";
      this.DEBUG += this[this.recordType].paused;
      // this.changeCurrentTime(time);
      if (!this[this.recordType].paused) {
        this.pause();

        this.changeCurrentTime(time);

        setTimeout(() => {
          this.DEBUG += " PLAY 2 ";
          this.play();
        }, 100);
      } else {
        this.changeCurrentTime(time);
      }
    }
  }

  audioLoaded() {
    this.log(
      "audio is now loaded, currentTime is...",
      this[this.recordType].currentTime
    );

    this.isTrackLoaded = true;
    this.log(
      this.recordedClass.start_timestamp,
      this.recordedClass.end_timestamp
    );
    this.log(isNaN(this.recordedClass.start_timestamp));
    if (isNaN(this.recordedClass.start_timestamp)) {
      this.recordedClass.start_timestamp = 0;
    }
    this.log(isNaN(this.recordedClass.end_timestamp));
    if (isNaN(this.recordedClass.end_timestamp)) {
      this.log("set the bloody thing");
      this.recordedClass.end_timestamp =
        this[this.recordType].duration - this.recordedClass.start_timestamp;
    }
    this.log(this.recordedClass.end_timestamp);
    // this.changeCurrentTime(this.recordedClass.start_timestamp);
    if (
      this.recordedClass.end_timestamp <= this.recordedClass.start_timestamp
    ) {
      // start but no end
      this.trackDuration =
        this[this.recordType].duration - this.recordedClass.start_timestamp;
      this.log("duration 1: ", this.trackDuration);
    } else {
      this.trackDuration =
        this.recordedClass.end_timestamp - this.recordedClass.start_timestamp;
      this.log("duration 3: ", this.trackDuration);
    }

    if (
      this[this.recordType].currentTime !== this.recordedClass.start_timestamp
    ) {
      this.changeCurrentTime(this.recordedClass.start_timestamp);
    }
    this.log(this.trackDuration);
    // lets check if we already want to play something
    if (this.waitForPlay) {
      this.DEBUG += " PLAY 3 ";
      this.play();
    }

    this.log(
      "After lots of stuff happening, currentTime is...",
      this.audio.currentTime
    );
  }

  onSliderChangeEnd(change) {
    this.seekTo(change.value);
  }

  onRangeChangeEnd($event) {
    this.log($event);
    this.log("on slider change end", this.slider.nativeElement.value);
    this.seekTo(this.slider.nativeElement.value);
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

  deleteRecording() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: "journeyinto-modal",
      data: { message: `Are you sure you want to delete this recording?` },
    });
    dialogRef
      .afterClosed()
      .pipe(filter((result) => Boolean(result)))
      .subscribe(() => {
        if (this.recording.id) {
          this.store.dispatch(
            new DeleteRecordingRequestAction(this.recording.id)
          );
        }
      });
  }

  toggleHover() {
    this.sliderHover = !this.sliderHover;
  }

  ngOnDestroy() {
    if (this[this.recordType]) {
      this.DEBUG += "ngOnDestroy";
      this.pause();
    }
    this[this.recordType] = null;
  }

  onRightClick() {
    event.preventDefault();
  }

  private seekTo(seconds) {
    this.log("SEEK TO: ", seconds);
    // this.log(this.audio);
    this.DEBUG += "seekTo: " + seconds;
    this.changeCurrentTime(seconds);
  }

  private pause() {
    if (this[this.recordType]) {
      this[this.recordType].pause();
      this.log("paused? ", this[this.recordType].paused);
    }
  }

  private fullScreen() {
    if (this[this.recordType]) {
      console.log("this[this.recordType]", this[this.recordType]);

      this[this.recordType].requestFullscreen();
      this.log("paused? ", this[this.recordType].paused);
    }
  }

  private play() {
    if (this[this.recordType]) {
      this.DEBUG += "play me really!! ";
      this[this.recordType].play();
      this.log("paused? ", this[this.recordType].paused);
    }
  }

  private changeCurrentTime(time) {
    this.log("changing current time", time);
    if (this[this.recordType]) {
      this.DEBUG += " changeCurrentTime: " + time;
      this[this.recordType].currentTime = time;
      this.DEBUG +=
        " changeCurrentTime after: " + this[this.recordType].currentTime;
    }
  }

  log(text, ...args) {
    this.utilsService.log(text, this.constructor.name, ...args);
  }
}
