import { Action } from '@ngrx/store';

export enum PosesActionTypes {
  GET_POSES_LIST_REQUEST = '[get poses list] request',
  GET_POSES_LIST_SUCCESS = '[get poses list] success',
  GET_POSES_LIST_FAILURE = '[get poses list] failure',

  GET_POSES_BY_SLUG_REQUEST = '[get poses by slug] request',
  GET_POSES_BY_SLUG_SUCCESS = '[get poses by slug] success',
  GET_POSES_BY_SLUG_FAILURE = '[get poses by slug] failure',

  UPDATE_POSES_BY_ID_REQUEST = '[update poses by id] request',
  UPDATE_POSES_BY_ID_SUCCESS = '[update poses by id] success',
  UPDATE_POSES_BY_ID_FAILURE = '[update poses by id] failure',

  POSES_SET_ACTIVE = '[poses set active] set active'
}

// Get poses list
export class GetPosesListRequestAction implements Action {
  readonly type: string = PosesActionTypes.GET_POSES_LIST_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetPosesListSuccessAction implements Action {
  readonly type: string = PosesActionTypes.GET_POSES_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class GetPosesListFailureAction implements Action {
  readonly type: string = PosesActionTypes.GET_POSES_LIST_FAILURE;

  constructor(public payload: any) {}
}

// Get poses by id
export class GetPosesBySlugRequestAction implements Action {
  readonly type: string = PosesActionTypes.GET_POSES_BY_SLUG_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetPosesBySlugSuccessAction implements Action {
  readonly type: string = PosesActionTypes.GET_POSES_BY_SLUG_SUCCESS;

  constructor(public payload: any) {}
}

export class GetPosesBySlugFailureAction implements Action {
  readonly type: string = PosesActionTypes.GET_POSES_BY_SLUG_FAILURE;

  constructor(public payload: any) {}
}

// Set Poses active
export class PosesSetActiveAction implements Action {
  readonly type = PosesActionTypes.POSES_SET_ACTIVE;

  constructor(public payload: any) {}
}

// Update Poses
export class UpdatePosesByIdRequestAction implements Action {
  readonly type: string = PosesActionTypes.UPDATE_POSES_BY_ID_REQUEST;

  constructor(public payload: any = null) {}
}

export class UpdatePosesByIdSuccessAction implements Action {
  readonly type: string = PosesActionTypes.UPDATE_POSES_BY_ID_SUCCESS;

  constructor(public payload: any) {}
}

export class UpdatePosesByIdFailureAction implements Action {
  readonly type: string = PosesActionTypes.UPDATE_POSES_BY_ID_FAILURE;

  constructor(public payload: any) {}
}
