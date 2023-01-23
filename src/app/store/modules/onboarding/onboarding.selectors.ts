import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IOnboardingReducerState } from './onboarding.types';
import { getEntity, getErrors, getStatus, getFormData } from '../../helpers/adapters';

export const selectOnboardingState = createFeatureSelector<IOnboardingReducerState>('onboarding');
export const selectOnboardingStatus = createSelector(
  selectOnboardingState,
  getStatus
);
export const selectOnboardingEntity = createSelector(
  selectOnboardingState,
  getEntity
);
export const selectOnboardingMessage = createSelector(
  selectOnboardingState,
  (state: any) => {
    return state.message;
  }
);
export const selectOnboardingIscompleted = createSelector(
  selectOnboardingEntity,
  (entity: any) => {
    return entity.isCompleted
  }
);
export const selectOnboardingErrors = createSelector(
  selectOnboardingState,
  getErrors
);

export const selectOnboardingTeacherFormData = createSelector(
  selectOnboardingState,
  getFormData
);
