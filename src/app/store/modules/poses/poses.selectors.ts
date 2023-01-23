import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPosesReducerState } from './poses.types';
import { getAll, getErrors, getStatus } from '../../helpers/adapters';
import { denormalize } from 'normalizr';
import { posesSchema } from '@src/app/store/modules/poses/poses.schema';

export const selectPosesState = createFeatureSelector<IPosesReducerState>('poses');
export const selectPoses = createSelector(
  selectPosesState,
  getAll
);
export const selectPosesActiveId = createSelector(
  selectPosesState,
  (state: any) => state.activeId
);

export const selectPosesEntities = createSelector(
  selectPosesState,
  (state: any) => state.entities
);

export const selectPosesStatus = createSelector(
  selectPosesState,
  getStatus
);

export const selectPosesErrors = createSelector(
  selectPosesState,
  getErrors
);

// active pose
export const selectPoseActive = createSelector(
  [selectPosesActiveId, selectPosesEntities],
  (activeId, entities) => denormalize(activeId, posesSchema, { poses: entities })
);
