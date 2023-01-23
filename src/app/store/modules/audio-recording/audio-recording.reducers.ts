import { ActionReducer, combineReducers } from '@ngrx/store';
import {
  IAudioRecordingReducerState,
  TAudioRecordingStatusReducer,
  TAudioRecordingErrorsReducer,
  TAudioRecordingActionsUnion,
  TAudioRecordingUniqueIdReducer,
  TAudioRecordingBlobsReducer,
  TAudioRecordingReducer
} from './audio-recording.types';
import { AudioRecordingsActionTypes } from './audio-recording.actions';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { statusBarStyleProperty } from 'tns-core-modules/ui/page/page';

const initialState_status: TAudioRecordingStatusReducer = null;
const status = (state = initialState_status, { type }: TAudioRecordingActionsUnion): TAudioRecordingStatusReducer => {
  switch (type) {
    case AudioRecordingsActionTypes.START_RECORDING_REQUEST:
    case AudioRecordingsActionTypes.UPLOAD_RECORDING_REQUEST:
    case AudioRecordingsActionTypes.FINISH_RECORDING_REQUEST:
      return RequestStatus.pending;

    case AudioRecordingsActionTypes.UPLOAD_RECORDING_SUCCESS:
    case AudioRecordingsActionTypes.FINISH_RECORDING_SUCCESS:
      return RequestStatus.success;

    case AudioRecordingsActionTypes.START_RECORDING_FAILURE:
    case AudioRecordingsActionTypes.UPLOAD_RECORDING_FAILURE:
    case AudioRecordingsActionTypes.FINISH_RECORDING_FAILURE:
      return RequestStatus.failure;

    default:
      return state;
  }
};

const initialState_uploaded: TAudioRecordingReducer = null;
const uploaded = (state = initialState_uploaded, { type, payload }: TAudioRecordingActionsUnion): TAudioRecordingReducer => {
  // console.log('UNIQUE ID reducer TYPE?',type, payload, state)
  
  switch (type) {
      
    case AudioRecordingsActionTypes.UPLOAD_RECORDING_SUCCESS:
      // console.log({payload});
      
      return payload;

    default:
      return state;
  }
};

const initialState_uniqueId: TAudioRecordingUniqueIdReducer = null;
const uniqueId = (state = initialState_uniqueId, { type, payload }: TAudioRecordingActionsUnion): TAudioRecordingUniqueIdReducer => {
  // console.log('UNIQUE ID reducer TYPE?',type, payload, state)
  
  switch (type) {
      
    case AudioRecordingsActionTypes.START_RECORDING_REQUEST:
      return payload;

    default:
      return state;
  }
};

const initialState_blobs: TAudioRecordingBlobsReducer = {};
const blobs = (state = initialState_blobs, { type, payload }: TAudioRecordingActionsUnion): TAudioRecordingBlobsReducer => {
  // TODO return current blob status
  const blobs = { ...state };
  switch (type) {

    case AudioRecordingsActionTypes.UPLOAD_RECORDING_BLOB_REQUEST:
      // console.log('BLOB reducer TYPE? 1',type, payload, state)
      blobs[payload.id] = payload;
      // console.log('BLOB reducer TYPE? 2',type, payload, state)
      return blobs;

    case AudioRecordingsActionTypes.UPLOAD_RECORDING_BLOB_SUCCESS:
      // console.log({blobs, payload});
      delete blobs[payload.id];
      return blobs;

    case AudioRecordingsActionTypes.UPLOAD_RECORDING_BLOB_FAILURE:
      return state;
      
    default:
      return state;
  }
};

const initialState_errors: TAudioRecordingErrorsReducer = null;
const errors = (state = initialState_errors, { type, payload }: TAudioRecordingActionsUnion): TAudioRecordingErrorsReducer => {
  // console.log('REDEUCER errors ',type, payload, state)
  switch (type) {
    case AudioRecordingsActionTypes.FINISH_RECORDING_FAILURE:
      return payload;
    default:
      return state;
  }
};

// structure of the recording
export const audioRecordingReducers: ActionReducer<IAudioRecordingReducerState> = combineReducers({
  status,
  uploaded,
  errors,
  uniqueId,
  blobs
});
