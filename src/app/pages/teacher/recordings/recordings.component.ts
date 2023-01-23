import { Component, OnInit } from "@angular/core";
import { RecordingStatus } from "./recording-status";
import { Store, select } from "@ngrx/store";
import { IAppState } from "@src/app/store/app.reducers";
import { Subscription } from "rxjs";
import {
  selectRecordingEntities,
  selectRecordingStatus,
  selectRecordings,
} from "@src/app/store/modules/recording/recording.selectors";
import {
  GetRecordingsListRequestAction,
  DeleteRecordingRequestAction,
  ChangeRecordingStatusRequestAction,
  UpdateRecordingPosesRequestAction,
} from "@src/app/store/modules/recording/recording.actions";
import { Router } from "@angular/router";
import { RouteNames } from "@src/app/route-names";
import { RecordingInterface } from "@src/app/interfaces/recording";
import _ from "lodash";
import { filter } from "rxjs/operators";
import { SpinnerOverlayService } from "../../../services";
import { selectUserActive } from "@src/app/store/modules/user/user.selectors";
import { selectTeachersObject } from "@src/app/store/modules/teachers/teachers.selectors";
import { SetAddClassTextEndAction } from "@src/app/store/modules/spinner/spinner.actions";
import { TeacherInterface } from "@src/app/interfaces/teachers";
import { UtilsService } from "@src/app/services/utils.service";
import { FinishRecordingRequestAction } from "@src/app/store/modules/audio-recording/audio-recording.actions";

@Component({
  selector: "app-recordings",
  templateUrl: "./recordings.component.html",
  styleUrls: ["./recordings.component.scss"],
})
export class RecordingsComponent implements OnInit {
  routeNames: typeof RouteNames = RouteNames;

  public emptyField = "n/a";
  public showDropdownMenu = [];

  public subscriptions: Subscription[] = [];
  public recordings$ = this.store.pipe(select(selectRecordings));
  public recordingsState$ = this.store.pipe(select(selectRecordingEntities));
  public user$ = this.store.pipe(
    select(selectUserActive),
    filter((user) => Boolean(user))
  );
  public teacher$ = this.store.pipe(select(selectTeachersObject));

  public teacher: TeacherInterface;
  public recordings: RecordingInterface[] = [];
  public recordingStates = RecordingStatus;

  public groupedRecordings: any = {};
  public latestPublished: RecordingInterface;
  public statRecordingStatuses = [
    {
      status: RecordingStatus.UPLOADED,
      text: "has been successfully uploaded",
    },
    {
      status: RecordingStatus.UPLOADING,
      text: "is being uploaded",
    },
    {
      status: RecordingStatus.PROCESSING,
      text: "is being processed",
    },
    {
      status: RecordingStatus.FAILED,
      text: "has failed to upload",
    },
  ];

  isLoading = false;
  newStatuses = false;
  changeRecordingData = true;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    public spinner: SpinnerOverlayService,
    public utils: UtilsService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.store.dispatch(new SetAddClassTextEndAction());
    this.subscriptions.push(
      this.recordings$.subscribe((recordingsState) => {
        const { recordings } = recordingsState;

        this.log("RECORDINGSSSSSS: ", recordings);
        if (recordings == null) {
          return;
        }

        this.isLoading = false;
        
        if (recordingsState.recordings) {
          this.spinner.hide();
        }

        if (recordingsState.changeClassStatus) {
          this.spinner.hide();
          this.load();
        }

        // this.log('Got recordings', recordings);
        this.showDropdownMenu = Array.from(
          { length: this.recordings.length },
          () => false
        );

        this.recordings = recordings.map((recording) => {
          return {
            ...recording,
            title: `${recording.title || this.emptyField}`,
          };
        });

        this.groupedRecordings = _.groupBy(this.recordings, "status");

        const statuses = Object.keys(this.groupedRecordings);
        if (
          !statuses.length ||
          (statuses.length === 1 && statuses[0] === "ready")
        ) {
          this.newStatuses = false;
        } else {
          this.newStatuses = true;
        }

        const publishedArray =
          this.groupedRecordings[this.recordingStates.PUBLISHED] || [];
        const publishedRecordings = publishedArray.length;
        if (publishedRecordings) {
          this.latestPublished = this.groupedRecordings[
            this.recordingStates.PUBLISHED
          ][publishedRecordings - 1];
        }

        if (recordingsState.changeRecordingData !== this.changeRecordingData) {
          this.load();
        }

        this.changeRecordingData = recordingsState.changeRecordingData;
      }),
      this.user$.subscribe((user) => {
        this.teacher = user.creator;

        if (user.creator) {
          this.log("**  **  **  HIDE SPINNER  **  **  **");
          this.spinner.hide();
        }
      }),

      this.teacher$.subscribe((obj: any) => {
        if (obj.addedNewClass === false) {
          this.load();
          // window.location.reload(true)
        }
      })
    );
  }

  onClassView(recording: any) {
    this.router.navigate([
      "/",
      RouteNames.teacher,
      RouteNames.recordings,
      recording.creatorslug,
      recording.slug,
    ]);
  }

  onClassEdit(recording: any) {
    this.log("on class edit");
    this.router.navigate([
      "/",
      RouteNames.teacher,
      RouteNames.recordings,
      RouteNames.editRecording,
    ]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  openDropdownMenu(i) {
    this.showDropdownMenu[i] = !this.showDropdownMenu[i];
  }

  changeClassStatus(id, status, index) {
    this.spinner.show();
    this.showDropdownMenu[index] = false;
    this.store.dispatch(
      new ChangeRecordingStatusRequestAction({
        id,
        status: status === "published" ? "unpublished" : "published",
      })
    );
  }

  load() {
    this.log("GETTING ALL THE RECORDINGS AGAIN: ===>", this.recordings);
    this.isLoading = true;
    this.store.dispatch(new GetRecordingsListRequestAction());
  }

  setFileInfo(event, recordingId) {
    const body = new FormData();
    this.spinner.show();
    
    body.append("thumbnail", event.target.files[0]);

    this.store.dispatch(
      new UpdateRecordingPosesRequestAction({
        id: recordingId,
        poses: body }
      )
    )
  }

  deleteAll() {
    const recordings = this.recordings.map((rec) => rec.id);
    let id = 0;

    let interval = setInterval(() => {
      if (id <= recordings.length - 1) {
        this.log("DELETING THIS RECORDING: ", recordings[id]);
        this.store.dispatch(new DeleteRecordingRequestAction(recordings[id]));
        id++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  log(text, ...args) {
    this.utils.log(text, this.constructor.name, ...args);
  }
}
