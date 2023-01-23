import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { Location } from '@angular/common';
import {
    selectForgottenPasswordStatus,
    selectForgottenPasswordErrors
} from '@src/app/store/modules/forgotten-password/forgotten-password.selectors';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordRequestAction } from '@src/app/store/modules/forgotten-password/forgotten-password.actions';
import { RouteNames } from '@src/app/route-names';
import { SpinnerOverlayService } from '@src/app/services';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
    // Store
    public subscriptions: Subscription[] = [];
    public status$: Observable<string> = this.store.pipe(select(selectForgottenPasswordStatus));
    public errors$: Observable<any> = this.store.pipe(select(selectForgottenPasswordErrors));
    public status: null | string = null;
    public errors: null | string = null;

    // Reactive form
    public resetPasswordForm: FormGroup = this.fb.group({
        password: ['', [Validators.required]]
    });

    // Request statuses
    public requestStatus = RequestStatus;

    public routeNames = RouteNames;

    constructor(
        private fb: FormBuilder,
        private store: Store<IAppState>,
        private location: Location,
        private route: ActivatedRoute,
        private spinner: SpinnerOverlayService
    ) { }

    ngOnInit(): void {
        this.spinner.hide();
        this.subscriptions.push(
            this.status$.subscribe(status => {
                this.status = status;
            }),
            this.errors$.subscribe(errors => {
                this.errors = errors;
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    handleSubmit() {
        this.resetPasswordForm.markAllAsTouched();

        if (this.resetPasswordForm.invalid) {
            return;
        }

        const tokenUid = this.route.snapshot.paramMap.get('token');

        const [token, uid] = tokenUid.split('XXXX');

        if (!token || !uid) {
            this.errors = 'This reset password url seems to be compromised. Please go back to your email and click on the link again.';
            return;
        }

        const payload = {
            uid,
            token,
            new_password1: this.resetPasswordForm.get('password').value,
            new_password2: this.resetPasswordForm.get('password').value
        };

        this.store.dispatch(new ResetPasswordRequestAction(payload));
    }
}
