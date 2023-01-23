import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthorizationService } from '@src/app/services/authorization/authorization.service';
import { GetCurrentUserRequestAction } from '@src/app/store/modules/user/user.actions';
import { IAppState } from '@src/app/store/app.reducers';
import { AuthenticationService } from '@src/app/services/authentication/authentication.service';
import { SetIsOnlineAction } from '@src/app/store/modules/offline-detection/offline-detection.actions';
import { selectUserActive, selectUserStatus } from '@src/app/store/modules/user/user.selectors';
import { filter, take, takeUntil, takeWhile } from 'rxjs/operators';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UpdateTeacherRequestAction, TeachersSetActiveAction, GetCurrentTeacherRequestAction } from '@src/app/store/modules/teachers/teachers.actions';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { RouteNames, TeacherStepTwo } from '@src/app/route-names';
import { redirectMessage } from '../../helpers';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { selectTeachersStatus } from '@src/app/store/modules/teachers/teachers.selectors';
import { SpinnerOverlayService, AudioRecordingService } from '../../services';
import { selectRecordingEntities } from '@src/app/store/modules/recording/recording.selectors';
import { GetRecordingsForCurrentUserRequestAction, GetRecordingsListRequestAction } from '@src/app/store/modules/recording/recording.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  public user$: Observable<any> = this.store.pipe(
    select(selectUserActive)
  );
  public teacherStatus$: Observable<string> = this.store.pipe(
    select(selectTeachersStatus),
    filter(status => Boolean(status) && status === RequestStatus.success)
  );
  public recordings$ = this.store.pipe(
    select(selectRecordingEntities),
    filter(recordings => Boolean(recordings))
  );

  // milNoSleep: any;
  user;
  timeout;
  redirectHome = new BehaviorSubject(false);
  hasCode = false;

  constructor(
    protected authorizationService: AuthorizationService,
    protected authenticationService: AuthenticationService,
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: SpinnerOverlayService,
    private audioRecordingService: AudioRecordingService
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      }),
      this.user$
        .subscribe(user => {
          if (user == null) {
            this.user = user;
          }

          if (
            user
            && !this.user
          ) {
            this.getTeacherRecordings(user);
            this.user = user;
            this.checkOnboardingUserStatus(user);
          }

          // in case the status changes
          if (
            user
            && this.user
            && user.view_status !== this.user.view_status) {
            this.getTeacherRecordings(user);
            this.user = user;
          }

          if (this.hasCode) {
            this.hasCode = false;
            this.router.navigate(['/']);
          }
        }),
      this.teacherStatus$
        .pipe(
          takeUntil(this.redirectHome)
        )
        .subscribe(status => {
            if (this.redirectHome.value) {
              this.router.navigate(['/', RouteNames.teacher], {
                state: {
                  data: {
                    profileCompleted: true
                  }
                }
              });
            }
          }),
    );

    this.doTokens();

    // Bootstrap application
    this.bootstrap();

    this.addListeners();

    // this.recordingStateService.initSubscribeExecuteUpload();
    // this.recordingStateService.initSubscribeCompletedRecordingUpload();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Bootstrap application
   */
  bootstrap() {
    // If user has authorization token, try to load current user profile
    if (this.authorizationService.isAuthenticated()) {
      this.store.dispatch(new GetCurrentUserRequestAction());
    }
  }

  doTokens() {
    if (
      this.authorizationService.getRefreshToken() &&
      this.authorizationService.getAccessToken() &&
      this.authorizationService.isTokenExpired()
    ) {
      this.authenticationService.refreshToken().subscribe(({ access }) => {
        if (access) {
          this.authorizationService.setAccessToken(access);
        }
      });
    }
  }

  addListeners() {
    window.addEventListener(
      'online',
      () => {
        this.store.dispatch(new SetIsOnlineAction(true));
      },
      false
    );

    window.addEventListener(
      'offline',
      () => {
        this.store.dispatch(new SetIsOnlineAction(false));
      },
      false
    );
  }

  checkOnboardingUserStatus(user) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.route.queryParams.subscribe(
        params => {
          if (Object.keys(params).length > 0 && user.view_status === ViewStatuses.TEACHER) {
            // if there is not a code param and the creator has a stripe link
            if (params.code) {
              this.hasCode = true;
              this.spinner.show();

              if (!user.creator.stripe_user_id) {
                // here I wanna send a post request to the backend to save the stripe ID
                const payload = new FormData();
                payload.append('code', params.code);

                this.redirectHome.next(true);
                this.store.dispatch(new UpdateTeacherRequestAction(payload));

                setTimeout(() => {
                  this.store.dispatch(new GetCurrentUserRequestAction(payload));
                }, 500);
              } else {
                this.router.navigate(['/']);
              }
            }
          }
        }
      );
    }, 100);

  }

  getTeacherRecordings(user) {
    if (user.view_status === ViewStatuses.TEACHER) {
      this.store.dispatch(new GetRecordingsListRequestAction());
    }
  }
}
