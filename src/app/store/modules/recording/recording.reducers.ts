import { ActionReducer, combineReducers, reduceState } from "@ngrx/store";
import {
  IRecordingReducerState,
  TRecordingStatusReducer,
  TRecordingEntitiesReducer,
  TRecordingIdsReducer,
  TRecordingErrorsReducer,
  TRecordingActionsUnion,
  TRecordingsReducer,
} from "./recording.types";
import { RecordingsActionTypes } from "./recording.actions";
import { RequestStatus } from "@src/app/services/api.service.interface";
import { AudioRecordingsActionTypes } from "../audio-recording/audio-recording.actions";
import { AuthenticationActionTypes } from "../authentication/authentication.actions";
import { UserActionTypes } from "../user/user.actions";

const initialState_recordings: TRecordingsReducer = {
  recordings: null,
  currentRecording: null,
  changeRecordingData: false
};
const recordings = (
  state = initialState_recordings,
  { type, payload }: TRecordingActionsUnion
): TRecordingsReducer => {
  let recordings, stateObj;

  switch (type) {
    case RecordingsActionTypes.GET_RECORDINGS_LIST_SUCCESS:

    case RecordingsActionTypes.DELETE_RECORDING_SUCCESS:
      return {
        ...state,
        recordings: payload,
        currentRecording: null,
      };

    case RecordingsActionTypes.CHANGE_RECORDING_STATUS_SUCCESS:
      return {
        ...state,
        changeClassStatus: true,
      };

    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_SUCCESS:
      return {
        ...state,
        changeRecordingData: !state.changeRecordingData,
      };

    case RecordingsActionTypes.GET_RECORDINGS_LIST_FAILURE:
      return {
        ...state,
        recordings: null,
      };

    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_SUCCESS:
      return {
        ...state,
        currentRecording: payload,
      };

    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_REQUEST:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_FAILURE:
      return {
        ...state,
        currentRecording: null,
      };

    case RecordingsActionTypes.UPDATE_RECORDING_SUCCESS:
      // console.log('UPDATE_RECORDING_SUCCESS ', { payload, state });
      recordings = null;
      if (state.recordings != null) {
        if (state.recordings.find((recording) => recording.id === payload.id)) {
          recordings = state.recordings.map((recording) => {
            if (recording.id === payload.id) {
              return payload;
            }
            return recording;
          });
        } else {
          recordings = [payload, ...state.recordings];
        }
      }

      return {
        ...state,
        recordings,
        currentRecording: null,
      };

    case AudioRecordingsActionTypes.FINISH_RECORDING_SUCCESS:
      // console.log('FINISH_RECORDING_SUCCESS ', { payload, state });
      if (typeof payload !== "string" && payload.recording) {
        stateObj = { ...state };
        if (stateObj.recordings) {
          if (
            stateObj.recordings.find((rec) => rec.id === payload.recording.id)
          ) {
            stateObj = {
              ...stateObj,
              recordings: stateObj.recordings.map((rec) => {
                if (rec.id === payload.recording.id) {
                  return payload.recording;
                }
                return rec;
              }),
            };
          } else {
            stateObj = {
              ...stateObj,
              recordings: [payload.recording, ...stateObj.recordings],
            };
          }
        }

        if (stateObj.currentRecording) {
          stateObj = {
            ...stateObj,
            currentRecording: payload.recording,
          };
        }

        // console.log({stateObj});

        return stateObj;
      }

      return state;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
    case UserActionTypes.SWITCH_USER_VIEW_STATUS_SUCCESS:
      return initialState_recordings;

    default:
      return state;
  }
};

const initialState_status: TRecordingStatusReducer = null;
const status = (
  state = initialState_status,
  { type }: TRecordingActionsUnion
): TRecordingStatusReducer => {
  switch (type) {
    case RecordingsActionTypes.GET_RECORDINGS_LIST_REQUEST:
      return {
        ...state,
        changeClassStatus: true,
      };
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_REQUEST:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_REQUEST:
    case RecordingsActionTypes.UPDATE_RECORDING_REQUEST:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_REQUEST:
    case RecordingsActionTypes.DELETE_RECORDING_REQUEST:
    case RecordingsActionTypes.CHANGE_RECORDING_STATUS_REQUEST:
      return RequestStatus.pending;

    case RecordingsActionTypes.GET_RECORDINGS_LIST_SUCCESS:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_SUCCESS:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_SUCCESS:
    // don't want that to mess up our status - TODO create separate status for this!
    // case RecordingsActionTypes.UPDATE_RECORDING_SUCCESS:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_SUCCESS:
    case RecordingsActionTypes.DELETE_RECORDING_SUCCESS:
    case RecordingsActionTypes.CHANGE_RECORDING_STATUS_SUCCESS:
      return RequestStatus.success;

    case RecordingsActionTypes.GET_RECORDINGS_LIST_FAILURE:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_FAILURE:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_FAILURE:
    case RecordingsActionTypes.UPDATE_RECORDING_FAILURE:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_FAILURE:
      return RequestStatus.failure;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
    case UserActionTypes.SWITCH_USER_VIEW_STATUS_SUCCESS:
      return initialState_status;

    default:
      return state;
  }
};

