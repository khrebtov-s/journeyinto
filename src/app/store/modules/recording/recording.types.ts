import {
  GetRecordingsListRequestAction,
  GetRecordingsListSuccessAction,
  GetRecordingsListFailureAction,
  GetRecordingBySlugRequestAction,
  GetRecordingBySlugSuccessAction,
  GetRecordingBySlugFailureAction,
  GetRecordingsForCurrentUserRequestAction,
  GetRecordingsForCurrentUserSuccessAction,
  GetRecordingsForCurrentUserFailureAction,
  //update and delete recording
  UpdateRecordingRequestAction,
  UpdateRecordingSuccessAction,
  UpdateRecordingFailureAction,
  UpdateRecordingPosesRequestAction,
  UpdateRecordingPosesSuccessAction,
  UpdateRecordingPosesFailureAction,
} from './recording.actions';

// Actions
export type GetRecordingsListActionsUnion =
  | GetRecordingsListRequestAction
  | GetRecordingsListSuccessAction
  | GetRecordingsListFailureAction;

export type GetRecordingsForCurrentUserActionsUnion =
  | GetRecordingsForCurrentUserRequestAction
  | GetRecordingsForCurrentUserSuccessAction
  | GetRecordingsForCurrentUserFailureAction;

export type GetRecordingBySlugActionsUnion =
  | GetRecordingBySlugRequestAction
  | GetRecordingBySlugSuccessAction
  | GetRecordingBySlugFailureAction;

export type UpdateRecordingActionsUnion =
  | UpdateRecordingRequestAction
  | UpdateRecordingSuccessAction
  | UpdateRecordingFailureAction;

export type UpdateRecordingPosesActionsUnion =
  | UpdateRecordingPosesRequestAction
  | UpdateRecordingPosesSuccessAction
  | UpdateRecordingPosesFailureAction;




export type TRecordingActionsUnion =
  | GetRecordingsListActionsUnion
  | GetRecordingsForCurrentUserActionsUnion
  | GetRecordingBySlugActionsUnion

// Reducers
export type TRecordingStatusReducer = null | {};
export type TRecordingEntitiesReducer = {};
export type TRecordingIdsReducer = number[];
export type TRecordingErrorsReducer = any;
export type TRecordingsReducer = any;

export interface IRecordingReducerState {
  status: TRecordingStatusReducer;
  entities: TRecordingEntitiesReducer;
  ids: TRecordingIdsReducer;
  errors: TRecordingErrorsReducer;
  recordings: TRecordingsReducer;
}
