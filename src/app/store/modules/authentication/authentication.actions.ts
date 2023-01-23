import { Action } from '@ngrx/store';

export enum AuthenticationActionTypes {
  AUTHENTICATION_BASIC_REQUEST = '[authentication basic] request',
  AUTHENTICATION_BASIC_SUCCESS = '[authentication basic] success',
  AUTHENTICATION_BASIC_FAILURE = '[authentication basic] failure',

  LOGOUT_REQUEST = '[logout] request',
  LOGOUT_SUCCESS = '[logout] success',
  LOGOUT_FAILURE = '[logout] failure'
}

// Basic authentication (email/password)
export class AuthenticationBasicRequestAction implements Action {
  readonly type: string = AuthenticationActionTypes.AUTHENTICATION_BASIC_REQUEST;

  constructor(public payload: any) {}
}

export class AuthenticationBasicSuccessAction implements Action {
  readonly type: string = AuthenticationActionTypes.AUTHENTICATION_BASIC_SUCCESS;

  constructor(public payload: any) {}
}

export class AuthenticationBasicFailureAction implements Action {
  readonly type: string = AuthenticationActionTypes.AUTHENTICATION_BASIC_FAILURE;

  constructor(public payload: any) {}
}

// Logout
export class LogoutRequestAction implements Action {
  readonly type: string = AuthenticationActionTypes.LOGOUT_REQUEST;

  constructor(public payload: any = null) {}
}

export class LogoutSuccessAction implements Action {
  readonly type: string = AuthenticationActionTypes.LOGOUT_SUCCESS;

  constructor(public payload: any = null) {}
}

export class LogoutFailureAction implements Action {
  readonly type: string = AuthenticationActionTypes.LOGOUT_FAILURE;

  constructor(public payload: any = null) {}
}
