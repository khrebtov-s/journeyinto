import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStudentsReducerState } from './students.types';
import { getAll, getErrors, getStatus } from '../../helpers/adapters';
import { denormalize } from 'normalizr';

export const selectStudentsState = createFeatureSelector<IStudentsReducerState>('students');
export const selectStudents = createSelector(
  selectStudentsState,
  getAll
);
export const selectStudentsActiveId = createSelector(
  selectStudentsState,
  (state: any) => state.activeId
);

export const selectStudentsEntities = createSelector(
  selectStudentsState,
  (state: any) => state.entities
);

export const selectStudentsSubscriptionStatus = createSelector(
  selectStudentsState,
  (state: any) => state.subscriptionStatus
);

export const selectStudentsStatus = createSelector(
  selectStudentsState,
  getStatus
);
export const selectStudentsErrors = createSelector(
  selectStudentsState,
  getErrors
);