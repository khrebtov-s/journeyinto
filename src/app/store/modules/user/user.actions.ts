import { Action } from '@ngrx/store';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';

export enum UserActionTypes {
  GET_CURRENT_USER_REQUEST = '[get current user] request',
  GET_CURRENT_USER_SUCCESS = '[get current user] success',
  GET_CURRENT_USER_FAILURE = '[get current user] failure',

  SWITCH_USER_VIEW_STATUS_REQUEST = '[switch user view status] request',
  SWITCH_USER_VIEW_STATUS_SUCCESS = '[switch user view status] success',
  SWITCH_USER_VIEW_STATUS_FAILURE = '[switch user view status] failure',
  
  UPDATE_CURRENT_USER_REQUEST = '[update current user] request',
  UPDATE_CURRENT_USER_SUCCESS = '[update current user] success',
  UPDATE_CURRENT_USER_FAILURE = '[update current user] failure',

  CHECK_USER = '[check user]',
}

// Get current user by access token
export class GetCurrentUserRequestAction implements Action {
  readonly type: string = UserActionTypes.GET_CURRENT_USER_REQUEST;

  constructor(public payload: any = null) {}
}

export class CheckUserToken implements Action {
  readonly type: string = UserActionTypes.CHECK_USER;
  constructor(public payload: any = null) {}
}

export class GetCurrentUserSuccessAction implements Action {
  readonly type: string = UserActionTypes.GET_CURRENT_USER_SUCCESS;

  constructor(public payload: any) {}
}

export class GetCurrentUserFailureAction implements Action {
  readonly type: string = UserActionTypes.GET_CURRENT_USER_FAILURE;

  constructor(public payload: ViewStatuses) {}
}

// Switch user view status - Student / Creator
export class SwitchUserViewStatusRequestAction implements Action {
  readonly type: string = UserActionTypes.SWITCH_USER_VIEW_STATUS_REQUEST;

  constructor(public payload: any = null) {}
}

export class SwitchUserViewStatusSuccessAction implements Action {
  readonly type: string = UserActionTypes.SWITCH_USER_VIEW_STATUS_SUCCESS;

  constructor(public payload: any) {}
}

export class SwitchUserViewStatusFailureAction implements Action {
  readonly type: string = UserActionTypes.SWITCH_USER_VIEW_STATUS_FAILURE;

  constructor(public payload: any) {}
}

// Update current user account
export class UpdateCurrentUserRequestAction implements Action {
  readonly type: string = UserActionTypes.UPDATE_CURRENT_USER_REQUEST;

  constructor(public payload: any) {}
}

export class UpdateCurrentUserSuccessAction implements Action {
  readonly type: string = UserActionTypes.UPDATE_CURRENT_USER_SUCCESS;

  constructor(public payload: any) {}
}

export class UpdateCurrentUserFailureAction implements Action {
  readonly type: string = UserActionTypes.UPDATE_CURRENT_USER_FAILURE;

  constructor(public payload: any) {}
}

