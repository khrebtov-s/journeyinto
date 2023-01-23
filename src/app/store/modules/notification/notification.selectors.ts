import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INotificationReducerState } from './notification.types';
import { getAll, getErrors, getStatus } from '../../helpers/adapters';
import { denormalize } from 'normalizr';
import { notificationSchema } from '@src/app/store/modules/notification/notification.schema';

export const selectNotificationState = createFeatureSelector<INotificationReducerState>('notifications');

export const selectNotificationIds = createSelector(selectNotificationState, (state: any) => state.ids);

export const selectNotificationEntities = createSelector(
  selectNotificationState,
  (state: any) => state.entities
);

export const selectNotificationStatus = createSelector(
  selectNotificationState,
  getStatus
);
export const selectNotificationErrors = createSelector(
  selectNotificationState,
  getErrors
);

// notification list
export const selectNotifications = createSelector(
  [selectNotificationIds, selectNotificationEntities],
  (ids, entities) => denormalize(ids, [notificationSchema], {notifications: entities}),
);