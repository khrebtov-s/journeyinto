import {
  OnboardingStudentStepOneRequestAction,
  OnboardingStudentStepOneSuccessAction,
  OnboardingStudentStepOneFailureAction,
  OnboardingTeacherStepOneRequestAction,
  OnboardingTeacherStepOneSuccessAction,
  OnboardingTeacherStepOneFailureAction,
  OnboardingTeacherStepTwoRequestAction,
  OnboardingTeacherStepTwoSuccessAction,
  OnboardingTeacherStepTwoFailureAction,
  OnboardingTeacherStepOneStoreFormAction
} from './onboarding.actions';

// Actions
export type OnboardingStudentStepOneActionsUnion =
  | OnboardingStudentStepOneRequestAction
  | OnboardingStudentStepOneSuccessAction
  | OnboardingStudentStepOneFailureAction;

export type OnboardingTeacherStepOneActionsUnion =
  | OnboardingTeacherStepOneRequestAction
  | OnboardingTeacherStepOneSuccessAction
  | OnboardingTeacherStepOneFailureAction;

export type OnboardingTeacherStepTwoActionsUnion =
  | OnboardingTeacherStepTwoRequestAction
  | OnboardingTeacherStepTwoSuccessAction
  | OnboardingTeacherStepTwoFailureAction;

export type TOnboardingActionsUnion =
  | OnboardingStudentStepOneActionsUnion
  | OnboardingTeacherStepOneActionsUnion
  | OnboardingTeacherStepTwoActionsUnion;

export type TOnboardingActionsDataState =
| OnboardingTeacherStepOneStoreFormAction;

// Reducers
export type TOnboardingStatusReducer = null | string;
export type TOnboardingEntityReducer = {
  type: null | string;
  step: number;
  isCompleted: boolean;
};

export interface TOnboardingDataState {
  formData: IStepOneFormData;
}
export type TOnboardingErrorsReducer = any;

export interface IOnboardingReducerState {
  status: TOnboardingStatusReducer;
  entity: TOnboardingEntityReducer;
  errors: TOnboardingErrorsReducer;
  dataState: TOnboardingDataState;
}

export interface IStepOneFormData {
  profile_title: string;
  image: File;
  description: string;
  city: string;
  style: string;
  links: ILink[];
  news_events: string;
  qualifications: string;
}

interface ILink {
  id: string;
  label: string;
  url: string;
}
