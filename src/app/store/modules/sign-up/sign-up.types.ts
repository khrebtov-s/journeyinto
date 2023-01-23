import { SignUpRequestAction, SignUpSuccessAction, SignUpFailureAction } from './sign-up.actions';

// Actions
export type TSignUpActionsUnion = SignUpRequestAction | SignUpSuccessAction | SignUpFailureAction;

// Reducers
export type TSignUpStatusReducer = null | string;
export type TSignUpErrorsReducer = any;

export interface ISignUpReducerState {
  status: TSignUpStatusReducer;
  errors: TSignUpErrorsReducer;
}
