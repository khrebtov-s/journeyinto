import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  selectForgottenPasswordErrors,
  selectForgottenPasswordStatus
} from '@src/app/store/modules/forgotten-password/forgotten-password.selectors';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { ForgottenPasswordResetRequestAction } from '@src/app/store/modules/forgotten-password/forgotten-password.actions';
import { Observable, Subscription } from 'rxjs/index';

@Component({
  selector: 'app-forgot-dialog',
  styleUrls: ['./forgot-dialog-form.component.scss'],
  templateUrl: './forgot-dialog-form.component.html',
})
export class ForgotDialogFormComponent implements OnInit, OnDestroy {
  public title: string = '';
  public message: string = '';
  public confirmButtonText: string = '';
  public forgottenPasswordForm: FormGroup;
  public formSubmitted = false;
  // Request statuses
  public requestStatus = RequestStatus;

  public subscriptions: Subscription[] = [];
  public status$: Observable<string>;
  public errors$: Observable<any>;
  public status: null | string = null;
  public errors: null | string = null;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: any,
    private dialogRef: MatDialogRef<ForgotDialogFormComponent>,
    private fb: FormBuilder,
    private store: Store<IAppState>
  ) {
    if (data) {
      this.title = data.title || this.message;
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
      }
    }
  }

  ngOnInit(): void {
    // Forgotten password form inputs
    this.forgottenPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.status$ = this.store.pipe(select(selectForgottenPasswordStatus));
    this.errors$ = this.store.pipe(select(selectForgottenPasswordErrors));

    // Forgotten password form inputs
    this.forgottenPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.subscriptions.push(
      this.status$.subscribe(status => {
        if (status && status === this.requestStatus.success) {
          this.dialogRef.close(true);
        }
        this.status = status;
      }),
      this.errors$.subscribe(errors => {
        this.errors = errors;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  handleSubmitClick(): void {
    this.formSubmitted = true;
    // Send request to backend
    this.store.dispatch(
      new ForgottenPasswordResetRequestAction({
        email: this.forgottenPasswordForm.get('email').value
      })
    );
  }

  close() {
    this.dialogRef.close();
  }
}
