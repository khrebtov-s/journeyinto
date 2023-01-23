import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAppState } from '@src/app/store/app.reducers';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { GetNotificationListRequestAction } from '@src/app/store/modules/notification/notification.actions';
import { selectNotifications } from '@src/app/store/modules/notification/notification.selectors';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  public subscriptions: Array<Subscription> = [];
  public notifications$ = this.store.pipe(
    select(selectNotifications),
    filter(Boolean)
  );
  public notifications = null;

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.notifications$.subscribe(data => {
        this.notifications = data;
      })
    );

    this.store.dispatch(new GetNotificationListRequestAction());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
