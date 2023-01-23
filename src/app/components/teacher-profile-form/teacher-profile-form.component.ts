import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
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
import { filter, skip, takeUntil } from "rxjs/operators";
import { IAppState } from "@src/app/store/app.reducers";
import {
  selectUserStatus,
  selectUserActive,
} from "@src/app/store/modules/user/user.selectors";
import { selectTeachersObject } from "@src/app/store/modules/teachers/teachers.selectors";
import {
  OnboardingTeacherStepOneRequestAction,
  OnboardingTeacherStepOneStoreFormAction,
  OnboardingTeacherStepOneClearFormAction,
} from "@src/app/store/modules/onboarding/onboarding.actions";
import { UpdateTeacherRequestAction } from "@src/app/store/modules/teachers/teachers.actions";

import {
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
  FormControl,
} from "@angular/forms";
import { FormOptionInterface } from "../../interfaces/form-options";

import { RouteNames } from "@src/app/route-names";
import { RequestStatus } from "@src/app/services/api.service.interface";
import { StudentInterface } from "@src/app/interfaces/students";
import { TeacherInterface } from "@src/app/interfaces/teachers";

import {
  resetForm,
  urlValidator,
  formValidationScrollFocus,
} from "../../helpers";
import { SpinnerOverlayService, UserService } from "../../services";
import { UtilsService } from "@src/app/services/utils.service";
import { IStepOneFormData } from "@src/app/store/modules/onboarding/onboarding.types";
import { selectOnboardingTeacherFormData } from "@src/app/store/modules/onboarding/onboarding.selectors";

