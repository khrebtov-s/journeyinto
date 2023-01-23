import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/index';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { Router } from '@angular/router';
import { StudentInterface } from '@src/app/interfaces/students';
import { filter } from 'rxjs/operators';
import { RouteNames } from '@src/app/route-names';
import { SpinnerOverlayService } from '@src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public user$: Observable<StudentInterface> = this.store.pipe(
    select(selectUserActive),
    filter(user => Boolean(user))
  );
  public subscriptions: Subscription[] = [];

  public user: StudentInterface = null;

  constructor(
    private store: Store<IAppState>,
    protected router: Router,
    private spinnerOverlayService: SpinnerOverlayService
  ) {}

  ngOnInit() {
    // showoverlay

    this.subscriptions.push(
      this.user$.subscribe(user => {
        if (user) {
          // hideoverlay

          if (user.view_status && user.view_status === ViewStatuses.STUDENT) {
            this.router.navigate(['/', RouteNames.student]);
          } else {
            this.router.navigate(['/', RouteNames.teacher]);
          }
        }
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
