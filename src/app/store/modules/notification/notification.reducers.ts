import { ActionReducer, combineReducers } from '@ngrx/store';
import { RequestStatus } from '@src/app/services/api.service.interface';

import {
  TNotificationEntitiesReducer,
  TNotificationErrorsReducer,
  TNotificationIdsReducer,
  TNotificationStatusReducer
} from './notification.types';
import {
  GetNotificationListActionsUnion,
  INotificationReducerState
} from '@src/app/store/modules/notification/notification.types';
import { NotificationActionTypes } from '@src/app/store/modules/notification/notification.actions';
import { UserActionTypes } from '@src/app/store/modules/user/user.actions';
import { AuthenticationActionTypes } from '@src/app/store/modules/authentication/authentication.actions';
const initialState_status: TNotificationStatusReducer = null;

const status = (state = initialState_status, { type }: GetNotificationListActionsUnion): TNotificationStatusReducer => {
  switch (type) {
    case NotificationActionTypes.GET_NOTIFICATION_LIST_REQUEST:
    case UserActionTypes.GET_CURRENT_USER_REQUEST:
      return RequestStatus.pending;

    case NotificationActionTypes.GET_NOTIFICATION_LIST_SUCCESS:
      return RequestStatus.success;

    case NotificationActionTypes.GET_NOTIFICATION_LIST_FAILURE:
    case UserActionTypes.GET_CURRENT_USER_FAILURE:
      return RequestStatus.failure;
    default:
      return state;
  }
};

const initialState_entities: TNotificationEntitiesReducer = {};
const entities = (
  state = initialState_entities,
  { type, payload }: GetNotificationListActionsUnion
): TNotificationEntitiesReducer => {
  switch (type) {
    case NotificationActionTypes.GET_NOTIFICATION_LIST_REQUEST:
      return initialState_entities;

    case NotificationActionTypes.GET_NOTIFICATION_LIST_SUCCESS:
      return payload.entities.notifications;

    case NotificationActionTypes.GET_NOTIFICATION_LIST_FAILURE:
      return initialState_entities;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const initialState_ids: TNotificationIdsReducer = [];
const ids = (state = initialState_ids, { type, payload }: GetNotificationListActionsUnion): TNotificationIdsReducer => {
  switch (type) {
    case NotificationActionTypes.GET_NOTIFICATION_LIST_REQUEST:
      return initialState_ids;

    case NotificationActionTypes.GET_NOTIFICATION_LIST_SUCCESS:
      return payload.result;

    case NotificationActionTypes.GET_NOTIFICATION_LIST_FAILURE:
      return initialState_ids;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const initialState_errors: TNotificationErrorsReducer = null;

const errors = (
  state = initialState_errors,
  { type, payload }: GetNotificationListActionsUnion
): TNotificationErrorsReducer => {
  switch (type) {
    case NotificationActionTypes.GET_NOTIFICATION_LIST_REQUEST:
      return initialState_errors;
    case NotificationActionTypes.GET_NOTIFICATION_LIST_SUCCESS:
      return initialState_errors;
    case NotificationActionTypes.GET_NOTIFICATION_LIST_FAILURE:
      return payload.message;
    default:
      return state;
  }
};

export const notificationReducers: ActionReducer<INotificationReducerState> = combineReducers({
  status,
  entities,
  ids,
  errors
});
