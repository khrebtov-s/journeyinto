import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAppState } from '@src/app/store/app.reducers';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { selectUserActive, selectUserActiveId, selectUserMessages } from '@src/app/store/modules/user/user.selectors';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { filter } from 'rxjs/operators';
import { StudentInterface } from '@src/app/interfaces/students';
import { SpinnerOverlayService } from '../../../services';
import { UpdateCurrentUserRequestAction, GetCurrentUserRequestAction } from '@src/app/store/modules/user/user.actions';
import { GetStripeDashboardLinkRequestAction } from '@src/app/store/modules/stripe/stripe.actions';
import { selectStripeStatus } from '@src/app/store/modules/stripe/stripe.selectors';
import { resetForm } from '../../../helpers';

@Component({
  selector: 'app-teacher-account-component',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class TeachersAccountComponent implements OnInit, OnDestroy {
  // Request statuses
  public requestStatus = RequestStatus;
  public status: string = null;

  // Forms
  public contactDetailsForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    telephone: ['']
  });

  public personalDetailsForm: FormGroup = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]]
  });

  public passwordForm: FormGroup = this.fb.group({
    password: ''
  });
  public pwBtnDisabledState = true;

  // Store
  public subscriptions: Subscription[] = [];
  public user$: Observable<StudentInterface> = this.store.pipe(select(selectUserActive), filter(user => Boolean(user)));
  public user: StudentInterface = null;

  public message$: Observable<any> = this.store.pipe(select(selectUserMessages));
  public message = '';

  public viewStatuses = ViewStatuses;

  public stripeStatus$ = this.store.pipe(
    select(selectStripeStatus),
    filter(status => Boolean(status))
  );

  constructor(
    private store: Store<IAppState>,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public spinner: SpinnerOverlayService
  ) {}

  ngOnInit() {
    // showoverlay

    this.subscriptions.push(
      this.user$.subscribe(user => {
        if (user) {
          // hideoverlay

          this.user = user;
          this.contactDetailsForm.setValue({
            email: this.user.email,
            telephone: this.user.telephone || ''
          });

          this.personalDetailsForm.setValue({
            first_name: this.user.first_name,
            last_name: this.user.last_name
          });

          this.spinner.hide();
        }
      }),

      this.message$.subscribe(message => {
        if (message) {
          // hideoverlay

          this.message = message.message || message;

          // console.log('GetCurrentUserRequestAction');
          this.store.dispatch(new GetCurrentUserRequestAction());

          resetForm(this.passwordForm);

          window.scrollTo(0, 0);
        }
      }),

      this.stripeStatus$.subscribe(status => {
        switch (status) {
          case RequestStatus.pending:
            // showoverlay
            break;

          case RequestStatus.success:
          case RequestStatus.failure:
            // hideoverlay

          default:
            break;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  saveContactDetails() {
    if (this.contactDetailsForm.valid) {
      const payload = {
        email: this.contactDetailsForm.get('email').value,
        telephone: this.contactDetailsForm.get('telephone').value,
      };

      this.updateUser(payload);
    }
  }

  savePassword() {
    if (this.passwordForm.valid) {
      const payload = {
        password: this.passwordForm.get('password').value
      };
      this.updateUser(payload);
    }
  }

  savePersonalDetails() {
    if (this.personalDetailsForm.valid) {
      const payload = {
        email: this.contactDetailsForm.get('email').value,
        first_name: this.personalDetailsForm.get('first_name').value,
        last_name: this.personalDetailsForm.get('last_name').value,
      };

      this.updateUser(payload);
    }
  }

  updateUser(payload) {
    // showoverlay
    this.store.dispatch(new UpdateCurrentUserRequestAction(payload));
  }

  goToStripeDashboard() {
    this.store.dispatch(new GetStripeDashboardLinkRequestAction());
  }

  enableSaveButton($event) {
    this.pwBtnDisabledState = !$event;
  }
}
