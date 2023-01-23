import { Action } from '@ngrx/store';

export enum SignUpActionTypes {
  SIGN_UP_REQUEST = '[sign up] request',
  SIGN_UP_SUCCESS = '[sign up] success',
  SIGN_UP_FAILURE = '[sign up] failure'
}

export class SignUpRequestAction implements Action {
  readonly type: string = SignUpActionTypes.SIGN_UP_REQUEST;
  constructor(public payload: any) {}
}

export class SignUpSuccessAction implements Action {
  readonly type: string = SignUpActionTypes.SIGN_UP_SUCCESS;

  constructor(public payload: any) {}
}

export class SignUpFailureAction implements Action {
  readonly type: string = SignUpActionTypes.SIGN_UP_FAILURE;

  constructor(public payload: any) {}
}
