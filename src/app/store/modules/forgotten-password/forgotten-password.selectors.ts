import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IForgottenPasswordReducerState } from './forgotten-password.types';
import { getErrors, getStatus } from '../../helpers/adapters';

export const selectForgottenPasswordState = createFeatureSelector<IForgottenPasswordReducerState>('forgottenPassword');
export const selectForgottenPasswordStatus = createSelector(
  selectForgottenPasswordState,
  getStatus
);
export const selectForgottenPasswordErrors = createSelector(
  selectForgottenPasswordState,
  getErrors
);
export const selectForgottenPasswordMessage = createSelector(
  selectForgottenPasswordState,
  (state: any) => {
    return state.message;
  }
);