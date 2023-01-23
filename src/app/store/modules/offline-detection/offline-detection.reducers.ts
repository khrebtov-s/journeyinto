import { NetworkActionTypes, SetIsOnlineAction } from './offline-detection.actions';
import { NetworkActionsUnion, INetworkReducerState } from './offline-detection.types';

export const initialState: INetworkReducerState = {
  isOnline: navigator.onLine
};

export function networkReducer(state = initialState, action: NetworkActionsUnion): INetworkReducerState {
  switch (action.type) {
    case NetworkActionTypes.SET_IS_ONLINE:
      return handleIsOnline(state, action);

    default:
      return state;
  }
}

function handleIsOnline(state: INetworkReducerState, action: SetIsOnlineAction): INetworkReducerState {
  return {
    ...state,
    isOnline: action.payload
  };
}
