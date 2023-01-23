import { ActionReducer, combineReducers } from '@ngrx/store';
import { OnboardingActionTypes } from './onboarding.actions';
import {
  IOnboardingReducerState,
  TOnboardingActionsUnion,
  TOnboardingEntityReducer,
  TOnboardingErrorsReducer,
  TOnboardingStatusReducer,
  TOnboardingDataState,
  TOnboardingActionsDataState
} from './onboarding.types';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { AuthenticationActionTypes } from "@src/app/store/modules/authentication/authentication.actions";
import { TAuthenticationActionsUnion } from "@src/app/store/modules/authentication/authentication.types";

const initialState_status: TOnboardingStatusReducer = null;
const status = (state = initialState_status, { type }: TOnboardingActionsUnion | TAuthenticationActionsUnion): TOnboardingStatusReducer => {
  switch (type) {
    case OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_REQUEST:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_REQUEST:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_REQUEST:
      return RequestStatus.pending;

    case OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_SUCCESS:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_SUCCESS:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_SUCCESS:
      return RequestStatus.success;

    case OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_FAILURE:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_FAILURE:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_FAILURE:
      return RequestStatus.failure;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_status;

    default:
      return state;
  }
};

const initialState_entity: TOnboardingEntityReducer = {
  type: null,
  step: 0,
  isCompleted: false
};
const entity = (state = initialState_entity, { type }: TOnboardingActionsUnion | TAuthenticationActionsUnion ): TOnboardingEntityReducer => {
  switch (type) {
    case OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_REQUEST:
      return state;

    case OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_SUCCESS:
      return {
        type: 'student',
        step: 1,
        isCompleted: true
      };

    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_SUCCESS:
      return {
        type: 'teacher',
        step: 1,
        isCompleted: false
      };

    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_SUCCESS:
      return {
        type: 'teacher',
        step: 2,
        isCompleted: true
      };

    case OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_FAILURE:
      return state;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_entity;

    default:
      return state;
  }
};

const initialState_errors: TOnboardingErrorsReducer = null;
const errors = (state = initialState_errors, { type, payload }: TOnboardingActionsUnion | TAuthenticationActionsUnion): TOnboardingErrorsReducer => {
  switch (type) {
    case OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_REQUEST:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_REQUEST:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_REQUEST:
    case OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_SUCCESS:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_SUCCESS:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_SUCCESS:
      return initialState_errors;

    case OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_FAILURE:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_FAILURE:
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_FAILURE:
      return payload.message;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_errors;

    default:
      return state;
  }
};

const initialState: TOnboardingDataState = {
  formData: null
};
const dataState = (state = initialState, { type, payload }: TOnboardingActionsDataState ): TOnboardingDataState => {
  switch (type) {
    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_STORE_FORM_DATA:
      return {
        ...state,
        formData: payload
      };

    case OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_CLEAR_FORM:
      return {
        ...state,
        formData: null
      };

    default:
      return state;
  }
};

export const onboardingReducers: ActionReducer<IOnboardingReducerState> = combineReducers({
  status,
  entity,
  errors,
  dataState
});
