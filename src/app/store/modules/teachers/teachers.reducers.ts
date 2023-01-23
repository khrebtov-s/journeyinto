import { ActionReducer, combineReducers } from "@ngrx/store";
import { RequestStatus } from "@src/app/services/api.service.interface";
import { UserActionTypes } from "../user/user.actions";
import {
  TeachersActionTypes,
  TeachersSetActiveAction,
} from "./teachers.actions";
import {
  ITeachersReducerState,
  TTeachersActionsUnion,
  TTeachersEntitiesReducer,
  TTeachersErrorsReducer,
  TTeachersIdsReducer,
  TTeachersStatusReducer,
} from "./teachers.types";
import { AuthenticationActionTypes } from "@src/app/store/modules/authentication/authentication.actions";

const initialState_status: TTeachersStatusReducer = null;
const status = (
  state = initialState_status,
  { type }: TTeachersActionsUnion
): TTeachersStatusReducer => {
  switch (type) {
    case TeachersActionTypes.GET_TEACHERS_LIST_REQUEST:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_REQUEST:
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_REQUEST:
    case TeachersActionTypes.ADD_TEACHER_CLASS_REQUEST:
    case TeachersActionTypes.ADD_TEACHER_CLASS_PROGRESS_REQUEST:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_REQUEST:
    case TeachersActionTypes.GET_CURRENT_TEACHER_REQUEST:
    case TeachersActionTypes.ADD_VIDEO_TO_CLASS_REQUEST:
      return RequestStatus.pending;

    case TeachersActionTypes.GET_TEACHERS_LIST_SUCCESS:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_SUCCESS:
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_SUCCESS:
    case TeachersActionTypes.ADD_TEACHER_CLASS_SUCCESS:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_SUCCESS:
    case TeachersActionTypes.ADD_TEACHER_CLASS_END_GETTING:
    case TeachersActionTypes.GET_CURRENT_TEACHER_SUCCESS:
      return RequestStatus.success;

    case TeachersActionTypes.GET_TEACHERS_LIST_FAILURE:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_FAILURE:
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_FAILURE:
    case TeachersActionTypes.ADD_TEACHER_CLASS_FAILURE:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_FAILURE:
    case TeachersActionTypes.GET_CURRENT_TEACHER_FAILURE:
      return RequestStatus.failure;

    default:
      return state;
  }
};

const initialState_teacherState = {
  loggedinTeacher: null, // the loggedin teacher
  currentTeacher: null,
  teachers: null, // the list of teachers
};
const teacherState = (
  state = initialState_teacherState,
  { type, payload }: TTeachersActionsUnion
): any => {
  switch (type) {
    /* LOGGED IN TEACHER ACTIONS */
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_SUCCESS:
      return {
        ...state,
        loggedinTeacher: payload.response,
        currentTeacher: payload.response,
      };

    /* GET TEACHER BY SLUG, in general it is public */
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_SUCCESS:
      return {
        ...state,
        loggedinTeacher: payload.isLoggedin
          ? payload.response
          : state.loggedinTeacher,
        currentTeacher: payload.response,
      };

    case TeachersActionTypes.GET_TEACHER_BY_SLUG_REQUEST:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_FAILURE:
      return {
        ...state,
        currentTeacher: null,
      };

    /* GET ALL THE TEACHERS */
    case TeachersActionTypes.GET_TEACHERS_LIST_FAILURE:
      return {
        ...state,
        teachers: false,
      };

    case TeachersActionTypes.GET_TEACHERS_LIST_SUCCESS:
      return {
        ...state,
        teachers: Object.values(payload.entities.teachers),
      };

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_teacherState;

    case TeachersActionTypes.ADD_TEACHER_CLASS_SUCCESS:
      return {
        ...state,
        addedNewClass: true,
      };

    case TeachersActionTypes.ADD_TEACHER_CLASS_END_GETTING:
      return {
        ...state,
        addedNewClass: false,
      };

    case TeachersActionTypes.ADD_TEACHER_CLASS_PROGRESS_REQUEST:
      return {
        ...state,
        progress: payload,
      };

    case TeachersActionTypes.ADD_TEACHER_CLASS_FAILURE:
      return {
        ...state,
        uploadError: true,
        textErrorMessage: payload.message
      };

    default:
      return state;
  }
};

const initialState_entities: TTeachersEntitiesReducer = {};
const entities = (
  state = initialState_entities,
  { type, payload }: TTeachersActionsUnion
): TTeachersEntitiesReducer => {
  switch (type) {
    case TeachersActionTypes.GET_TEACHERS_LIST_SUCCESS:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_SUCCESS:
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_SUCCESS:
      return payload.response;

    case TeachersActionTypes.GET_TEACHERS_LIST_REQUEST:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_REQUEST:
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_REQUEST:
    case TeachersActionTypes.ADD_TEACHER_CLASS_REQUEST:
    case TeachersActionTypes.ADD_TEACHER_CLASS_PROGRESS_REQUEST:
    case TeachersActionTypes.ADD_VIDEO_TO_CLASS_REQUEST:
    case TeachersActionTypes.GET_TEACHERS_LIST_FAILURE:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_FAILURE:
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_FAILURE:
    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_entities;

    default:
      return state;
  }
};

const initialState_errors: TTeachersErrorsReducer = null;
const errors = (
  state = initialState_errors,
  { type, payload }: TTeachersActionsUnion
): TTeachersErrorsReducer => {
  switch (type) {
    case TeachersActionTypes.GET_TEACHERS_LIST_REQUEST:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_REQUEST:
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_REQUEST:
    case TeachersActionTypes.ADD_TEACHER_CLASS_FAILURE:
    case TeachersActionTypes.GET_TEACHERS_LIST_SUCCESS:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_SUCCESS:
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_SUCCESS:
      return initialState_errors;

    case TeachersActionTypes.GET_TEACHERS_LIST_FAILURE:
    case TeachersActionTypes.GET_TEACHER_BY_SLUG_FAILURE:
    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_FAILURE:
      return payload.message;

    default:
      return state;
  }
};

const activeId = (state = null, action: TTeachersActionsUnion) => {
  switch (action.type) {
    case TeachersActionTypes.TEACHERS_SET_ACTIVE:
      return action.payload;
    default:
      return state;
  }
};

export const teachersReducers: ActionReducer<
  ITeachersReducerState
> = combineReducers({
  status,
  entities,
  // ids,
  activeId,
  errors,
  teacherState,
});
