import { ActionReducer, combineReducers } from '@ngrx/store';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { PosesActionTypes } from './poses.actions';
import {
  IPosesReducerState,
  TPosesActionsUnion,
  TPosesActiveIdReducer,
  TPosesEntitiesReducer,
  TPosesErrorsReducer,
  TPosesIdsReducer,
  TPosesStatusReducer
} from './poses.types';
import { AuthenticationActionTypes } from '@src/app/store/modules/authentication/authentication.actions';

const initialState_status: TPosesStatusReducer = null;
const status = (state = initialState_status, { type }: TPosesActionsUnion): TPosesStatusReducer => {
  switch (type) {
    case PosesActionTypes.GET_POSES_LIST_REQUEST:
    case PosesActionTypes.GET_POSES_BY_SLUG_REQUEST:
    case PosesActionTypes.UPDATE_POSES_BY_ID_REQUEST:
      return RequestStatus.pending;

    case PosesActionTypes.GET_POSES_LIST_SUCCESS:
    case PosesActionTypes.GET_POSES_BY_SLUG_SUCCESS:
    case PosesActionTypes.UPDATE_POSES_BY_ID_SUCCESS:
      return RequestStatus.success;

    case PosesActionTypes.GET_POSES_LIST_FAILURE:
    case PosesActionTypes.GET_POSES_BY_SLUG_FAILURE:
    case PosesActionTypes.UPDATE_POSES_BY_ID_FAILURE:
      return RequestStatus.failure;

    default:
      return state;
  }
};

const initialState_entities: TPosesEntitiesReducer = {};
const entities = (
  state = initialState_entities,
  { type, payload }: TPosesActionsUnion
): TPosesEntitiesReducer => {
  switch (type) {
    case PosesActionTypes.GET_POSES_LIST_REQUEST:
    case PosesActionTypes.GET_POSES_BY_SLUG_REQUEST:
    case PosesActionTypes.UPDATE_POSES_BY_ID_REQUEST:
      return initialState_entities;

    case PosesActionTypes.GET_POSES_LIST_SUCCESS:
    case PosesActionTypes.GET_POSES_BY_SLUG_SUCCESS:
    case PosesActionTypes.UPDATE_POSES_BY_ID_SUCCESS:
      return payload.entities.poses;

    case PosesActionTypes.GET_POSES_LIST_FAILURE:
    case PosesActionTypes.GET_POSES_BY_SLUG_FAILURE:
    case PosesActionTypes.UPDATE_POSES_BY_ID_FAILURE:
    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_entities;

    default:
      return state;
  }
};

const initialState_ids: TPosesIdsReducer = [];
const ids = (state = initialState_ids, { type, payload }: TPosesActionsUnion): TPosesIdsReducer => {
  switch (type) {
    case PosesActionTypes.GET_POSES_LIST_REQUEST:
    case PosesActionTypes.GET_POSES_BY_SLUG_REQUEST:
    case PosesActionTypes.UPDATE_POSES_BY_ID_REQUEST:
      return initialState_ids;

    case PosesActionTypes.GET_POSES_LIST_SUCCESS:
    case PosesActionTypes.GET_POSES_BY_SLUG_SUCCESS:
    case PosesActionTypes.UPDATE_POSES_BY_ID_SUCCESS:
      return payload.result;

    case PosesActionTypes.GET_POSES_LIST_FAILURE:
    case PosesActionTypes.GET_POSES_BY_SLUG_FAILURE:
    case PosesActionTypes.UPDATE_POSES_BY_ID_FAILURE:
      return initialState_ids;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const initialState_errors: TPosesErrorsReducer = null;
const errors = (state = initialState_errors, { type, payload }: TPosesActionsUnion): TPosesErrorsReducer => {
  switch (type) {
    case PosesActionTypes.GET_POSES_LIST_REQUEST:
    case PosesActionTypes.GET_POSES_BY_SLUG_REQUEST:
    case PosesActionTypes.UPDATE_POSES_BY_ID_REQUEST:
      return initialState_errors;

    case PosesActionTypes.GET_POSES_LIST_SUCCESS:
    case PosesActionTypes.GET_POSES_BY_SLUG_SUCCESS:
    case PosesActionTypes.UPDATE_POSES_BY_ID_SUCCESS:
      return initialState_errors;

    case PosesActionTypes.GET_POSES_LIST_FAILURE:
    case PosesActionTypes.GET_POSES_BY_SLUG_FAILURE:
    case PosesActionTypes.UPDATE_POSES_BY_ID_FAILURE:
      return payload.message;

    default:
      return state;
  }
};

const initialState_activeId: TPosesActiveIdReducer = null;
const activeId = (state = initialState_activeId, { type, payload }: TPosesActionsUnion): TPosesActiveIdReducer => {
  switch (type) {
    case PosesActionTypes.GET_POSES_BY_SLUG_SUCCESS:
      return payload.result;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

export const posesReducers: ActionReducer<IPosesReducerState> = combineReducers({
  status,
  entities,
  ids,
  activeId,
  errors
});
