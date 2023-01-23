import { ActionReducer, combineReducers } from '@ngrx/store';
import { SignUpActionTypes } from './sign-up.actions';
import { ISignUpReducerState, TSignUpActionsUnion, TSignUpErrorsReducer, TSignUpStatusReducer } from './sign-up.types';
import { RequestStatus } from '@src/app/services/api.service.interface';

const initialState_status: TSignUpStatusReducer = null;
const status = (state = initialState_status, { type }: TSignUpActionsUnion): TSignUpStatusReducer => {
  switch (type) {
    case SignUpActionTypes.SIGN_UP_REQUEST:
      return RequestStatus.pending;

    case SignUpActionTypes.SIGN_UP_SUCCESS:
      return RequestStatus.success;

    case SignUpActionTypes.SIGN_UP_FAILURE:
      return RequestStatus.failure;

    default:
      return state;
  }
};

const initialState_errors: TSignUpErrorsReducer = null;
const errors = (state = initialState_errors, { type, payload }: TSignUpActionsUnion): TSignUpErrorsReducer => {
  switch (type) {
    case SignUpActionTypes.SIGN_UP_REQUEST:
      return initialState_errors;

    case SignUpActionTypes.SIGN_UP_SUCCESS:
      return initialState_errors;

    case SignUpActionTypes.SIGN_UP_FAILURE:
      return payload.message;

    default:
      return state;
  }
};

export const signUpReducers: ActionReducer<ISignUpReducerState> = combineReducers({
  status,
  errors
});
