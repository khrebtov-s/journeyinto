import {
  AuthenticationBasicFailureAction,
  AuthenticationBasicRequestAction,
  AuthenticationBasicSuccessAction,
  LogoutFailureAction,
  LogoutRequestAction,
  LogoutSuccessAction
} from './authentication.actions';

// Actions
export type TAuthenticationBasicActionsUnion =
  | AuthenticationBasicRequestAction
  | AuthenticationBasicSuccessAction
  | AuthenticationBasicFailureAction;

export type TLogoutActionsUnion =
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;

export type TAuthenticationActionsUnion = TAuthenticationBasicActionsUnion | TLogoutActionsUnion;

// Reducers
export type TAuthenticationStatusReducer = null | string;
export type TAuthenticationEntityReducer = {
  user_id: number;
};
export type TAuthenticationErrorsReducer = any;

export interface IAuthenticationReducerState {
  status: TAuthenticationStatusReducer;
  entity: TAuthenticationEntityReducer;
  errors: TAuthenticationErrorsReducer;
}
