import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/index';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { IAppState } from '@src/app/store/app.reducers';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { RouteNames } from '../../route-names';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() description: string;
  @Input() descriptionLine2: string;
  @Input() downloadBtn = false;
  @Input() icon: string;
  @Input() doOnboarding = true;
  @Input() isSubscription = false;

  public subscriptions: Subscription[] = [];
  public user$: Observable<any> = this.store.pipe(
    select(selectUserActive),
    filter(user => Boolean(user))
  );
  public user: any = null;

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.user$.subscribe(user => {
        this.user = user;
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  goToDashboard() {
    if (this.user) {
      if (!this.isSubscription) {
        const navigateData = { state: { openTakethetourModal: !!this.doOnboarding } };
        this.user.view_status === ViewStatuses.STUDENT
          ? this.router.navigate(['/', RouteNames.student], navigateData)
          : this.router.navigate(['/', RouteNames.teacher], navigateData);
      } else {
        this.user.view_status === ViewStatuses.STUDENT
          ? this.router.navigate(['/', RouteNames.student, RouteNames.myPractice])
          : this.router.navigate(['/', RouteNames.teacher]);

      }
    }
  }
}
