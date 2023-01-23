import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { GetCurrentUserRequestAction } from '@src/app/store/modules/user/user.actions';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TeacherInterface } from '@src/app/interfaces/teachers';
import { StudentInterface } from '@src/app/interfaces/students';
import { RouteNames } from '@src/app/route-names';
import _ from 'lodash';
import { SpinnerOverlayService } from '@src/app/services';

@Component({
  selector: 'app-my-practice',
  templateUrl: './my-practice.component.html',
  styleUrls: ['./my-practice.component.scss']
})
export class MyPracticeComponent implements OnInit, OnDestroy {
  public routeNames = RouteNames;
  public subscriptions: Subscription[] = [];

  public user$: Observable<any> = this.store.pipe(
    select(selectUserActive),
    filter(user => Boolean(user))
  );

  public user: StudentInterface = null;
  public creator: TeacherInterface = null;

  public sampleClasses: any = [];
  public teacherClasses: any = [];

  public isSubscribedUser: boolean;
  public viewStatuses = ViewStatuses;

  public emptyField = 'n/a';

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    public spinner: SpinnerOverlayService
  ) {}

  ngOnInit() {
    // ('GetCurrentUserRequestAction');
    this.store.dispatch(new GetCurrentUserRequestAction());

    this.subscriptions.push(
      this.user$.subscribe(user => {
        this.user = user;

        if (this.user.creators.length) {
          this.creator = user.creators[0].creator;

          // ({creator: this.creator});

          if (this.creator) {
            // hideoverlay
            // console.log('hide spinner');
            this.spinner.hide();
  
            this.isSubscribedUser = this.creator.subscribed.length > 0;
            this.teacherClasses = _.orderBy(this.creator.classes, ['is_bought', 'created_at'], ['desc', 'desc']);
            this.sampleClasses = this.creator.sample_classes;
          } else {
            this.store.dispatch(new GetCurrentUserRequestAction());
          }
        }
      }),
    );
  }

  subscribeToTeacher(classBought = false) {
    this.router.navigate(['/', RouteNames.student, RouteNames.subscription], {
      state: {
        data: { classBought }
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
