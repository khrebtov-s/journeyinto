import { ActionReducer, combineReducers } from '@ngrx/store';
import { AuthenticationActionTypes } from './authentication.actions';
import {
  IAuthenticationReducerState,
  TAuthenticationActionsUnion,
  TAuthenticationEntityReducer,
  TAuthenticationErrorsReducer,
  TAuthenticationStatusReducer
} from './authentication.types';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { UserActionTypes } from '@src/app/store/modules/user/user.actions';

const initialState_status: TAuthenticationStatusReducer = null;
const status = (state = initialState_status, { type }: TAuthenticationActionsUnion): TAuthenticationStatusReducer => {
  switch (type) {
    case AuthenticationActionTypes.AUTHENTICATION_BASIC_REQUEST:
      return RequestStatus.pending;

    case AuthenticationActionTypes.AUTHENTICATION_BASIC_SUCCESS:
      return RequestStatus.success;

    case AuthenticationActionTypes.AUTHENTICATION_BASIC_FAILURE:
      return RequestStatus.failure;

    default:
      return state;
  }
};

const initialState_entity: TAuthenticationEntityReducer = {
  user_id: null
};

const entity = (
  state = initialState_entity,
  { type, payload }: TAuthenticationActionsUnion
): TAuthenticationEntityReducer => {
  switch (type) {
    case AuthenticationActionTypes.AUTHENTICATION_BASIC_REQUEST:
      return state;

    case AuthenticationActionTypes.AUTHENTICATION_BASIC_SUCCESS:
      return {
        ...state,
      };

    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user_id: payload.result
      };

    case AuthenticationActionTypes.AUTHENTICATION_BASIC_FAILURE:
      return state;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_entity;

    default:
      return state;
  }
};

const initialState_errors: TAuthenticationErrorsReducer = null;
const errors = (
  state = initialState_errors,
  { type, payload }: TAuthenticationActionsUnion
): TAuthenticationErrorsReducer => {
  switch (type) {
    case AuthenticationActionTypes.AUTHENTICATION_BASIC_REQUEST:
      return initialState_errors;

    case AuthenticationActionTypes.AUTHENTICATION_BASIC_SUCCESS:
      return initialState_errors;

    case AuthenticationActionTypes.AUTHENTICATION_BASIC_FAILURE:
      return payload.message;

    default:
      return state;
  }
};

export const authenticationReducers: ActionReducer<IAuthenticationReducerState> = combineReducers({
  status,
  entity,
  errors
});
