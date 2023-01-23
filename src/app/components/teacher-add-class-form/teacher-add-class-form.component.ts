import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Router } from "@angular/router";
import { Subscription, Observable, pipe } from "rxjs";
import { select, Store } from "@ngrx/store";
import { filter } from "rxjs/operators";
import { IAppState } from "@src/app/store/app.reducers";
import {
  selectUserStatus,
  selectUserActive,
} from "@src/app/store/modules/user/user.selectors";
import { selectTeachersObject } from "@src/app/store/modules/teachers/teachers.selectors";
import {
  AddClassRequestAction,
  AddClassSuccessEnd,
} from "@src/app/store/modules/teachers/teachers.actions";
import { SetAddClassTextAction } from "@src/app/store/modules/spinner/spinner.actions";
import { FormGroup, Validators, FormArray, FormBuilder } from "@angular/forms";

import { RouteNames } from "@src/app/route-names";
import { RequestStatus } from "@src/app/services/api.service.interface";
import { StudentInterface } from "@src/app/interfaces/students";
import { TeacherInterface } from "@src/app/interfaces/teachers";

import { CheckUserToken } from '@src/app/store/modules/user/user.actions';

import {
  resetForm,
  urlValidator,
  formValidationScrollFocus,
} from "../../helpers";
import { SpinnerOverlayService } from "../../services";
import { UtilsService } from "@src/app/services/utils.service";
import { IStepOneFormData } from "@src/app/store/modules/onboarding/onboarding.types";
import { selectOnboardingTeacherFormData } from "@src/app/store/modules/onboarding/onboarding.selectors";
import {TeacherService} from '@src/app/services/teacher/teacher.service';

@Component({
  selector: "app-teacher-add-class-form",
  templateUrl: "./teacher-add-class-form.component.html",
  styleUrls: ["./teacher-add-class-form.component.scss"],
})
export class TeacherAddClassFormComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() errors: null | string = null;
  @Input() ctaText = "Save";
  @Input() succesText = "Your class has been successfully added";
  @Output() public continueClicked = new EventEmitter<boolean>();

  // Store
  public subscriptions: Subscription[] = [];
  public status$: Observable<string> = this.store.pipe(
    select(selectUserStatus),
    filter((status) => Boolean(status) && status === RequestStatus.success)
  );

  public user$: Observable<StudentInterface> = this.store.pipe(
    select(selectUserActive)
  );
  public teacher$: Observable<any> = this.store.pipe(
    select(selectTeachersObject)
  );

  public formData$: Observable<IStepOneFormData> = this.store.pipe(
    select(selectOnboardingTeacherFormData)
  );

  public status: null | string = null;

  public user: StudentInterface = null;
  public teacher: TeacherInterface = null;

  public stepOneForm: FormGroup = this.fb.group({
    title: null,
    descriptionText: null,
    type: null,
    thumbnail: null,
    file_item: null,
    video_item: null,
    props: null,
    difficulty: null,
    end_timestamp: null,
  });
  public stepOneFormSubmitted = false;

  private formArrays = ["links"];

  @ViewChildren("validatedField") formFields: QueryList<any>;

  public linksGroup: FormArray = this.stepOneForm.get("links") as FormArray;
  public isLinksValid = true;

  public viewTypes = [
    { name: "Video", value: "video", active: true },
    { name: "Audio", value: "audio", active: false },
  ];

  // Request statuses
  public requestStatus = RequestStatus;
  private requestUpdating = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private router: Router,
    public spinner: SpinnerOverlayService,
    private utils: UtilsService,
    protected teacherService: TeacherService,
  ) {}

  public successAdd = false;

  public isVideo = true;

  ngOnInit(): void {
    this.store.dispatch(new CheckUserToken());
    this.subscriptions.push(
      this.formData$
        .pipe(filter((item) => !!item))
        .subscribe((formData: IStepOneFormData) => {
          this.fillForm(formData);
        })
    );
    // showoverlay
    this.subscriptions.push(
      this.user$.subscribe((user) => {
        if (!this.user && user && user.creator) {
          this.fillForm(user.creator);
        }

        if (!this.user) {
          this.user = user;
          this.spinner.hide();
        }
      })
    );

    this.subscriptions.push(
      this.teacher$.subscribe((obj: any) => {
        if (obj.addedNewClass) {
          this.spinner.hide();
          this.router.navigate(["/", RouteNames.teacher]);
          this.store.dispatch(new AddClassSuccessEnd());
        }
      })
    );
  }

  get selectedthumbnail(): File {
    if (typeof this.stepOneForm.get("thumbnail").value === "object") {
      return this.stepOneForm.get("thumbnail").value;
    }
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.user = null;
  }

  fillForm(creator) {
    for (const control of Object.keys(this.stepOneForm.controls)) {
      const formEl = this.stepOneForm.controls[control];
      if (creator[control]) {
        if (this.formArrays.includes(control)) {
          this.fillFormArray(control, creator[control]);
        } else {
          formEl.setValue(creator[control]);
        }
      }
    }
  }

  createExternalUrlField(): FormGroup {
    return this.fb.group({
      id: "",
      label: ["", [Validators.required]],
      url: ["", [Validators.required, Validators.pattern(urlValidator)]],
    });
  }

  fillFormArray(formArrayName, arrayValues) {
    const controlArray = <FormArray>this.stepOneForm.controls[formArrayName];
    arrayValues.map((item) => {
      controlArray.push(this.fb.group(item));
    });
  }

  handleNextClick(): void {
    this.continueClicked.emit(true);
    this.stepOneFormSubmitted = true;
    this.stepOneForm.markAllAsTouched();

    if (this.stepOneForm.invalid) {
      this.log("TEACHER PROFILE FORM is invalid!!");
      formValidationScrollFocus(this.stepOneForm, this.formFields);
      return;
    }

    // build formdata
    const payload = new FormData();
    for (const control of Object.keys(this.stepOneForm.controls)) {
      const val = this.stepOneForm.get(control).value;

      if (control == "video_item") {
        val === null ? payload.append("end_timestamp", "") : "";
      }

      if (val !== null) {
        // if (control == "video_item" || control == "file_item" ) {
        //   payload.append(control, val)
        // } else 
        if (control === "thumbnail") {
          if (typeof val !== "string") {
            payload.append(control, val);
          }
        } else {
          if (control == "descriptionText") {
            payload.append("description", val);
          } else {
            payload.append(control, val);
          }
        }
      }
    }

    this.log("updating...");
    this.spinner.show();
    this.requestUpdating = true;
    payload.forEach((field) => this.log("field: ", field));

    this.teacherService.addClass(payload)
    // addClass
    this.store.dispatch(new SetAddClassTextAction())

    resetForm(this.stepOneForm);
    this.successAdd = true;
  }
  onAddMediaUploaded($event, control) {
    this.stepOneForm.get(control).setValue($event);
  }

  setDurationValue(duaration) {
    this.stepOneForm.get("end_timestamp").setValue(duaration);
  }

  log(text, ...args) {
    this.utils.logall(text, this.constructor.name, ...args);
  }

  onProfileImageUploaded($event) {
    this.stepOneForm.get("image").setValue($event);
  }

  switchTypes(type) {
    this.viewTypes.forEach((item) => {
      if (item.value === type) {
        item.active = true;
        this.isVideo = item.value === "video" ? true : false;
      } else {
        item.active = false;
      }
    });
  }
}
