import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserReducerState } from './user.types';
import { getEntities, getErrors, getStatus, getActiveId, getActive } from '../../helpers/adapters';
import { userSchema } from '@src/app/store/modules/user/user.schema';
import { denormalize } from 'normalizr';
import { selectNotificationEntities } from '@src/app/store/modules/notification/notification.selectors';
import { selectTeachersEntities } from '@src/app/store/modules/teachers/teachers.selectors';

export const selectUserState = createFeatureSelector<IUserReducerState>('users');

export const selectUserEntities = createSelector(
  selectUserState,
  getEntities
);

export const selectUserActiveId = createSelector(
  selectUserState,
  getActiveId
);

export const selectUserStatus = createSelector(
  selectUserState,
  getStatus
);

export const selectUserErrors = createSelector(
  selectUserState,
  getErrors
);

export const selectUserMessages = createSelector(
  selectUserState,
  (state: any) => {
    return state.message;
  }
);

export const selectUserTeachers = createSelector(
  selectUserEntities,
  (state: any) => state.activeId
);

// active user
export const selectUserActive = createSelector(
  [selectUserActiveId, selectUserEntities, selectNotificationEntities, selectTeachersEntities],
  (activeId, entities, notifications, teachers) =>  denormalize(activeId, userSchema, { users: entities, notifications, teachers })
);
