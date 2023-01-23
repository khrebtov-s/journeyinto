import { Action } from '@ngrx/store';

export enum StudentsActionTypes {
  GET_STUDENTS_LIST_REQUEST = '[get students list] request',
  GET_STUDENTS_LIST_SUCCESS = '[get students list] success',
  GET_STUDENTS_LIST_FAILURE = '[get students list] failure',

  GET_STUDENTS_BY_ID_REQUEST = '[get students by id] request',
  GET_STUDENTS_BY_ID_SUCCESS = '[get students by id] success',
  GET_STUDENTS_BY_ID_FAILURE = '[get students by id] failure',

  UPDATE_STUDENTS_BY_ID_REQUEST = '[update students profile by id] request',
  UPDATE_STUDENTS_BY_ID_SUCCESS = '[update students profile by id] success',
  UPDATE_STUDENTS_BY_ID_FAILURE = '[update students profile by id] failure',

  STUDENTS_SET_ACTIVE = '[students set active] set active',

  SEND_CONNECT_TO_TEACHER_REQUEST = '[send connect to teacher] request',
  SEND_CONNECT_TO_TEACHER_SUCCESS = '[send connect to teacher] success',
  SEND_CONNECT_TO_TEACHER_FAILURE = '[send connect to teacher] failure',

  SEND_DISCONNECT_FROM_TEACHER_REQUEST = '[send disconnect from teacher] request',
  SEND_DISCONNECT_FROM_TEACHER_SUCCESS = '[send disconnect from teacher] success',
  SEND_DISCONNECT_FROM_TEACHER_FAILURE = '[send disconnect from teacher] failure',

  SEND_SUBSCRIBE_TO_TEACHER_REQUEST = '[send subscribe to teacher] request',
  SEND_SUBSCRIBE_TO_TEACHER_SUCCESS = '[send subscribe to teacher] success',
  SEND_SUBSCRIBE_TO_TEACHER_FAILURE = '[send subscribe to teacher] failure',

  SEND_UNSUBSCRIBE_FROM_TEACHER_REQUEST = '[send unsubscribe from teacher] request',
  SEND_UNSUBSCRIBE_FROM_TEACHER_SUCCESS = '[send unsubscribe from teacher] success',
  SEND_UNSUBSCRIBE_FROM_TEACHER_FAILURE = '[send unsubscribe from teacher] failure',

  PURCHASE_TEACHER_CLASS_REQUEST = '[purchase teacher class] request',
  PURCHASE_TEACHER_CLASS_SUCCESS = '[purchase teacher class] success',
  PURCHASE_TEACHER_CLASS_FAILURE = '[purchase teacher class] failure',
}

// Get students list
export class GetStudentsListRequestAction implements Action {
  readonly type: string = StudentsActionTypes.GET_STUDENTS_LIST_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetStudentsListSuccessAction implements Action {
  readonly type: string = StudentsActionTypes.GET_STUDENTS_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class GetStudentsListFailureAction implements Action {
  readonly type: string = StudentsActionTypes.GET_STUDENTS_LIST_FAILURE;

  constructor(public payload: any) {}
}

// Get student by id
export class GetStudentsByIdRequestAction implements Action {
  readonly type: string = StudentsActionTypes.GET_STUDENTS_BY_ID_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetStudentsByIdSuccessAction implements Action {
  readonly type: string = StudentsActionTypes.GET_STUDENTS_BY_ID_SUCCESS;

  constructor(public payload: any) {}
}

export class GetStudentsByIdFailureAction implements Action {
  readonly type: string = StudentsActionTypes.GET_STUDENTS_BY_ID_FAILURE;

  constructor(public payload: any) {}
}

// Set student active
export class StudentSetActiveAction implements Action {
  readonly type = StudentsActionTypes.STUDENTS_SET_ACTIVE;

  constructor(public payload: any) {}
}

// Update teachers
export class UpdateStudentsByIdRequestAction implements Action {
  readonly type: string = StudentsActionTypes.UPDATE_STUDENTS_BY_ID_REQUEST;

  constructor(public payload: any = null) {}
}

export class UpdateStudentsByIdSuccessAction implements Action {
  readonly type: string = StudentsActionTypes.UPDATE_STUDENTS_BY_ID_SUCCESS;

  constructor(public payload: any) {}
}

export class UpdateStudentsByIdFailureAction implements Action {
  readonly type: string = StudentsActionTypes.UPDATE_STUDENTS_BY_ID_FAILURE;

  constructor(public payload: any) {}
}

// Connect to teacher
export class ConnectToTeacherRequestAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_CONNECT_TO_TEACHER_REQUEST;

  constructor(public payload: any) {}
}

export class ConnectToTeacherSuccessAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_CONNECT_TO_TEACHER_SUCCESS;

  constructor(public payload: any) {}
}

export class ConnectToTeacherFailureAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_CONNECT_TO_TEACHER_FAILURE;

  constructor(public payload: any) {}
}

// Disconnect from teacher
export class DisconnectFromTeacherRequestAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_REQUEST;

  constructor(public payload: any) {}
}

export class DisconnectFromTeacherSuccessAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_SUCCESS;

  constructor(public payload: any) {}
}

export class DisconnectFromTeacherFailureAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_FAILURE;

  constructor(public payload: any) {}
}


// Subscribe teacher
export class SubscribeToTeacherRequestAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_REQUEST;

  constructor(public payload: any = null) {}
}

export class SubscribeToTeacherSuccessAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_SUCCESS;

  constructor(public payload: any) {}
}

export class SubscribeToTeacherFailureAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_FAILURE;

  constructor(public payload: any) {}
}

// Unsubscribe
export class UnsubscribeFromTeacherRequestAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_REQUEST;

  constructor(public payload: any = null) {}
}

export class UnsubscribeFromTeacherSuccessAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_SUCCESS;

  constructor(public payload: any) {}
}

export class UnsubscribeFromTeacherFailureAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_FAILURE;

  constructor(public payload: any) {}
}

// Buy one single class
export class PurchaseTeacherClassRequestAction implements Action {
  readonly type: string = StudentsActionTypes.PURCHASE_TEACHER_CLASS_REQUEST;

  constructor(public payload: any = null) {}
}

export class PurchaseTeacherClassSuccessAction implements Action {
  readonly type: string = StudentsActionTypes.PURCHASE_TEACHER_CLASS_SUCCESS;

  constructor(public payload: any) {}
}

export class PurchaseTeacherClassFailureAction implements Action {
  readonly type: string = StudentsActionTypes.PURCHASE_TEACHER_CLASS_FAILURE;

  constructor(public payload: any) {}
}
