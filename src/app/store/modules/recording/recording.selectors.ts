import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRecordingReducerState } from './recording.types';
import { getAll, getErrors, getStatus } from '../../helpers/adapters';

export const selectRecordingState = createFeatureSelector<IRecordingReducerState>('recordings');

export const selectRecordings = createSelector(
  selectRecordingState,
  (state: any) => {
    return state.recordings;
  }
);

export const selectRecording = createSelector(
  selectRecordingState,
  getAll
);

export const selectRecordingEntities = createSelector(
  selectRecordingState,
  (state: any) => state.entities
);

export const selectRecordingStatus = createSelector(
  selectRecordingState,
  getStatus
);

export const selectRecordingErrors = createSelector(
  selectRecordingState,
  getErrors
);