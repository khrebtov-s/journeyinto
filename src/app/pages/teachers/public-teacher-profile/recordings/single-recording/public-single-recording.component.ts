import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { Store, select } from '@ngrx/store';
import { TeacherInterface } from '@src/app/interfaces/teachers';
import { filter, tap, take } from 'rxjs/operators';
import { selectTeachersObject } from '@src/app/store/modules/teachers/teachers.selectors';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { RouteNames } from '@src/app/route-names';
import { AuthorizationService } from '@src/app/services';
import { SpinnerOverlayService } from '@src/app/services';
import { SetBackSharedAction } from '@src/app/store/modules/shared/shared.actions';
import { UtilsService } from '@src/app/services/utils.service';

@Component({
    selector: 'app-public-single-recording',
    templateUrl: './public-single-recording.component.html',
    styleUrls: ['./public-single-recording.component.scss']
})
export class PublicSingleRecordingComponent implements OnInit, OnDestroy {
    public subscriptions: Subscription[] = [];

    public teacher$: Observable<any> = this.store.pipe(
        select(selectTeachersObject),
        filter(Boolean)
    );
    public user$: Observable<any> = this.store.pipe(
        select(selectUserActive),
        filter(Boolean),
        take(1)
    );
    public teacher: TeacherInterface;
    private recordingSlug = this.route.snapshot.paramMap.get('recordingSlug');
    public recording;
    public user;

    private accessDeniedReasons = {
        differentTeacher: {
            text: 'View your profile.',
            url: ['/', RouteNames.profile]
        },
        differentStudentTeacher: {
            text: 'View your teacher\'s profile.',
            url: []
        },
        noPurchase: {
            text: 'Purchase this class for £5',
            classBought: null
        },
        noLoggedIn: {
            text: 'Log in and try again',
            url: ['/', RouteNames.login]
        }
    };
    public accessDenied = {
        status: false,
        reason: null
    };

    public viewStatus = ViewStatuses;

    constructor(
        private store: Store<IAppState>,
        private router: Router,
        private route: ActivatedRoute,
        private authservice: AuthorizationService,
        private spinner: SpinnerOverlayService,
        private utils: UtilsService
    ) {
        // showoverlay
    }

    ngOnInit() {
        this.subscriptions.push(
            this.user$.subscribe(
                user => {
                    this.user = user;
                    this.checkRecordingAccess();
                }
            ),
            this.teacher$.subscribe(
                ({currentTeacher}) => {
                    if (currentTeacher) {
                        // hideoverlay
                        const allClasses = [...currentTeacher.sample_classes, ...currentTeacher.classes];
                        this.recording = allClasses.find(recording => {
                            return recording.slug === this.recordingSlug;
                        });

                        if (!this.recording) {
                            this.router.navigate(['/', RouteNames.notFound]);
                        } else {
                            this.store.dispatch(new SetBackSharedAction(['/', RouteNames.teachers, currentTeacher.slug]));

                            // if it is a short class don't worry about permissions
                            if (this.recording.is_fixed) {
                                return;
                            }

                            // if it NOT a short class, let's check permissions....
                            if (!this.authservice.isAuthenticated()) {
                                this.accessDenied = {
                                    status: true,
                                    reason: this.accessDeniedReasons.noLoggedIn
                                };
                            } else {
                                this.checkRecordingAccess();
                            }
                            this.spinner.hide();
                        }
                    }
                }
            )
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    buyClass(classBought) {
        this.router.navigate(['/', RouteNames.student, RouteNames.subscription], {
            state: {
                data: { classBought }
            }
        });
    }

    checkRecordingAccess() {
        if (this.user && this.recording) {
          // Access is denied if...
          // 1) if the user is a teacher and the creatorslug of the recording is different from the slug of the teacher/..
          if (
            this.user.view_status === ViewStatuses.TEACHER &&
            this.user.creator &&
            this.user.creator.slug !== this.recording.creatorslug
          ) {
            this.accessDenied = {
              status: true,
              reason: this.accessDeniedReasons.differentTeacher
            };
          }

          // 2) if the user is a student...
          if (this.user.view_status === ViewStatuses.STUDENT) {
            const studentTeacher = this.user.creators ? this.user.creators[0].creator : false;

            // 2a) ...and the creatorslug of the recording is different from the slug of the teacher they are connected to
            if (studentTeacher.slug !== this.recording.creatorslug) {
              this.accessDenied = {
                status: true,
                reason: this.accessDeniedReasons.differentStudentTeacher
              };

              this.accessDeniedReasons.differentStudentTeacher.url = ['/', RouteNames.teachers, studentTeacher.slug];

              // 2b) ... and the student is not subscribed to the teacher and they haven't bought the class
            } else if (studentTeacher.subscribed.length === 0 && !this.recording.is_fixed) {
              const studentRecording = studentTeacher.classes.find(singleClass => {
                return singleClass.id === this.recording.id;
              });

              if (studentRecording && !studentRecording.is_bought) {
                this.accessDenied = {
                  status: true,
                  reason: this.accessDeniedReasons.noPurchase
                };

                this.accessDeniedReasons.noPurchase.classBought = studentRecording;
              }
            }
          }
        }
    }

    log(text, ...args) {
        this.utils.log(text, 'pink', 'blue', args);
    }

}
