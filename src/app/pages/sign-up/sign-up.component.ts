import { Component, OnDestroy, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, CheckboxRequiredValidator } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { SignUpRequestAction } from '@src/app/store/modules/sign-up/sign-up.actions';
import { Observable, Subscription } from 'rxjs';
import { selectSignUpErrors, selectSignUpStatus } from '@src/app/store/modules/sign-up/sign-up.selectors';
import { IAppState } from '@src/app/store/app.reducers';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { Location } from '@angular/common';
import { ExternalRouteNames } from '@src/app/route-names';
import { formValidationScrollFocus } from '@src/app/helpers';
import { SpinnerOverlayService } from '@src/app/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  @ViewChildren('validatedField') formFields: QueryList<any>;

  // Store
  public subscriptions: Subscription[] = [];
  public status$: Observable<string> = this.store.pipe(select(selectSignUpStatus));
  public errors$: Observable<any> = this.store.pipe(select(selectSignUpErrors));
  public status: null | string = null;
  public errors: null | string = null;
  public signupFormSubmitted = false;

  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  public loginDetailsForm: FormGroup = this.fb.group({
    email: this.email,
    password: this.password,
    telephone: null
  });

  public personalDetailsForm: FormGroup = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]]
  });

  // Reactive form
  public signUpForm: FormGroup = this.fb.group({
    email: this.email,
    password: this.password,
    telephone: null,
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    terms: ['', [Validators.requiredTrue]],
    marketing: false
  });

  // Request statuses
  public requestStatus = RequestStatus;

  // User view statuses - student or teacher
  public viewStatuses = ViewStatuses;

  public externalRouteNames = ExternalRouteNames;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private location: Location,
    public spinner: SpinnerOverlayService) {}

  ngOnInit(): void {
    this.spinner.hide();

    if (history.state && history.state.data) {
      const { email, password } = history.state.data;
      if (email) {
        this.email.setValue(email);
      }
      if (password) {
        this.password.setValue(password);
      }
    }

    this.subscriptions.push(
      this.status$.subscribe(status => {
        this.status = status;
      }),
      this.errors$.subscribe(errors => {
        this.errors = errors;
      }),
      this.signUpForm.valueChanges
        .subscribe(
          val => {
            if (this.errors) {
              this.errors = null;
            }
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Handle submit click
   */
  handleSubmitClick(view_status: ViewStatuses): void {
    this.signupFormSubmitted = true;
    this.signUpForm.markAllAsTouched();

    if (this.signUpForm.invalid) {
      formValidationScrollFocus(this.signUpForm, this.formFields);
      return;
    }

    const data:any = {
      view_status,
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('password').value,
      first_name: this.signUpForm.get('first_name').value,
      last_name: this.signUpForm.get('last_name').value,
      marketing: this.signUpForm.get('marketing').value
    };

    if (this.signUpForm.get('telephone').value) {
      data.telephone = this.signUpForm.get('telephone').value;
    }


    this.store.dispatch(new SignUpRequestAction(data));
  }
  goBack() {
    this.location.back();
  }
}
