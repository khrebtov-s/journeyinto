import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthenticationReducerState } from './authentication.types';
import { getEntity, getErrors, getStatus } from '../../helpers/adapters';

export const selectAuthenticationState = createFeatureSelector<IAuthenticationReducerState>('authentication');
export const selectAuthenticationStatus = createSelector(
  selectAuthenticationState,
  getStatus
);
export const selectAuthenticationEntity = createSelector(
  selectAuthenticationState,
  getEntity
);
export const selectAuthenticationErrors = createSelector(
  selectAuthenticationState,
  getErrors
);

export const selectIsAuthenticated = createSelector(
  selectAuthenticationEntity,
  (entity: any) => entity.isAuthenticated
);

export const selectUserId = createSelector(selectAuthenticationEntity, (state: any) => state.user_id);