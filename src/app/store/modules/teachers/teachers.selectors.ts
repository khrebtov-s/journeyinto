import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getAll, getErrors, getStatus } from '../../helpers/adapters';
import { denormalize } from 'normalizr';
import { ITeachersReducerState } from './teachers.types';
import { teachersSchema } from '@src/app/store/modules/teachers/teachers.schema';

export const selectTeachersState = createFeatureSelector<ITeachersReducerState>('teachers');
export const selectTeachers = createSelector(
  selectTeachersState,
  getAll
);
export const selectTeachersActiveId = createSelector(
  selectTeachersState,
  (state: any) => state.activeId
);

export const selectTeachersEntities = createSelector(
  selectTeachersState,
  (state: any) => state.entities
);

export const selectTeachersStatus = createSelector(
  selectTeachersState,
  getStatus
);
export const selectTeachersErrors = createSelector(
  selectTeachersState,
  getErrors
);
export const selectTeachersObject = createSelector(
  selectTeachersState,
  (state: any) => {
    return state.teacherState;
  }
);

// active teacher
export const selectTeachersActive = createSelector(
  [selectTeachersActiveId, selectTeachersEntities],
  (activeId, entities) => {
    return denormalize(activeId, teachersSchema, { teachers: entities });
  }
);
