import { Action } from '@ngrx/store';

export enum NotificationActionTypes {
  GET_NOTIFICATION_LIST_REQUEST = '[get notification list] request',
  GET_NOTIFICATION_LIST_SUCCESS = '[get notification list] success',
  GET_NOTIFICATION_LIST_FAILURE = '[get notification list] failure',
}


// Get teachers list
export class GetNotificationListRequestAction implements Action {
  readonly type: string = NotificationActionTypes.GET_NOTIFICATION_LIST_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetNotificationListSuccessAction implements Action {
  readonly type: string = NotificationActionTypes.GET_NOTIFICATION_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class GetNotificationListFailureAction implements Action {
  readonly type: string = NotificationActionTypes.GET_NOTIFICATION_LIST_FAILURE;

  constructor(public payload: any) {}
}