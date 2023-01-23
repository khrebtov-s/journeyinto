import {
  ForgottenPasswordResetRequestAction,
  ForgottenPasswordResetSuccessAction,
  ForgottenPasswordResetFailureAction,

  ResetPasswordRequestAction,
  ResetPasswordSuccessAction,
  ResetPasswordFailureAction
} from './forgotten-password.actions';

// Actions
export type TForgottenPasswordActionsUnion =
  | ForgottenPasswordResetRequestAction
  | ForgottenPasswordResetSuccessAction
  | ForgottenPasswordResetFailureAction;

export type TResetPasswordActionsUnion =
  | ResetPasswordRequestAction
  | ResetPasswordSuccessAction
  | ResetPasswordFailureAction;

export type TPasswordActionsUnion =
  | TForgottenPasswordActionsUnion
  | TResetPasswordActionsUnion;

// Reducers
export type TForgottenPasswordStatusReducer = null | string;
export type TForgottenPasswordErrorsReducer = any;
export type TForgottenPasswordMessageReducer = any;

export interface IForgottenPasswordReducerState {
  status: TForgottenPasswordStatusReducer;
  errors: TForgottenPasswordErrorsReducer;
  message: TForgottenPasswordMessageReducer;
}
