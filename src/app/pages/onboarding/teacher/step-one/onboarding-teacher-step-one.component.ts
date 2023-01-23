import { Component, OnDestroy, OnInit, AfterContentInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { selectOnboardingErrors } from '@src/app/store/modules/onboarding/onboarding.selectors';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { UserService } from '@src/app/services/user/user.service';
import { Router } from '@angular/router';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { StudentInterface } from '@src/app/interfaces/students';

import { RouteNames, TeacherStepTwo } from '../../../../route-names';
import { selectSignUpMessage } from '@src/app/store/modules/sign-up/sign-up.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-onboarding-teacher-step-one',
  templateUrl: './onboarding-teacher-step-one.component.html',
  styleUrls: ['./onboarding-teacher-step-one.component.scss']
})
export class OnboardingTeacherStepOneComponent implements OnInit, OnDestroy, AfterContentInit {
  public routeNames = RouteNames;

  // Store
  public subscriptions: Subscription[] = [];
  public errors$: Observable<any> = this.store.pipe(
    select(selectOnboardingErrors)
  );
  public user$: Observable<StudentInterface> = this.store.pipe(
    select(selectUserActive),
    filter(user => !!user)
  );
  public message$: Observable<any> = this.store.pipe(
    select(selectSignUpMessage)
  );
  public errors: null | string = null;

  public user: StudentInterface = null;
  public viewStatuses = ViewStatuses;

  public usefulMessage = '';

  public exampleTeacherSlug = '';
  public continueClicked = false;

  constructor(
    private store: Store<IAppState>,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (history.state.data && history.state.data.message) {
      this.usefulMessage = history.state.data.message;
    }

    this.subscriptions.push(
      this.errors$.subscribe(errors => {
        this.errors = errors;
      }),
      this.message$.subscribe(message => {
        this.usefulMessage = message;
      }),
      this.user$.subscribe(user => {
        this.user = user;

        // if it is a student, go home
        if (this.user.view_status === ViewStatuses.STUDENT) {
          this.router.navigate(['/']);
        }

        if (this.user.view_status === ViewStatuses.TEACHER) {
          // console.log('doing onboarding checkes');
          if (this.user.creator) {
            if (this.continueClicked) {
              // console.log('going to step two');
              this.router.navigate(TeacherStepTwo, {
                state: {
                  data: {
                    noSkip: true
                  }
                }
              });


            } else {
              // console.log('going home');

              this.router.navigate(['/']);
            }
          }
        }

      })
    );
  }

  ngAfterContentInit() {
    // console.log('now scroll up', window.scrollY);
    window.scrollTo(0, 0);

    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 500);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onContinueClicked(e) {
    // console.log('CONTINUE WAS CLICKED', e);
    this.continueClicked = true;
  }
}
