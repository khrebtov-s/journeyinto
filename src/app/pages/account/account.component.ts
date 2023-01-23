import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { select, Store } from '@ngrx/store';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { IAppState } from '@src/app/store/app.reducers';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { StudentInterface } from '@src/app/interfaces/students';
import { filter } from 'rxjs/operators';

import { RouteNames } from '../../route-names';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  public user$: Observable<StudentInterface> = this.store.pipe(
    select(selectUserActive),
    filter(user => Boolean(user))
  );
  public subscriptions: Subscription[] = [];

  public user: StudentInterface = null;

  constructor(
    private store: Store<IAppState>,
    protected router: Router
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.user$.subscribe(user => {
        if (user.view_status === ViewStatuses.STUDENT) {
          this.router.navigate(['/', RouteNames.student, RouteNames.account]);
        }
        if (user.view_status === ViewStatuses.TEACHER) {
          this.router.navigate(['/', RouteNames.teacher, RouteNames.account]);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
