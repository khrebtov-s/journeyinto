import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import {
  selectOnboardingErrors,
  selectOnboardingIscompleted,
  selectOnboardingMessage
} from '@src/app/store/modules/onboarding/onboarding.selectors';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { OnboardingTeacherStepTwoRequestAction } from '@src/app/store/modules/onboarding/onboarding.actions';
import { selectUserActive, selectUserStatus } from '@src/app/store/modules/user/user.selectors';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { SpinnerOverlayService } from '@src/app/services/spinner-overlay/spinner-overlay.service';
import { filter } from 'rxjs/operators';
import { selectSignUpMessage } from '@src/app/store/modules/sign-up/sign-up.selectors';
import { TeacherInterface, TeacherStatusInterface } from '@src/app/interfaces/teachers';
import { UserService } from '@src/app/services';
import { Router } from '@angular/router';
import { RouteNames, TeacherStepOne } from '@src/app/route-names';
import { GetCurrentUserRequestAction } from '@src/app/store/modules/user/user.actions';

@Component({
  selector: 'app-onboarding-teacher-step-two',
  templateUrl: './onboarding-teacher-step-two.component.html',
  styleUrls: ['./onboarding-teacher-step-two.component.scss']
})
export class OnboardingTeacherStepTwoComponent implements OnInit, OnDestroy {
  // Store
  public subscriptions: Subscription[] = [];
  public status$: Observable<string> = this.store.pipe(
    select(selectUserStatus),
    filter(status => Boolean(status) && status === RequestStatus.success)
  );
  public user$: Observable<TeacherStatusInterface> = this.store.pipe(
    select(selectUserActive),
    filter(user => !!user)
  );
  public user: TeacherStatusInterface = null;

  // Request statuses
  public requestStatus = RequestStatus;

  // Is onboarding completed?
  public isCompleted = false;
  public usefulMessage = '';
  public viewStatuses = ViewStatuses;

  constructor(
    private store: Store<IAppState>,
    private spinner: SpinnerOverlayService,
    private userService: UserService,
    private router: Router
  ) {
    this.store.dispatch(new GetCurrentUserRequestAction());
  }

  ngOnInit(): void {
    if (history.state.data && history.state.data.message) {
      this.usefulMessage = history.state.data.message;
    }

    // showoverlay
    this.subscriptions.push(
      this.status$.subscribe(() => {
        // hideoverlay
      }),
      this.user$.subscribe(user => {
        this.user = user;

        if (this.user.view_status === ViewStatuses.STUDENT) {
          this.router.navigate(['/']);
        }

        if (!this.user.creator) {
          this.router.navigate(TeacherStepOne);
        } else {
          if (history.state.data && history.state.data.noSkip) {
            // console.log('No skippiing step two!!');
            this.spinner.hide();
          } else {
            this.router.navigate(['/']);
          }
        }

      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
