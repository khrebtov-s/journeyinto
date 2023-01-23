import { Action } from '@ngrx/store';
import { IStepOneFormData } from './onboarding.types';

export enum OnboardingActionTypes {
  ONBOARDING_STUDENT_STEP_ONE_REQUEST = '[onboarding student step one] request',
  ONBOARDING_STUDENT_STEP_ONE_SUCCESS = '[onboarding student step one] success',
  ONBOARDING_STUDENT_STEP_ONE_FAILURE = '[onboarding student step one] failure',

  ONBOARDING_TEACHER_STEP_ONE_REQUEST = '[onboarding teacher step one] request',
  ONBOARDING_TEACHER_STEP_ONE_SUCCESS = '[onboarding teacher step one] success',
  ONBOARDING_TEACHER_STEP_ONE_FAILURE = '[onboarding teacher step one] failure',

  ONBOARDING_TEACHER_STEP_TWO_REQUEST = '[onboarding teacher step two] request',
  ONBOARDING_TEACHER_STEP_TWO_SUCCESS = '[onboarding teacher step two] success',
  ONBOARDING_TEACHER_STEP_TWO_FAILURE = '[onboarding teacher step two] failure',
  ONBOARDING_TEACHER_STEP_ONE_STORE_FORM_DATA = '[onboarding teacher step one] store form data',
  ONBOARDING_TEACHER_STEP_ONE_CLEAR_FORM = '[onboarding teacher step one] clear form'
}

// Student: step one
export class OnboardingStudentStepOneRequestAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_REQUEST;
  constructor(public payload: any) {}
}

export class OnboardingStudentStepOneSuccessAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_SUCCESS;

  constructor(public payload: any) {}
}

export class OnboardingStudentStepOneFailureAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_FAILURE;

  constructor(public payload: any) {}
}

// Teacher: step one
export class OnboardingTeacherStepOneRequestAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_REQUEST;
  constructor(public payload: any) {}
}


export class OnboardingTeacherStepOneStoreFormAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_STORE_FORM_DATA;
  constructor(public payload: IStepOneFormData) {}
}


export class OnboardingTeacherStepOneClearFormAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_CLEAR_FORM;
  constructor() {}
}

export class OnboardingTeacherStepOneSuccessAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_SUCCESS;

  constructor(public payload: any) {}
}

export class OnboardingTeacherStepOneFailureAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_FAILURE;

  constructor(public payload: any) {}
}

// Teacher: step two
export class OnboardingTeacherStepTwoRequestAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_REQUEST;
  constructor(public payload: any) {}
}

export class OnboardingTeacherStepTwoSuccessAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_SUCCESS;

  constructor(public payload: any) {}
}

export class OnboardingTeacherStepTwoFailureAction implements Action {
  readonly type: string = OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_FAILURE;

  constructor(public payload: any) {}
}
