import { ActionReducer, combineReducers } from '@ngrx/store';
import { ForgottenPasswordActionTypes } from './forgotten-password.actions';
import {
  IForgottenPasswordReducerState,
  TForgottenPasswordActionsUnion,
  TForgottenPasswordStatusReducer,
  TForgottenPasswordErrorsReducer
} from './forgotten-password.types';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { TForgottenPasswordMessageReducer } from '@src/app/store/modules/forgotten-password/forgotten-password.types';

const initialState_status: TForgottenPasswordStatusReducer = null;
const status = (
  state = initialState_status,
  { type }: TForgottenPasswordActionsUnion
): TForgottenPasswordStatusReducer => {
  switch (type) {
    case ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_REQUEST:
    case ForgottenPasswordActionTypes.RESET_PASSWORD_REQUEST:
      return RequestStatus.pending;

    case ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_SUCCESS:
    case ForgottenPasswordActionTypes.RESET_PASSWORD_SUCCESS:
      return RequestStatus.success;

    case ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_FAILURE:
    case ForgottenPasswordActionTypes.RESET_PASSWORD_FAILURE:
      return RequestStatus.failure;

    default:
      return state;
  }
};
const initialState_message: TForgottenPasswordMessageReducer = null;
const message = (
  state = initialState_message,
  { type, payload }: TForgottenPasswordActionsUnion
): TForgottenPasswordMessageReducer => {
  switch (type) {
    case ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_SUCCESS:
    case ForgottenPasswordActionTypes.RESET_PASSWORD_SUCCESS:
      return payload.detail;

    default:
      return state;
  }
};

const initialState_errors: TForgottenPasswordErrorsReducer = null;
const errors = (
  state = initialState_errors,
  { type, payload }: TForgottenPasswordActionsUnion
): TForgottenPasswordErrorsReducer => {
  switch (type) {
    case ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_REQUEST:
    case ForgottenPasswordActionTypes.RESET_PASSWORD_REQUEST:
      return initialState_errors;

    case ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_SUCCESS:
    case ForgottenPasswordActionTypes.RESET_PASSWORD_SUCCESS:
      return initialState_errors;

    case ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_FAILURE:
    case ForgottenPasswordActionTypes.RESET_PASSWORD_FAILURE:
      return payload.error;

    default:
      return state;
  }
};

export const forgottenPasswordReducers: ActionReducer<IForgottenPasswordReducerState> = combineReducers({
  status,
  errors,
  message
});