const initialState_entities: TRecordingEntitiesReducer = null;
const entities = (
  state = initialState_entities,
  { type, payload }: TRecordingActionsUnion
): TRecordingEntitiesReducer => {
  // console.log('entities TYPE?',type, payload, state)
  switch (type) {
    case RecordingsActionTypes.GET_RECORDINGS_LIST_REQUEST:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_REQUEST:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_REQUEST:
    case RecordingsActionTypes.UPDATE_RECORDING_REQUEST:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_REQUEST:
    case RecordingsActionTypes.DELETE_RECORDING_REQUEST:
    case RecordingsActionTypes.CHANGE_RECORDING_STATUS_REQUEST:
      return initialState_entities;

    case RecordingsActionTypes.GET_RECORDINGS_LIST_SUCCESS:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_SUCCESS:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_SUCCESS:
    case RecordingsActionTypes.UPDATE_RECORDING_SUCCESS:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_SUCCESS:
      return payload;

    case RecordingsActionTypes.DELETE_RECORDING_SUCCESS:
    case RecordingsActionTypes.CHANGE_RECORDING_STATUS_SUCCESS:
      // console.log('upload or delete recording sucsces', { payload });
      // this is our url to the actual audio file, do nothing for now
      return null;

    case RecordingsActionTypes.GET_RECORDINGS_LIST_FAILURE:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_FAILURE:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_FAILURE:
    case RecordingsActionTypes.UPDATE_RECORDING_FAILURE:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_FAILURE:
    case RecordingsActionTypes.DELETE_RECORDING_FAILURE:
    case RecordingsActionTypes.CHANGE_RECORDING_STATUS_FAILURE:
      return initialState_entities;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
    case UserActionTypes.SWITCH_USER_VIEW_STATUS_SUCCESS:
      return initialState_entities;

    default:
      return state;
  }
};

const initialState_ids: TRecordingIdsReducer = [];
const ids = (
  state = initialState_ids,
  { type, payload }: TRecordingActionsUnion
): TRecordingIdsReducer => {
  switch (type) {
    case RecordingsActionTypes.GET_RECORDINGS_LIST_REQUEST:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_REQUEST:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_REQUEST:
    case RecordingsActionTypes.UPDATE_RECORDING_REQUEST:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_REQUEST:
      return initialState_ids;

    case RecordingsActionTypes.GET_RECORDINGS_LIST_SUCCESS:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_SUCCESS:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_SUCCESS:
    case RecordingsActionTypes.UPDATE_RECORDING_SUCCESS:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_SUCCESS:
      return payload.result;

    case RecordingsActionTypes.GET_RECORDINGS_LIST_FAILURE:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_FAILURE:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_FAILURE:
    case RecordingsActionTypes.UPDATE_RECORDING_FAILURE:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_FAILURE:
      return initialState_ids;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
    case UserActionTypes.SWITCH_USER_VIEW_STATUS_SUCCESS:
      return initialState_ids;

    default:
      return state;
  }
};

const initialState_errors: TRecordingErrorsReducer = null;
const errors = (
  state = initialState_errors,
  { type, payload }: TRecordingActionsUnion
): TRecordingErrorsReducer => {
  // console.log('REDEUCER errors ',type, payload, state)
  switch (type) {
    case RecordingsActionTypes.GET_RECORDINGS_LIST_REQUEST:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_REQUEST:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_REQUEST:
    case RecordingsActionTypes.UPDATE_RECORDING_REQUEST:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_REQUEST:
      return initialState_errors;

    case RecordingsActionTypes.GET_RECORDINGS_LIST_SUCCESS:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_SUCCESS:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_SUCCESS:
    case RecordingsActionTypes.UPDATE_RECORDING_SUCCESS:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_SUCCESS:
      return initialState_errors;

    case RecordingsActionTypes.GET_RECORDINGS_LIST_FAILURE:
    case RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_FAILURE:
    case RecordingsActionTypes.GET_RECORDING_BY_SLUG_FAILURE:
    case RecordingsActionTypes.UPDATE_RECORDING_FAILURE:
    case RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_FAILURE:
    case RecordingsActionTypes.DELETE_RECORDING_FAILURE:
    case RecordingsActionTypes.CHANGE_RECORDING_STATUS_FAILURE:
      return payload.message;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
    case UserActionTypes.SWITCH_USER_VIEW_STATUS_SUCCESS:
      return initialState_errors;

    default:
      return state;
  }
};

// structure of the recording
export const recordingReducers: ActionReducer<
  IRecordingReducerState
> = combineReducers({
  status,
  entities,
  ids,
  errors,
  recordings,
});