@Component({
  selector: "app-teacher-profile-form",
  templateUrl: "./teacher-profile-form.component.html",
  styleUrls: ["./teacher-profile-form.component.scss"],
})
export class TeacherProfileFormComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() errors: null | string = null;
  @Input() ctaText = "Next";
  @Input() allowSkip = false;
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
  public viewCurrences = [
    { name: "EUR", value: "eur", active: true },
    { name: "USD", value: "usd", active: false },
    { name: "AUD", value: "aud", active: false },
    { name: "GBP", value: "gbp", active: false },
  ];

  public stepOneForm: FormGroup = this.fb.group({
    profile_title: null,
    image: null,
    // vimeo_url: ['', [Validators.pattern(urlValidator)]],
    description: null,
    city: null,
    style: null,
    links: this.fb.array([]),
    news_events: null,
    qualifications: null,
    currency: null,
  });
  public stepOneFormSubmitted = false;

  private formArrays = ["links"];

  @ViewChildren("validatedField") formFields: QueryList<any>;

  public linksGroup: FormArray = this.stepOneForm.get("links") as FormArray;
  public isLinksValid = true;

  // Request statuses
  public requestStatus = RequestStatus;
  private requestUpdating = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private userService: UserService,
    private router: Router,
    public spinner: SpinnerOverlayService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    // return stored form data when leave page
    this.subscriptions.push(
      this.formData$
        .pipe(filter((item) => !!item))
        .subscribe((formData: IStepOneFormData) => {
          this.onProfileImageUploaded(formData.image);
          this.fillForm(formData);
        })
    );

    // showoverlay
    this.subscriptions.push(
      this.teacher$.subscribe((obj: any) => {
        let state;

        if (this.hasProfileChanged(this.teacher, obj.loggedinTeacher)) {
          state = {
            data: { message: "Your profile has been successfully updated" },
          };
        }

        if (this.requestUpdating) {
          this.router.navigate(["/", RouteNames.teacher, RouteNames.profile], {
            state,
          });
        }

        this.teacher = obj.loggedinTeacher || null;
      }),
      this.user$.subscribe((user) => {
        if (!this.user && user && user.creator) {
          this.fillForm(user.creator);
          this.setCurrency();
        }

        if (!this.user) {
          this.user = user;
          this.spinner.hide();
        }
      })
    );
  }

  get selectedImage(): File {
    if (typeof this.stepOneForm.get("image").value === "object") {
      return this.stepOneForm.get("image").value;
    }
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.user = null;
  }

  debugAutofill() {
    this.stepOneForm.controls["profile_title"].setValue("Profile value");
    this.stepOneForm.controls["qualifications"].setValue("Yoga");
    this.stepOneForm.controls["description"].setValue("About me");
    this.stepOneForm.controls["city"].setValue("Talladiland");
    this.stepOneForm.controls["style"].setValue("Yoga");
    this.stepOneForm.controls["news_events"].setValue(
      "Something cool just happened!!"
    );
    this.stepOneForm.controls["currrency"].setValue("Euro");
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

  /**
   * Handle click add another external url button
   */
  handleAddAnotherExternalUrlClick(): void {
    this.isLinksValid = true;
    this.linksGroup.value.map((link) => {
      if (!link.url || !link.label) {
        this.isLinksValid = false;
      }
    });

    if (this.isLinksValid) {
      this.linksGroup.push(this.createExternalUrlField());
    }
  }

  /**
   * Create external url field
   */
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

  /**
   * Handle click next button
   */
  handleNextClick(skipClicked): void {
    if (skipClicked) {
      resetForm(this.stepOneForm);
    } else {
      this.continueClicked.emit(true);
    }

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
      if (val !== null) {
        if (control === "image") {
          if (typeof val !== "string") {
            payload.append(control, val);
          }
        } else if (["links"].includes(control)) {
          if (val.length > 0) {
            const arrayVals = val.map((v: any) => {
              return {
                url: v.url,
                label: v.label,
                id: v.id ? v.id : null,
              };
            });
            payload.append(control, JSON.stringify(arrayVals));
          }
        } else {
          payload.append(control, val);
        }
      }
    }

    if (this.user.creator.user) {
      this.log("updating...");
      this.spinner.show();
      this.requestUpdating = true;
      payload.forEach((field) => this.log("field: ", field));
      // If the user exists just update
      this.store.dispatch(new UpdateTeacherRequestAction(payload));
    } else {
      this.log("creating...");
      payload.forEach((field) => this.log("field: ", field));

      // Store first step

      this.store.dispatch(new OnboardingTeacherStepOneClearFormAction());
      this.store.dispatch(new OnboardingTeacherStepOneRequestAction(payload));
    }
  }

  removeAddress(index): void {
    this.linksGroup.removeAt(index);
  }

  onProfileImageUploaded($event) {
    this.stepOneForm.get("image").setValue($event);
  }

  setCurrency(currency = this.stepOneForm.get("currency").value) {
    this.viewCurrences.forEach((item) => {
      if (item.value === currency) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }

  hasProfileChanged(oldTeacher, newTeacher) {
    let hasChanged = false;

    if (oldTeacher && newTeacher) {
      this.log(oldTeacher, newTeacher);
      Object.keys(oldTeacher).map((key) => {
        if (Array.isArray(oldTeacher[key])) {
          if (oldTeacher[key].length !== oldTeacher[key].length) {
            hasChanged = true;
          } else {
            oldTeacher[key].map((item, i) => {
              if (newTeacher[key] && item !== newTeacher[key][i]) {
                hasChanged = true;
              }
            });
          }
        } else {
          if (oldTeacher[key] !== newTeacher[key]) {
            hasChanged = true;
          }
        }
      });
    }

    return hasChanged;
  }

  log(text, ...args) {
    this.utils.logall(text, this.constructor.name, ...args);
  }

  teachersLinkChange() {
    // store form data before leave page
    this.store.dispatch(
      new OnboardingTeacherStepOneStoreFormAction(this.stepOneForm.value)
    );
    this.router.navigate(["/", RouteNames.teachers]);
  }

  switchUserCurrency(currency) {
    this.viewCurrences.map((item) => {
      if (item.value === currency) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    return this.stepOneForm.controls["currency"].setValue(currency);
  }
}
