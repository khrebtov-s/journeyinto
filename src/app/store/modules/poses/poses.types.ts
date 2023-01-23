import {
  GetPosesListRequestAction,
  GetPosesListSuccessAction,
  GetPosesListFailureAction,
  GetPosesBySlugFailureAction,
  GetPosesBySlugRequestAction,
  GetPosesBySlugSuccessAction,
  UpdatePosesByIdFailureAction,
  UpdatePosesByIdRequestAction,
  UpdatePosesByIdSuccessAction
} from './poses.actions';

// Actions
export type GetPosesListActionsUnion =
  | GetPosesListRequestAction
  | GetPosesListSuccessAction
  | GetPosesListFailureAction;

export type GetPosesByIdActionsUnion =
  | GetPosesBySlugRequestAction
  | GetPosesBySlugSuccessAction
  | GetPosesBySlugFailureAction;

export type UpdatePosesByIdActionsUnion =
  | UpdatePosesByIdRequestAction
  | UpdatePosesByIdSuccessAction
  | UpdatePosesByIdFailureAction;

export type TPosesActionsUnion =
  | GetPosesListActionsUnion
  | GetPosesByIdActionsUnion
  | UpdatePosesByIdActionsUnion;

// Reducers
export type TPosesStatusReducer = null | string;
export type TPosesEntitiesReducer = {};
export type TPosesIdsReducer = number[];
export type TPosesErrorsReducer = any;
export type TPosesActiveIdReducer = any;

export interface IPosesReducerState {
  status: TPosesStatusReducer;
  entities: TPosesEntitiesReducer;
  ids: TPosesIdsReducer;
  activeId: TPosesActiveIdReducer;
  errors: TPosesErrorsReducer;
}
