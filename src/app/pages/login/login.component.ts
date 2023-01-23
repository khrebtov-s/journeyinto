import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationBasicRequestAction } from '@src/app/store/modules/authentication/authentication.actions';
import {
  selectAuthenticationErrors,
  selectAuthenticationStatus
} from '@src/app/store/modules/authentication/authentication.selectors';
import { IAppState } from '@src/app/store/app.reducers';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { MatDialog } from '@angular/material/dialog';
import { ForgotDialogFormComponent } from './forgot-dialog-form/forgot-dialog-form.component';
import { ConfirmDialogComponent } from '@src/app/pages/login/confirm-dialog/confirm-dialog.component';
import { TakethetourDialogComponent } from '@src/app/components/modals/takethetour-dialog/takethetour-dialog.component';
import { selectForgottenPasswordMessage } from '@src/app/store/modules/forgotten-password/forgotten-password.selectors';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { selectCancelUrl } from '@src/app/store/modules/shared/shared.selectors';
import { combineLatest } from 'rxjs/index';
import { openTourModal } from '@src/app/components/modals/takethetour-dialog/modal-utils';

import { RouteNames } from '../../route-names';
import { filter } from 'rxjs/operators';
import { SpinnerOverlayService } from '@src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  routeNames: typeof RouteNames = RouteNames;

  // Store
  public subscriptions: Subscription[] = [];
  public status$: Observable<string> = this.store.pipe(select(selectAuthenticationStatus));
  public errors$: Observable<any> = this.store.pipe(
    select(selectAuthenticationErrors),
    filter(Boolean)
  );
  public loginData$: Observable<any> = combineLatest([
    this.store.pipe(select(selectUserActive)),
    this.store.pipe(select(selectCancelUrl))
  ]);

  public message$: Observable<any> = this.store.pipe(
    select(selectForgottenPasswordMessage)
  );

  public status: null | string = null;
  public errors: null | string = null;
  public message: null | string = null;

  // Login react form
  public loginForm: FormGroup;
  public loginFormSubmitted = false;

  // Request statuses
  public requestStatus = RequestStatus;

  public usefulMessage = '';

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public spinner: SpinnerOverlayService
  ) {}

  ngOnInit(): void {
    this.spinner.hide();

    setTimeout(() => {
      if (this.spinner.isShowing.value) {
        this.spinner.hide();
      }
    }, 400);
    // Login form inputs
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.subscriptions.push(
      this.loginData$.subscribe(([user, back_url]) => {
        if (user) {
          const dashboardUrl = user.view_status === ViewStatuses.STUDENT ? RouteNames.student : RouteNames.teacher;
          this.router.navigate(['/', dashboardUrl]);
        }
      }),
      this.status$.subscribe(status => {
        this.status = status;
      }),
      this.errors$.subscribe(errors => {
        // console.log('LOGIN ERRORS', errors);
        if (errors === 'No active account found with the given credentials') {
          errors = 'Sorry, we don\'t recognise your password';
        }
        this.errors = errors;
      }),
      this.message$.subscribe(message => {
        this.message = message;
        this.errors = null;
      }),
      this.loginForm.valueChanges.subscribe(change => {
        this.errors = null;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Handle submit click
   */
  handleSubmitClick(): void {
    this.loginFormSubmitted = true;
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    // Send request to backend
    this.store.dispatch(
      new AuthenticationBasicRequestAction({
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      })
    );
  }

  forgottenPassword() {
    const dialogRef = this.dialog.open(ForgotDialogFormComponent, {
      panelClass: 'journeyinto-modal',
      data: {
        title: 'Reset password',
        message: "To reset your password, please enter the email address you signed up with and we'll send you an email with a reset link.",
        buttonText: {
          ok: 'Reset password'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.dialog.open(ConfirmDialogComponent, {
          panelClass: 'journeyinto-modal',
          data: {
            title: 'Reset password',
            message: this.message
              ? this.message
              : 'We sent you a message with a unique link to reset your password, please check your email.',
            buttonText: {
              cancel: 'Back to login'
            }
          }
        });
      }
    });
  }

  openTakethetourModal() {
    openTourModal(this.dialog);
    // this.dialog.open(TakethetourDialogComponent, {
    //   panelClass: 'takethetour-modal',
    // });
  }

  goToSignup() {
    this.router.navigate(['/', RouteNames.signup], {
      state: {
        data: this.loginForm.value
      }
    });
  }
}
