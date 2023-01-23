import {
  GetStudentsListRequestAction,
  GetStudentsListSuccessAction,
  GetStudentsListFailureAction,
  GetStudentsByIdRequestAction,
  GetStudentsByIdSuccessAction,
  GetStudentsByIdFailureAction,
  UpdateStudentsByIdRequestAction,
  UpdateStudentsByIdSuccessAction,
  UpdateStudentsByIdFailureAction,
  SubscribeToTeacherRequestAction,
  SubscribeToTeacherSuccessAction,
  SubscribeToTeacherFailureAction,
  UnsubscribeFromTeacherRequestAction,
  UnsubscribeFromTeacherSuccessAction,
  UnsubscribeFromTeacherFailureAction,
  ConnectToTeacherRequestAction,
  ConnectToTeacherSuccessAction,
  ConnectToTeacherFailureAction,
  DisconnectFromTeacherRequestAction,
  DisconnectFromTeacherSuccessAction,
  DisconnectFromTeacherFailureAction,
  PurchaseTeacherClassRequestAction,
  PurchaseTeacherClassSuccessAction,
  PurchaseTeacherClassFailureAction
} from './students.actions';

// Actions
export type GetStudentsListActionsUnion =
  | GetStudentsListRequestAction
  | GetStudentsListSuccessAction
  | GetStudentsListFailureAction;

export type GetStudentsByIdActionsUnion =
  | GetStudentsByIdRequestAction
  | GetStudentsByIdSuccessAction
  | GetStudentsByIdFailureAction;

export type UpdateStudentsByIdActionsUnion =
  | UpdateStudentsByIdRequestAction
  | UpdateStudentsByIdFailureAction
  | UpdateStudentsByIdSuccessAction;

export type ConnectToTeacherActionsUnion = 
  | ConnectToTeacherRequestAction
  | ConnectToTeacherSuccessAction
  | ConnectToTeacherFailureAction;

export type DisconnectFromTeacherActionsUnion = 
  | DisconnectFromTeacherRequestAction
  | DisconnectFromTeacherSuccessAction
  | DisconnectFromTeacherFailureAction;

export type SubscribeToTeacherActionsUnion =
  | SubscribeToTeacherRequestAction
  | SubscribeToTeacherSuccessAction
  | SubscribeToTeacherFailureAction;

export type UnsubscribeToTeacherActionsUnion =
  | UnsubscribeFromTeacherRequestAction
  | UnsubscribeFromTeacherSuccessAction
  | UnsubscribeFromTeacherFailureAction;

export type PurchaseTeacherClassActionsUnion = 
  | PurchaseTeacherClassRequestAction
  | PurchaseTeacherClassSuccessAction
  | PurchaseTeacherClassFailureAction;

export type TStudentsActionsUnion =
  | GetStudentsListActionsUnion
  | GetStudentsByIdActionsUnion
  | UpdateStudentsByIdActionsUnion
  | ConnectToTeacherActionsUnion
  | DisconnectFromTeacherActionsUnion
  | SubscribeToTeacherActionsUnion
  | UnsubscribeToTeacherActionsUnion
  | PurchaseTeacherClassActionsUnion;

// Reducers
export type TStudentsStatusReducer = null | string;
export type TStudentsEntitiesReducer = {};
export type TStudentsIdsReducer = number[];
export type TStudentsErrorsReducer = any;
export type TStudentSubscriptionStatus = string;

export interface IStudentsReducerState {
  status: TStudentsStatusReducer;
  entities: TStudentsEntitiesReducer;
  ids: TStudentsIdsReducer;
  errors: TStudentsErrorsReducer;
  subscriptionStatus: TStudentSubscriptionStatus;
}

export enum SubscriptionStatus {
  canceled = 'canceled',
  incomplete = 'incomplete',
  incomplete_expired = 'incomplete_expired',
  trialing = 'trialing',
  active = 'active',
  past_due = 'past_due',
  unpaid = 'unpaid',
}
