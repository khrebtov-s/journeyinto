import { Action } from '@ngrx/store';

export enum AudioRecordingsActionTypes {


  /***************************************/
  /**** START Actually make a recording ****/
  /***************************************/

  //START means we create a unique id container
  START_RECORDING_REQUEST = '[start recording] request',
  START_RECORDING_FAILURE = '[start recording] failure',

  //IF ONLINE, we need to upload the current recording to the server, which means set the unique id and get back the server id
  UPLOAD_RECORDING_REQUEST = '[upload recording] request',
  UPLOAD_RECORDING_SUCCESS = '[upload recording] success',
  UPLOAD_RECORDING_FAILURE = '[upload recording] failure',

  //Now we need actions to actually upload our blobs
  UPLOAD_RECORDING_BLOB_REQUEST = '[upload recording blob] request',
  UPLOAD_RECORDING_BLOB_SUCCESS = '[upload recording blob] success',
  UPLOAD_RECORDING_BLOB_FAILURE = '[upload recording blob] failure',
  
  //Finish recording if online
  FINISH_RECORDING_REQUEST = '[finish recording] request',
  FINISH_RECORDING_SUCCESS = '[finish recording] success',
  FINISH_RECORDING_FAILURE = '[finish recording] failure',

  /***************************************/
  /**** END Actually make a recording ****/
  /***************************************/


}

//START means we create a unique id container
export class StartRecordingRequestAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.START_RECORDING_REQUEST;
  
  constructor(public payload: any) {
    // console.log('StartRecordingRequestAction',payload)
  }
}

export class StartRecordingFailureAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.START_RECORDING_FAILURE;

  constructor(public payload: any) {}
}

//IF ONLINE, we need to upload the current recording to the server
export class UploadRecordingRequestAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.UPLOAD_RECORDING_REQUEST;

  constructor(public payload: any = null) {
    // console.log('in UploadRecordingRequestAction')
  }
}

export class UploadRecordingSuccessAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.UPLOAD_RECORDING_SUCCESS;

  constructor(public payload: any) {}
}

export class UploadRecordingFailureAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.UPLOAD_RECORDING_FAILURE;

  constructor(public payload: any) {}
}

//Now we need actions to actually upload our blobs
export class UploadRecordingBlobRequestAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.UPLOAD_RECORDING_BLOB_REQUEST;
  constructor(public payload: any = null) {
    // console.log('HEEREEE          UploadRecordingBlobRequestAction');

  }
}

export class UploadRecordingBlobSuccessAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.UPLOAD_RECORDING_BLOB_SUCCESS;

  constructor(public payload: any) {}
}

export class UploadRecordingBlobFailureAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.UPLOAD_RECORDING_BLOB_FAILURE;

  constructor(public payload: any) {}
}

//Finish recording if online
export class FinishRecordingRequestAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.FINISH_RECORDING_REQUEST;

  constructor(public payload: any = null) {}
}

export class FinishRecordingSuccessAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.FINISH_RECORDING_SUCCESS;

  constructor(public payload: any) {}
}

export class FinishRecordingFailureAction implements Action {
  readonly type: string = AudioRecordingsActionTypes.FINISH_RECORDING_FAILURE;

  constructor(public payload: any) {}
}
