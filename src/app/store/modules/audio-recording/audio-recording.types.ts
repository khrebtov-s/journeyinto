import {
  //start a new recording
  StartRecordingRequestAction,
  StartRecordingFailureAction,
  //IF ONLINE, we need to upload the current recording to the server
  UploadRecordingRequestAction,
  UploadRecordingSuccessAction,
  UploadRecordingFailureAction,
  //Now we need actions to actually upload our blobs
  UploadRecordingBlobRequestAction,
  UploadRecordingBlobSuccessAction,
  UploadRecordingBlobFailureAction,
  //Finish recording if online
  FinishRecordingRequestAction,
  FinishRecordingSuccessAction,
  FinishRecordingFailureAction,
} from './audio-recording.actions';

//start a new recording
export type StartRecordingActionsUnion =
  | StartRecordingRequestAction
  | StartRecordingFailureAction;

//IF ONLINE, we need to upload the current recording to the server
export type UploadRecordingActionsUnion =
  | UploadRecordingRequestAction
  | UploadRecordingSuccessAction
  | UploadRecordingFailureAction;
//Now we need actions to actually upload our blobs
export type UploadRecordingBlobActionsUnion =
  | UploadRecordingBlobRequestAction
  | UploadRecordingBlobSuccessAction
  | UploadRecordingBlobFailureAction;
//Finish recording if online
export type FinishRecordingActionsUnion =
  | FinishRecordingRequestAction
  | FinishRecordingSuccessAction
  | FinishRecordingFailureAction;

export type TAudioRecordingActionsUnion =
  | StartRecordingActionsUnion
  | UploadRecordingActionsUnion
  | UploadRecordingBlobActionsUnion
  | FinishRecordingActionsUnion;

// Reducers
export type TAudioRecordingStatusReducer = null | string;
export type TAudioRecordingReducer = {};
export type TAudioRecordingIdsReducer = number[];
export type TAudioRecordingErrorsReducer = any;
// can only have one id per current recording
export type TAudioRecordingUniqueIdReducer = null | string;
export type TAudioRecordingBlobsReducer = {};

export interface IAudioRecordingReducerState {
  status: TAudioRecordingStatusReducer;
  errors: TAudioRecordingErrorsReducer;
  uploaded: TAudioRecordingReducer;
  uniqueId: TAudioRecordingUniqueIdReducer;
  blobs: TAudioRecordingBlobsReducer;
}
