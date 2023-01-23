import { Action } from '@ngrx/store';

export enum ForgottenPasswordActionTypes {
  FORGOTTEN_PASSWORD_RESET_REQUEST = '[forgotten password reset] request',
  FORGOTTEN_PASSWORD_RESET_SUCCESS = '[forgotten password reset] success',
  FORGOTTEN_PASSWORD_RESET_FAILURE = '[forgotten password reset] failure',

  RESET_PASSWORD_REQUEST = '[reset password] request',
  RESET_PASSWORD_SUCCESS = '[reset password] success',
  RESET_PASSWORD_FAILURE = '[reset password] failure',
}


// SEND EMAIL TO RESET PASSWORD
export class ForgottenPasswordResetRequestAction implements Action {
  readonly type: string = ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_REQUEST;
  constructor(public payload: any) {}
}

export class ForgottenPasswordResetSuccessAction implements Action {
  readonly type: string = ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_SUCCESS;

  constructor(public payload: any) {}
}

export class ForgottenPasswordResetFailureAction implements Action {
  readonly type: string = ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_FAILURE;

  constructor(public payload: any) {}
}


// ACTUALLY RESET PASSWORD
export class ResetPasswordRequestAction implements Action {
  readonly type: string = ForgottenPasswordActionTypes.RESET_PASSWORD_REQUEST;
  constructor(public payload: any) { }
}

export class ResetPasswordSuccessAction implements Action {
  readonly type: string = ForgottenPasswordActionTypes.RESET_PASSWORD_SUCCESS;

  constructor(public payload: any) { }
}

export class ResetPasswordFailureAction implements Action {
  readonly type: string = ForgottenPasswordActionTypes.RESET_PASSWORD_FAILURE;

  constructor(public payload: any) { }
}