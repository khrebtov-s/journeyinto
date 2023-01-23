import { ActionReducer, combineReducers } from '@ngrx/store';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { StudentsActionTypes } from './students.actions';
import {
  IStudentsReducerState,
  TStudentsActionsUnion,
  TStudentsEntitiesReducer,
  TStudentsErrorsReducer,
  TStudentsIdsReducer,
  TStudentsStatusReducer,
  SubscriptionStatus
} from './students.types';
import { AuthenticationActionTypes } from '@src/app/store/modules/authentication/authentication.actions';
import { TeachersActionTypes } from '@src/app/store/modules/teachers/teachers.actions';
import { UserActionTypes } from '../user/user.actions';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';


const initialState_status: TStudentsStatusReducer = null;
const status = (state = initialState_status, { type }: TStudentsActionsUnion): TStudentsStatusReducer => {
  switch (type) {
    case StudentsActionTypes.GET_STUDENTS_LIST_REQUEST:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_REQUEST:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_REQUEST:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_REQUEST:
    case StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_REQUEST:
    case StudentsActionTypes.SEND_CONNECT_TO_TEACHER_REQUEST:
    case StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_REQUEST:
    case StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_REQUEST:
    case StudentsActionTypes.PURCHASE_TEACHER_CLASS_REQUEST:
      return RequestStatus.pending;

    case StudentsActionTypes.GET_STUDENTS_LIST_SUCCESS:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_SUCCESS:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_SUCCESS:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_SUCCESS:
    case StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_SUCCESS:
    case StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_SUCCESS:
    case StudentsActionTypes.SEND_CONNECT_TO_TEACHER_SUCCESS:
    case StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_SUCCESS:
    case StudentsActionTypes.PURCHASE_TEACHER_CLASS_SUCCESS:
      return RequestStatus.success;

    case StudentsActionTypes.GET_STUDENTS_LIST_FAILURE:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_FAILURE:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_FAILURE:
    case StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_FAILURE:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_FAILURE:
    case StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_FAILURE:
    case StudentsActionTypes.SEND_CONNECT_TO_TEACHER_FAILURE:
    case StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_FAILURE:
    case StudentsActionTypes.PURCHASE_TEACHER_CLASS_FAILURE:
      return RequestStatus.failure;

    default:
      return state;
  }
};

const initialState_entities: TStudentsEntitiesReducer = {};
const entities = (
  state = initialState_entities,
  { type, payload }: TStudentsActionsUnion
): TStudentsEntitiesReducer => {
  switch (type) {
    case StudentsActionTypes.GET_STUDENTS_LIST_REQUEST:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_REQUEST:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_REQUEST:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_REQUEST:
      return initialState_entities;

    case StudentsActionTypes.GET_STUDENTS_LIST_SUCCESS:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_SUCCESS:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_SUCCESS:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_SUCCESS:

    case StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_SUCCESS:
      console.log('STUDENTS REDUCERS ENTITIES', {payload});
      return payload;

    case StudentsActionTypes.GET_STUDENTS_LIST_FAILURE:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_FAILURE:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_FAILURE:
    case AuthenticationActionTypes.LOGOUT_SUCCESS:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_FAILURE:
      return initialState_entities;

    default:
      return state;
  }
};

const initialState_ids: TStudentsIdsReducer = [];
const ids = (state = initialState_ids, { type, payload }: TStudentsActionsUnion): TStudentsIdsReducer => {
  switch (type) {
    case StudentsActionTypes.GET_STUDENTS_LIST_REQUEST:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_REQUEST:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_REQUEST:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_REQUEST:
      return initialState_ids;

    case StudentsActionTypes.GET_STUDENTS_LIST_SUCCESS:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_SUCCESS:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_SUCCESS:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_SUCCESS:
      return payload.result;

    case StudentsActionTypes.GET_STUDENTS_LIST_FAILURE:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_FAILURE:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_FAILURE:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_FAILURE:
      return initialState_ids;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const initialState_errors: TStudentsErrorsReducer = null;
const errors = (state = initialState_errors, { type, payload }: TStudentsActionsUnion): TStudentsErrorsReducer => {
  switch (type) {
    case StudentsActionTypes.GET_STUDENTS_LIST_REQUEST:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_REQUEST:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_REQUEST:
    case StudentsActionTypes.SEND_CONNECT_TO_TEACHER_REQUEST:
    case StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_REQUEST:
    case StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_REQUEST:
    case StudentsActionTypes.PURCHASE_TEACHER_CLASS_REQUEST:
    case StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_REQUEST:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_REQUEST:
      return initialState_errors;

    case StudentsActionTypes.GET_STUDENTS_LIST_SUCCESS:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_SUCCESS:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_SUCCESS:
    case StudentsActionTypes.SEND_CONNECT_TO_TEACHER_SUCCESS:
    case StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_SUCCESS:
    case StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_SUCCESS:
    case StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_SUCCESS:
    case StudentsActionTypes.PURCHASE_TEACHER_CLASS_SUCCESS:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_SUCCESS:
      return initialState_errors;

    case StudentsActionTypes.GET_STUDENTS_LIST_FAILURE:
    case StudentsActionTypes.GET_STUDENTS_BY_ID_FAILURE:
    case StudentsActionTypes.UPDATE_STUDENTS_BY_ID_FAILURE:
    case StudentsActionTypes.SEND_CONNECT_TO_TEACHER_FAILURE:
    case StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_FAILURE:
    case StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_FAILURE:
    case StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_FAILURE:
    case StudentsActionTypes.PURCHASE_TEACHER_CLASS_FAILURE:
    case TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_FAILURE:
      return payload.message;

    default:
      return state;
  }
};

const subscriptionStatus = (state = null, {type, payload}: TStudentsActionsUnion) => {
  let user;

  switch (type) {
    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
      if (payload.entities && payload.entities.users && payload.result) {
        user = payload.entities.users[payload.result];

        if (
          user && user.view_status === ViewStatuses.STUDENT
          && user.creators && user.creators.length 
          && user.creators[0].creator.subscribed && user.creators[0].creator.subscribed.length > 0) {
          return user.creators[0].creator.subscribed[0].status;
        }
      }

      return null;

    case StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_SUCCESS:
      if (payload.id && payload.id.includes('sub_')) {
        return payload.status;
      }
      return state;

    case StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_SUCCESS:
      return null;

    default:
      return state;

  }
}

const activeId = (state = null, action: TStudentsActionsUnion) => {
  switch (action.type) {
    case StudentsActionTypes.STUDENTS_SET_ACTIVE:
      return action.payload;
    default:
      return state;
  }
};

export const studentsReducers: ActionReducer<IStudentsReducerState> = combineReducers({
  status,
  entities,
  ids,
  activeId,
  errors,
  subscriptionStatus
});
