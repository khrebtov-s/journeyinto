import { Component, OnDestroy, OnInit } from '@angular/core';

import { IAppState } from '@src/app/store/app.reducers';
import { select, Store } from '@ngrx/store';
import {
  GetTeacherBySlugRequestAction,
} from '../../../store/modules/teachers/teachers.actions';
import { Subscription } from 'rxjs';
import { selectUserActive } from '../../../store/modules/user/user.selectors';
import { Observable } from 'rxjs';

import { RouteNames } from '@src/app/route-names';
import { UtilsService } from '@src/app/services/utils.service';
import { selectTeachersObject } from '@src/app/store/modules/teachers/teachers.selectors';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class TeacherProfileComponent implements OnInit, OnDestroy {
  routeNames: typeof RouteNames = RouteNames;

  public subscriptions: Subscription[] = [];
  public user$: Observable<any> = this.store.pipe(select(selectUserActive));
  public teacher$: Observable<any> = this.store.pipe(select(selectTeachersObject));

  public user;
  public isValidVimeoUrl = false;

  constructor(
    private store: Store<IAppState>,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.user$
        .subscribe(user => {
          if (!this.user && user && user.creator && user.creator.slug) {
            this.user = user;
            this.store.dispatch(new GetTeacherBySlugRequestAction({
              slug: user.creator.slug,
              isLoggedin: true
            }));
          }
        }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  log(text, ...args) {
    this.utils.logall(text, this.constructor.name, ...args);
  }
}
