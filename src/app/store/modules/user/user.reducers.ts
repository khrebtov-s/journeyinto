import { ActionReducer, combineReducers } from '@ngrx/store';
import { UserActionTypes } from './user.actions';
import {
  IUserReducerState,
  TUserActionsUnion,
  TUserStatusReducer,
  TUserEntitiesReducer,
  TUserErrorsReducer,
  TUserActiveIdReducer,
  TUserIdsReducer,
  TUserMessageReducer
} from './user.types';
import { AuthenticationActionTypes } from '../authentication/authentication.actions';
import { SignUpActionTypes } from '../sign-up/sign-up.actions';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { updateEntityById } from '@src/app/store/helpers/reducer';
import { TAuthenticationActionsUnion } from "@src/app/store/modules/authentication/authentication.types";
import { OnboardingActionTypes } from '../onboarding/onboarding.actions';
import { TeachersActionTypes } from '../teachers/teachers.actions';
import { StudentsActionTypes } from '../students/students.actions';

const initialState_status: TUserStatusReducer = null;
const status = (state = initialState_status, { type }: TUserActionsUnion | TAuthenticationActionsUnion): TUserStatusReducer => {
  switch (type) {
    case UserActionTypes.GET_CURRENT_USER_REQUEST:
    case UserActionTypes.CHECK_USER:
    case UserActionTypes.UPDATE_CURRENT_USER_REQUEST:
    case UserActionTypes.SWITCH_USER_VIEW_STATUS_REQUEST:
    case SignUpActionTypes.SIGN_UP_REQUEST:
      return RequestStatus.pending;

    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
    case UserActionTypes.UPDATE_CURRENT_USER_SUCCESS:
    case UserActionTypes.SWITCH_USER_VIEW_STATUS_SUCCESS:
    case SignUpActionTypes.SIGN_UP_SUCCESS:
      return RequestStatus.success;

    case UserActionTypes.GET_CURRENT_USER_FAILURE:
    case UserActionTypes.UPDATE_CURRENT_USER_FAILURE:
    case UserActionTypes.SWITCH_USER_VIEW_STATUS_FAILURE:
    case SignUpActionTypes.SIGN_UP_FAILURE:
      return RequestStatus.failure;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_status;

    default:
      return state;
  }
};

const initialState_entities: TUserEntitiesReducer = {};
const entities = (state = initialState_entities, { type, payload }: TUserActionsUnion): TUserEntitiesReducer => {
  let userId, userObj, creator;

  switch (type) {

    case SignUpActionTypes.SIGN_UP_REQUEST:
      return initialState_entities;

    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
      return payload.entities.users;

    case StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_SUCCESS:
      // console.log('unsubscribed');
      // console.log(payload);
      
      return state;

    case SignUpActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        [payload.user.id]: payload.user
      };

    case StudentsActionTypes.SEND_CONNECT_TO_TEACHER_SUCCESS:
      // console.log('user reducer!', payload, state);
      if (state[payload.student]) {
        // console.log({
        //   ...state,
        //   [payload.student]: {
        //     ...state[payload.student],
        //     creators: [payload.creator]
        //   }
        // });

        return {
          ...state,
          [payload.student]: {
            ...state[payload.student],
            creators: [
              payload.creator
            ]
          }
        };

      }
      return state;

    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_SUCCESS:
      // console.log(payload);
      
      userId = Object.keys(state)[0];
      return {
        [userId]: {
          ...state[userId],
          creator: payload
        }
      };

    case UserActionTypes.GET_CURRENT_USER_FAILURE:
    case SignUpActionTypes.SIGN_UP_FAILURE:
      return initialState_entities;

    case UserActionTypes.SWITCH_USER_VIEW_STATUS_SUCCESS:
      return updateEntityById(state, payload.user.id, (entity: any) => {
        return {
          ...entity,
          view_status: payload.user.view_status
        };
      });

    case UserActionTypes.UPDATE_CURRENT_USER_SUCCESS:
      // console.log(payload);

      userObj = {...payload};
      if (userObj.subjectUpdated) {
        delete userObj.subjectUpdated;
      }

      // console.log(payload);

      return updateEntityById(state, payload.id, (entity: any) => {
        return {
          ...entity,
          ...userObj
        };
      });

    case TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_SUCCESS:
      creator = payload.response;
      if (state[creator.user]) {
        return {
          ...state,
          [creator.user]: {
            ...state[creator.user],
            creator: {
              ...state[creator.user].creator,
              ...creator
            }
          }
        };
      }

      return state;


    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_entities;

    default:
      return state;
  }
};

const initialState_ids: TUserIdsReducer = [];
const ids = (state = initialState_ids, { type, payload }: TUserActionsUnion): TUserIdsReducer => {
  switch (type) {
    case UserActionTypes.GET_CURRENT_USER_REQUEST:
    case UserActionTypes.CHECK_USER:
    case SignUpActionTypes.SIGN_UP_REQUEST:
      return initialState_ids;

    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
      return payload.result;

    case SignUpActionTypes.SIGN_UP_SUCCESS:
      return [
        ...state,
        ...payload.user.id
      ];

    case UserActionTypes.GET_CURRENT_USER_FAILURE:
    case SignUpActionTypes.SIGN_UP_FAILURE:
      return initialState_ids;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_ids;

    default:
      return state;
  }
};

const initialState_errors: TUserErrorsReducer = null;
const errors = (state = initialState_errors, { type, payload }: TUserActionsUnion): TUserErrorsReducer => {
  switch (type) {
    case UserActionTypes.GET_CURRENT_USER_REQUEST:
    case UserActionTypes.CHECK_USER:
    case SignUpActionTypes.SIGN_UP_REQUEST:
    case UserActionTypes.UPDATE_CURRENT_USER_REQUEST:
      return initialState_errors;

    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
    case SignUpActionTypes.SIGN_UP_SUCCESS:
    case UserActionTypes.UPDATE_CURRENT_USER_SUCCESS:
      return initialState_errors;

    case UserActionTypes.GET_CURRENT_USER_FAILURE:
    case SignUpActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.UPDATE_CURRENT_USER_FAILURE:
      return payload.message;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_errors;

    default:
      return state;
  }
};

const initialState_activeId: TUserActiveIdReducer = null;
const activeId = (state = initialState_activeId, { type, payload }: TUserActionsUnion): TUserActiveIdReducer => {
  switch (type) {
    case UserActionTypes.GET_CURRENT_USER_SUCCESS:
      return payload.result;

    case SignUpActionTypes.SIGN_UP_SUCCESS:
      return payload.user.id;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_activeId;

    default:
      return state;
  }
};

const initialState_message: TUserMessageReducer = null;
const message = (
  state = initialState_message,
  { type, payload }: TUserActionsUnion
): TUserMessageReducer => {

  let messageSubject, verb;

  switch (type) {
    case UserActionTypes.UPDATE_CURRENT_USER_SUCCESS:
      messageSubject = payload.subjectUpdated ? payload.subjectUpdated : 'account';
      verb = payload.subjectUpdated === 'account details' ? 'have' : 'has';

      return {
        ...state,
        message: `Your ${messageSubject} ${verb} been successfully updated`
      };

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_message;

    default:
      return initialState_message;
  }
};

export const userReducers: ActionReducer<IUserReducerState> = combineReducers({
  status,
  entities,
  ids,
  activeId,
  errors,
  message
});
