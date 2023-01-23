import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISignUpReducerState } from './sign-up.types';
import { getErrors, getStatus } from '@src/app/store/helpers/adapters';

export const selectSignUpState = createFeatureSelector<ISignUpReducerState>('signUp');
export const selectSignUpStatus = createSelector(
  selectSignUpState,
  getStatus
);
export const selectSignUpErrors = createSelector(
  selectSignUpState,
  getErrors
);

export const selectSignUpMessage = createSelector(
  selectSignUpState,
  (state: any) => {
    return state.message;
  }
);