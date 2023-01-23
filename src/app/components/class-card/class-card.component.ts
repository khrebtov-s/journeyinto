import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
  Output,
} from "@angular/core";
import { RecordingInterface } from "@src/app/interfaces/recording";
import { TeacherInterface } from "@src/app/interfaces/teachers";
import { RouteNames } from "@src/app/route-names";
import { RecordingStatus } from "@src/app/pages/teacher/recordings/recording-status";
import * as moment from "moment";
import { IAppState } from "@src/app/store/app.reducers";
import { Store } from "@ngrx/store";
import { DeleteRecordingRequestAction } from "@src/app/store/modules/recording/recording.actions";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { RecordingUtilsService } from "@src/app/services/recording/recording-utils.service";

@Component({
  selector: "app-class-card",
  templateUrl: "./class-card.component.html",
  styleUrls: ["./class-card.component.scss"],
})
export class ClassCardComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("audio", { static: false }) audio;

  @Input() singleClass: RecordingInterface;
  @Input() teacher: TeacherInterface;
  @Input() canEdit = false;
  @Input() customContent = false;

  public routeNames = RouteNames;
  public classStatuses = RecordingStatus;
  public emptyField = "n/a";

  public poseImg = "assets/img/class1.png";
  public validStatus = false;

  public classLength: string | number = "n/a";
  public hideClassLength = false;

  public apiUrl = environment.apiUrl;
  public audioSrc = "";

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private recordingUtilsService: RecordingUtilsService
  ) {}

  ngOnInit() {
    if (this.singleClass && this.singleClass.file_item) {
      if (this.singleClass.file_item.charAt(0) === "/") {
        this.audioSrc = this.apiUrl + this.singleClass.file_item;
      } else {
        this.audioSrc = this.singleClass.file_item;
      }
    }

    if (this.singleClass && this.singleClass.thumbnail) {
      this.poseImg = this.singleClass.thumbnail;
    }

    // if (this.singleClass && this.singleClass.poses.length > 0 && this.singleClass.poses[0].pose.image) {
    //     this.poseImg = this.singleClass.poses[0].pose.image;
    // }

    this.classLength = this.singleClass.length;

    if (this.singleClass.length == null || this.singleClass.length <= 0) {
      this.classLength = 0;
      this.hideClassLength = true;
    }

    this.validStatus =
      (this.singleClass.status === RecordingStatus.PUBLISHED ||
        this.singleClass.status === RecordingStatus.PROCESSING) &&
      !!this.singleClass.file_item;
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}

  getDuration() {
    // this.classLength = this.recordingUtilsService.getRecordingDuration(this.singleClass, this.audio.nativeElement);
  }

  deleteRecording() {
    if (this.singleClass && this.singleClass.id) {
      this.store.dispatch(
        new DeleteRecordingRequestAction(this.singleClass.id)
      );
    }
  }

  onClassEdit() {
    this.router.navigate([
      "/",
      RouteNames.teacher,
      RouteNames.recordings,
      this.singleClass.slug,
      RouteNames.editRecording,
    ]);
  }
}
