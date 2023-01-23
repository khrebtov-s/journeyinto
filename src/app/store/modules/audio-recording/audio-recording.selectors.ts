import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAudioRecordingReducerState } from './audio-recording.types';
import { getAll, getErrors, getStatus } from '../../helpers/adapters';

export const selectAudioRecordingState = createFeatureSelector<IAudioRecordingReducerState>('recording');

export const selectAudioRecording = createSelector(
  selectAudioRecordingState,
  (state: any) => state.uploaded
);

export const selectAudioRecordingStatus = createSelector(
  selectAudioRecordingState,
  getStatus
);

export const selectAudioRecordingErrors = createSelector(
  selectAudioRecordingState,
  getErrors
);