import { StartOnlineOfflineCheckAction, SetIsOnlineAction } from './offline-detection.actions';

export type NetworkActionsUnion = StartOnlineOfflineCheckAction | SetIsOnlineAction;

export interface INetworkReducerState {
  isOnline: boolean;
}