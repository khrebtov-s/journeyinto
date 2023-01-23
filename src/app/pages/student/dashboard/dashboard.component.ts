import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { selectUserActive, selectUserStatus } from '@src/app/store/modules/user/user.selectors';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { GetCurrentUserRequestAction } from '@src/app/store/modules/user/user.actions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { selectRecordingEntities } from '@src/app/store/modules/recording/recording.selectors';
import { filter } from 'rxjs/operators';
import { TeacherInterface } from '@src/app/interfaces/teachers';
import { StudentInterface } from '@src/app/interfaces/students';
import { SpinnerOverlayService } from '@src/app/services/spinner-overlay/spinner-overlay.service';
import { RouteNames } from '@src/app/route-names';
import { openTourModal } from '@src/app/components/modals/takethetour-dialog/modal-utils';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  routeNames: typeof RouteNames = RouteNames;

  public subscriptions: Subscription[] = [];

  public user$: Observable<StudentInterface> = this.store.pipe(
    select(selectUserActive),
    filter(user => Boolean(user))
  );

  public recordings$ = this.store.pipe(
    select(selectRecordingEntities),
    filter(recordings => Boolean(recordings))
  );

  public user: StudentInterface = null;
  public recordings: any = [];
  public teacherClasses: any = [];
  public userClasses: any = [];
  public isSubscribedUser: boolean;
  public viewStatuses = ViewStatuses;
  public emptyField: string = 'n/a';

  public sampleClasses: any = [];
  public creatorName: string;
  public creator: TeacherInterface = null;
  protected navigationData: { openTakethetourModal?: boolean } = {};

  private gettingCorrectUser = false;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private dialog: MatDialog,
    public spinner: SpinnerOverlayService
  ) {
    const currentNav = this.router.getCurrentNavigation();
    this.navigationData = currentNav ? currentNav.extras.state : {};
  }

  ngOnInit() {
    this.router.navigate(['/', this.routeNames.student, this.routeNames.myPractice]);

    this.load();
    this.subscriptions.push(
      this.user$.subscribe(user => {
        this.user = user;
        if (!this.gettingCorrectUser && user.creators.length && !isNaN(user.creators[0])) {
          this.gettingCorrectUser = true;
          this.store.dispatch(new GetCurrentUserRequestAction());
        } else {
          this.gettingCorrectUser = false;
          this.spinner.hide();

          if (this.user.creators.length && user.creators[0].creator) {
            this.creator = user.creators[0].creator;

            const creatorClasses = this.creator.classes ? this.creator.classes : [];

            this.isSubscribedUser = this.creator.subscribed.length > 0;

            this.sampleClasses = this.creator.sample_classes;

            if (!this.isSubscribedUser) {
              this.teacherClasses = creatorClasses.filter(teacherClass => !teacherClass.is_bought);
              this.userClasses = creatorClasses.filter(teacherClass => teacherClass.is_bought);
            } else {
              this.userClasses = this.creator.classes;
            }
          }
        }
      })
    );
  }

  load() {
    // console.log('GetCurrentUserRequestAction');
    // this.store.dispatch(new GetCurrentUserRequestAction());
  }
  ngAfterViewInit() {
    this.checkOpenTakethetourModal();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onClassView(recording: any) {
    this.router.navigate(['/', RouteNames.teacher, RouteNames.recordings, recording.creatorslug, recording.slug ]);
  }

  checkOpenTakethetourModal() {
    if (this.navigationData && this.navigationData.openTakethetourModal) {
      openTourModal(this.dialog);
    }
  }
}
