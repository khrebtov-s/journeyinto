import {
  GetNotificationListFailureAction,
  GetNotificationListRequestAction,
  GetNotificationListSuccessAction
} from '@src/app/store/modules/notification/notification.actions';

export type TNotificationStatusReducer = null | string;
export type TNotificationEntitiesReducer = {};
export type TNotificationIdsReducer = number[];
export type TNotificationErrorsReducer = any;

export type GetNotificationListActionsUnion =
  | GetNotificationListRequestAction
  | GetNotificationListSuccessAction
  | GetNotificationListFailureAction;

export interface INotificationReducerState {
  status: TNotificationStatusReducer;
  entities: TNotificationEntitiesReducer;
  ids: TNotificationIdsReducer;
  errors: TNotificationErrorsReducer;
}
