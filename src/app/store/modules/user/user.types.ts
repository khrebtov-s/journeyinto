import {
  GetCurrentUserRequestAction,
  GetCurrentUserSuccessAction,
  GetCurrentUserFailureAction,
  SwitchUserViewStatusRequestAction,
  SwitchUserViewStatusSuccessAction,
  SwitchUserViewStatusFailureAction,
  UpdateCurrentUserRequestAction,
  UpdateCurrentUserSuccessAction,
  UpdateCurrentUserFailureAction
} from './user.actions';

// Actions
export type TGetCurrentUserActionsUnion =
  | GetCurrentUserRequestAction
  | GetCurrentUserSuccessAction
  | GetCurrentUserFailureAction;

export type TUpdateCurrentUserActionsUnion =
  | UpdateCurrentUserRequestAction
  | UpdateCurrentUserSuccessAction
  | UpdateCurrentUserFailureAction;

export type TSwitchUserViewStatusActionsUnion =
  | SwitchUserViewStatusRequestAction
  | SwitchUserViewStatusSuccessAction
  | SwitchUserViewStatusFailureAction;

export type TUserActionsUnion =
  | TGetCurrentUserActionsUnion
  | TSwitchUserViewStatusActionsUnion;

// Reducers
export type TUserStatusReducer = null | string;
export type TUserEntitiesReducer = {};
export type TUserIdsReducer = number[];
export type TUserMessageReducer = any;
export type TUserErrorsReducer = any;
export type TUserActiveIdReducer = null | string;

export interface IUserReducerState {
  status: TUserStatusReducer;
  entities: TUserEntitiesReducer;
  ids: TUserIdsReducer;
  errors: TUserErrorsReducer;
  activeId: TUserActiveIdReducer;
  message: TUserMessageReducer;
}

export enum ViewStatuses {
  STUDENT = 'student',
  TEACHER = 'creator'
}
