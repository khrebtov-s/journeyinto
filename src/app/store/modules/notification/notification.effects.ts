import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { normalize } from 'normalizr';
import { NotificationService } from '@src/app/services/notification/notification.service';
import {
  GetNotificationListFailureAction,
  GetNotificationListRequestAction, GetNotificationListSuccessAction,
  NotificationActionTypes
} from '@src/app/store/modules/notification/notification.actions';
import { notificationSchema } from '@src/app/store/modules/notification/notification.schema';

@Injectable()
export class NotificationEffects {
  constructor(protected actions$: Actions, protected router: Router, protected notificationService: NotificationService) {}

  @Effect()
  protected getNotificationList = this.actions$.pipe(
    ofType<GetNotificationListRequestAction>(NotificationActionTypes.GET_NOTIFICATION_LIST_REQUEST),
    exhaustMap(() =>
      this.notificationService.list().pipe(
        map((response: any) => new GetNotificationListSuccessAction(normalize(response, [notificationSchema]))),
        catchError((error: any) => of(new GetNotificationListFailureAction(error)))
      )
    )
  );

}