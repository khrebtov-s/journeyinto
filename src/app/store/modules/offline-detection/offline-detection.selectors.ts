import { INetworkReducerState } from './offline-detection.types';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getNetworkState = createFeatureSelector<INetworkReducerState>('network');

export const getIsOnline = createSelector(
  getNetworkState,
  (state: INetworkReducerState) => state.isOnline
);
