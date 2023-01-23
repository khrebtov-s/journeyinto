import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '@src/app/components/modals/confirmation-dialog/confirmation-dialog.component';
import { AudioRecordingService } from '@src/app/services/audio/audio-recording.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import {
  UpdateRecordingRequestAction,
  GetRecordingBySlugRequestAction,
  DeleteRecordingRequestAction
} from '@src/app/store/modules/recording/recording.actions';
import { Subscription, combineLatest } from 'rxjs';
import { selectRecordingEntities, selectRecordings } from '@src/app/store/modules/recording/recording.selectors';
import { RouteNames } from '@src/app/route-names';
import { filter } from 'rxjs/operators';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { TeacherInterface } from '@src/app/interfaces/teachers';
import { UtilsService } from '@src/app/services/utils.service';
import { SetBackSharedAction } from '@src/app/store/modules/shared/shared.actions';
import { SpinnerOverlayService } from '../../../../../services';

@Component({
  selector: 'app-record-edit-recording',
  templateUrl: './record-edit-recording.component.html',
  styleUrls: ['./record-edit-recording.component.scss']
})
export class RecordEditRecordingComponent implements OnInit, OnDestroy {
  routeNames: typeof RouteNames = RouteNames;

  recordClassForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', []],
    difficulty: ['', []],
    props: ['', []],
    is_fixed: [false]
  });
  formFilled = false;
  blobUrl: any;
  recordingId: any;

  message = '';

  public subscriptions: Subscription[] = [];
  public recording$ = this.store.pipe(
    select(selectRecordings)
  );
  public recording;

  public creatorSlug: any;
  public recordingSlug: any;

  public savingRecording: boolean | string = false;

  public initialValues = {};

  public submitDisabled = false;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private audioRecordingService: AudioRecordingService,
    private store: Store<IAppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utils: UtilsService,
    public spinner: SpinnerOverlayService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.recordClassForm.valueChanges.subscribe(
        change => {
          this.submitDisabled = !this.isFormEdited();
        }
      ),
      combineLatest(
        this.activatedRoute.paramMap,
        this.store.pipe(
            select(selectUserActive),
            filter(user => Boolean(user))
        ),
        (params, user) => ({ params, user })
      ).subscribe(({params, user}: any) => {
        const curTeacher: TeacherInterface = user.creator;
        this.log('which recording?', params, curTeacher);

        if (params.params.slug && curTeacher && curTeacher.slug) {
          this.recordingSlug = params.params.slug;
          this.log('RECORDINGSLUG: ', this.recordingSlug);
          

          this.store.dispatch(new SetBackSharedAction(
            ['/', RouteNames.teacher, RouteNames.recordings]
          ));

          this.log('dispatch get recording by slug request action');
          this.store.dispatch(new GetRecordingBySlugRequestAction({
              creatorslug: curTeacher.slug,
              slug: this.recordingSlug
          }));
        }
      }),
      this.recording$.subscribe(({ currentRecording }) => {
        if (currentRecording != null) {
          this.log('I got the recording: ', currentRecording);
          this.recording = currentRecording;

          this.recordingId = this.recording.id;
          this.log('setting recording id', this.recordingId);

          if (!this.formFilled) {
            this.fillForm(currentRecording);
          }

          this.spinner.hide();
        } else {
          if (this.savingRecording) {
            this.savingRecording = false;
            // this.message = 'The recording has been updated.';
            // this.spinner.hide();

            this.log('going to libraryyy!');
            this.router.navigate(['/', RouteNames.teacher, RouteNames.recordings]);
          }
        }
      })
    );
  }

  fillForm(recording) {
    this.formFilled = true;
    const formVals = Object.keys(this.recordClassForm.value);
    formVals.map(val => {
      if (recording[val]) {
        this.recordClassForm.controls[val].setValue(recording[val]);
      }

      this.initialValues[val] = this.recordClassForm.controls[val].value;
    });
  }

  openDeleteRecordingDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure you want to delete this recording?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.abortRecording();
          this.recordClassForm.reset();
          this.prepareRequest('deleted');
          this.store.dispatch(new DeleteRecordingRequestAction(this.recording.id));
        }
      })
    );
  }

  onEditAudioBtnClick() {
    const audioEditRoute = ['/', RouteNames.teacher, RouteNames.recordings, this.recordingSlug, RouteNames.editAudio];
    this.log('AUDIO EDIT ROUTE ==>', audioEditRoute);
    
    if (!this.isFormEdited()) {
      this.router.navigate(audioEditRoute);
    } else {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          message: 'Are you sure you want to leave this page?',
          subtext: 'Your changes will not be saved',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });

      this.subscriptions.push(
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {
            this.router.navigate(audioEditRoute);
          }
        })
      );
    }

  }

  handleSubmitClick() {
    this.recordClassForm.markAllAsTouched();

    if (this.recordClassForm.invalid) {
      return;
    }

    const isEdited = this.isFormEdited();
    this.log('Is edited..?', isEdited, this.initialValues, this.recordClassForm.value);
    
    // if (isEdited) {
      this.prepareRequest('edited');
      this.store.dispatch(
        new UpdateRecordingRequestAction({
          id: this.recordingId,
          body: this.recordClassForm.value
        })
      );
    // } else {
    //   this.log('no editing needed');
    //   this.router.navigate(['/', RouteNames.teacher, RouteNames.recordings]);
    // }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.recordClassForm.reset();
  }

  private prepareRequest(actionType) {
    this.spinner.show();
    this.savingRecording = actionType;
  }

  private abortRecording() {
    this.audioRecordingService.abortRecording();
  }

  private log(text, ...args) {
    this.utils.log(text, this.constructor.name, ...args);
  }

  private isFormEdited() {
    let hasChanged = false;
    const vals = Object.keys(this.initialValues);
    vals.map(val => {
      if (this.initialValues[val] !== this.recordClassForm.value[val]) {
        hasChanged = true;
      }
    });
    return hasChanged;
  }
}
