import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { selectOnboardingErrors, selectOnboardingStatus } from '../../../store/modules/onboarding/onboarding.selectors';
import { RequestStatus } from '../../../services/api.service.interface';
import { selectUserActive } from '../../../store/modules/user/user.selectors';
import { selectTeachers } from '../../../store/modules/teachers/teachers.selectors';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { filter } from 'rxjs/operators';
import { RouteNames } from '@src/app/route-names';
import { SpinnerOverlayService } from '@src/app/services';
import { SetBackSharedAction } from '@src/app/store/modules/shared/shared.actions';

@Component({
  selector: 'app-teacher-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class TeacherProfileEditComponent implements OnInit, OnDestroy {
  // Store
  public subscriptions: Subscription[] = [];
  public status$: Observable<string> = this.store.pipe(select(selectOnboardingStatus));
  public errors$: Observable<any> = this.store.pipe(select(selectOnboardingErrors));
  public user$: Observable<any> = this.store.pipe(
    select(selectUserActive),
    filter(user => Boolean(user))
  );
  public teacher = null;

  // User view statuses - student or teacher
  public viewStatuses = ViewStatuses;

  public status: null | string = null;
  public errors: null | string = null;
  public usefulMessage: null | string = null;
  public user: any = null;

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new SetBackSharedAction(['/', RouteNames.teacher, RouteNames.profile]));

    this.subscriptions.push(
      this.status$.subscribe(status => {
        this.status = status;
      }),

      this.errors$.subscribe(errors => {
        this.errors = errors;
      }),

      this.user$.subscribe(user => {
        if (user && !this.user) {
          this.user = user;
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
