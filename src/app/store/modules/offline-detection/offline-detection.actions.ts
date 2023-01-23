import { Action } from '@ngrx/store';

export enum NetworkActionTypes {
  START_ONLINE_OFFLINE_CHECK = '[Network] StartOnlineOfflineCheck',
  SET_IS_ONLINE = '[Network] SetIsOnline'
}

export class StartOnlineOfflineCheckAction implements Action {
  readonly type = NetworkActionTypes.START_ONLINE_OFFLINE_CHECK;
}

export class SetIsOnlineAction implements Action {
  readonly type = NetworkActionTypes.SET_IS_ONLINE;

  constructor(public payload: boolean) {}
}
