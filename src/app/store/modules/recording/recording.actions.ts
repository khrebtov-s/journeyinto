import { Action } from "@ngrx/store";

export enum RecordingsActionTypes {
  //recording list and requests (getters for playback or editing)
  GET_RECORDINGS_LIST_REQUEST = "[get recordings list] request",
  GET_RECORDINGS_LIST_SUCCESS = "[get recordings list] success",
  GET_RECORDINGS_LIST_FAILURE = "[get recordings list] failure",

  GET_RECORDINGS_FOR_CURRENT_USER_REQUEST = "[get recordings for current user] request",
  GET_RECORDINGS_FOR_CURRENT_USER_SUCCESS = "[get recordings for current user] success",
  GET_RECORDINGS_FOR_CURRENT_USER_FAILURE = "[get recordings for current user] failure",

  GET_RECORDING_BY_SLUG_REQUEST = "[get recording by slug] request",
  GET_RECORDING_BY_SLUG_SUCCESS = "[get recording by slug] success",
  GET_RECORDING_BY_SLUG_FAILURE = "[get recording by slug] failure",

  //Manage a completly uploaded recording (with status uploaded)
  UPDATE_RECORDING_REQUEST = "[update recording] request",
  UPDATE_RECORDING_SUCCESS = "[update recording] success",
  UPDATE_RECORDING_FAILURE = "[update recording] failure",

  UPDATE_RECORDING_WITH_POSES_REQUEST = "[update recording poses] request",
  UPDATE_RECORDING_WITH_POSES_SUCCESS = "[update recording poses] success",
  UPDATE_RECORDING_WITH_POSES_FAILURE = "[update recording poses] failure",

  CHANGE_RECORDING_STATUS_REQUEST = "[change recording status] request",
  CHANGE_RECORDING_STATUS_SUCCESS = "[change recording status] success",
  CHANGE_RECORDING_STATUS_FAILURE = "[change recording status] failure",

  DELETE_RECORDING_REQUEST = "[delete recording] request",
  DELETE_RECORDING_SUCCESS = "[delete recording] success",
  DELETE_RECORDING_FAILURE = "[delete recording] failure",
}

// Get recordings list
export class GetRecordingsListRequestAction implements Action {
  readonly type: string = RecordingsActionTypes.GET_RECORDINGS_LIST_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetRecordingsListSuccessAction implements Action {
  readonly type: string = RecordingsActionTypes.GET_RECORDINGS_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class GetRecordingsListFailureAction implements Action {
  readonly type: string = RecordingsActionTypes.GET_RECORDINGS_LIST_FAILURE;

  constructor(public payload: any) {}
}

// Get recordings for current user list - NOT USED!!!
export class GetRecordingsForCurrentUserRequestAction implements Action {
  readonly type: string =
    RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetRecordingsForCurrentUserSuccessAction implements Action {
  readonly type: string =
    RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_SUCCESS;

  constructor(public payload: any) {}
}

export class GetRecordingsForCurrentUserFailureAction implements Action {
  readonly type: string =
    RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_FAILURE;

  constructor(public payload: any) {}
}

// Get recording by slug
export class GetRecordingBySlugRequestAction implements Action {
  readonly type: string = RecordingsActionTypes.GET_RECORDING_BY_SLUG_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetRecordingBySlugSuccessAction implements Action {
  readonly type: string = RecordingsActionTypes.GET_RECORDING_BY_SLUG_SUCCESS;

  constructor(public payload: any) {}
}

export class GetRecordingBySlugFailureAction implements Action {
  readonly type: string = RecordingsActionTypes.GET_RECORDING_BY_SLUG_FAILURE;

  constructor(public payload: any) {}
}

// Update recording
export class UpdateRecordingRequestAction implements Action {
  readonly type: string = RecordingsActionTypes.UPDATE_RECORDING_REQUEST;

  constructor(public payload: any = null) {}
}

export class UpdateRecordingSuccessAction implements Action {
  readonly type: string = RecordingsActionTypes.UPDATE_RECORDING_SUCCESS;

  constructor(public payload: any) {}
}

export class UpdateRecordingFailureAction implements Action {
  readonly type: string = RecordingsActionTypes.UPDATE_RECORDING_FAILURE;

  constructor(public payload: any) {}
}

// Update recording with poses
export class UpdateRecordingPosesRequestAction implements Action {
  readonly type: string =
    RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_REQUEST;

  constructor(public payload: any = null) {}
}

export class UpdateRecordingPosesSuccessAction implements Action {
  readonly type: string =
    RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_SUCCESS;

  constructor(public payload: any) {}
}

export class UpdateRecordingPosesFailureAction implements Action {
  readonly type: string =
    RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_FAILURE;

  constructor(public payload: any) {}
}

// Delete recording
export class DeleteRecordingRequestAction implements Action {
  readonly type: string = RecordingsActionTypes.DELETE_RECORDING_REQUEST;

  constructor(public payload: any = null) {}
}

export class DeleteRecordingSuccessAction implements Action {
  readonly type: string = RecordingsActionTypes.DELETE_RECORDING_SUCCESS;

  constructor(public payload: any) {}
}

export class DeleteRecordingFailureAction implements Action {
  readonly type: string = RecordingsActionTypes.DELETE_RECORDING_FAILURE;

  constructor(public payload: any) {}
}

//Change recording status
export class ChangeRecordingStatusRequestAction implements Action {
  readonly type: string = RecordingsActionTypes.CHANGE_RECORDING_STATUS_REQUEST;

  constructor(public payload: any = null) {}
}

export class ChangeRecordingStatusSuccessAction implements Action {
  readonly type: string = RecordingsActionTypes.CHANGE_RECORDING_STATUS_SUCCESS;

  constructor(public payload: any) {}
}

export class ChangeRecordingStatusFailureAction implements Action {
  readonly type: string = RecordingsActionTypes.CHANGE_RECORDING_STATUS_FAILURE;

  constructor(public payload: any) {}
}
