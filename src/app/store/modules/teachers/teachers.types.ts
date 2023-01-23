import {
  GetTeachersListRequestAction,
  GetTeachersListSuccessAction,
  GetTeachersListFailureAction,
  GetTeacherBySlugFailureAction,
  GetTeacherBySlugRequestAction,
  GetTeacherBySlugSuccessAction,
  UpdateTeacherFailureAction,
  UpdateTeacherRequestAction,
  UpdateTeacherSuccessAction,
  GetCurrentTeacherRequestAction,
  GetCurrentTeacherSuccessAction,
  GetCurrentTeacherFailureAction
} from './teachers.actions';

// Actions
export type GetTeachersListActionsUnion =
  | GetTeachersListRequestAction
  | GetTeachersListSuccessAction
  | GetTeachersListFailureAction;

export type GetTeacherBySlugActionsUnion =
  | GetTeacherBySlugRequestAction
  | GetTeacherBySlugSuccessAction
  | GetTeacherBySlugFailureAction;

export type GetCurrentTeacherActionsUnion =
  | GetCurrentTeacherRequestAction
  | GetCurrentTeacherSuccessAction
  | GetCurrentTeacherFailureAction;

export type UpdateTeacherActionsUnion =
  | UpdateTeacherRequestAction
  | UpdateTeacherSuccessAction
  | UpdateTeacherFailureAction;

export type TTeachersActionsUnion =
  | GetTeachersListActionsUnion
  | GetTeacherBySlugActionsUnion
  | UpdateTeacherActionsUnion;

// Reducers
export type TTeachersStatusReducer = null | string;
export type TTeachersEntitiesReducer = {};
export type TTeachersIdsReducer = number[];
export type TTeachersErrorsReducer = any;
export type TTeachersObjectReducer = any;

export interface ITeachersReducerState {
  status: TTeachersStatusReducer;
  entities: TTeachersEntitiesReducer;
  // ids: TTeachersIdsReducer;
  errors: TTeachersErrorsReducer;
  teacherState: TTeachersObjectReducer;
}