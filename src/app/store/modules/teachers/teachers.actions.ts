import { Action } from "@ngrx/store";

export enum TeachersActionTypes {
  GET_TEACHERS_LIST_REQUEST = "[get teachers list] request",
  GET_TEACHERS_LIST_SUCCESS = "[get teachers list] success",
  GET_TEACHERS_LIST_FAILURE = "[get teachers list] failure",

  GET_CURRENT_TEACHER_REQUEST = "[get current teacher] request",
  GET_CURRENT_TEACHER_SUCCESS = "[get current teacher] success",
  GET_CURRENT_TEACHER_FAILURE = "[get current teacher] failure",

  GET_TEACHER_BY_SLUG_REQUEST = "[get teacher by slug] request",
  GET_TEACHER_BY_SLUG_SUCCESS = "[get teacher by slug] success",
  GET_TEACHER_BY_SLUG_FAILURE = "[get teacher by slug] failure",

  UPDATE_TEACHER_BY_SLUG_REQUEST = "[update teacher profile by slug] request",
  UPDATE_TEACHER_BY_SLUG_SUCCESS = "[update teacher profile by slug] success",
  UPDATE_TEACHER_BY_SLUG_FAILURE = "[update teacher profile by slug] failure",

  ADD_VIDEO_TO_CLASS_REQUEST = "[add video to class] request",
  ADD_VIDEO_TO_CLASS_SUCCESS = "[add video to class] success",
  ADD_VIDEO_TO_CLASS_FAILURE = "[add video to class] failure",

  ADD_TEACHER_CLASS_REQUEST = "[add teacher class] request",
  ADD_TEACHER_CLASS_PROGRESS_REQUEST = "[add teacher progressclass] request",
  ADD_TEACHER_CLASS_SUCCESS = "[add teacher class] success",
  ADD_TEACHER_CLASS_END_GETTING = "[add teacher class] getting",
  ADD_TEACHER_CLASS_FAILURE = "[add teacher class] failure",

  GET_STUDENTS_LIST_BY_TEACHER_REQUEST = "[get students list by teacher] request",
  GET_STUDENTS_LIST_BY_TEACHER_SUCCESS = "[get students list by teacher] success",
  GET_STUDENTS_LIST_BY_TEACHER_FAILURE = "[get students list by teacher] failure",

  TEACHERS_SET_ACTIVE = "[teachers set active] set active",
}

// Get teachers list
export class GetTeachersListRequestAction implements Action {
  readonly type: string = TeachersActionTypes.GET_TEACHERS_LIST_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetTeachersListSuccessAction implements Action {
  readonly type: string = TeachersActionTypes.GET_TEACHERS_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class GetTeachersListFailureAction implements Action {
  readonly type: string = TeachersActionTypes.GET_TEACHERS_LIST_FAILURE;

  constructor(public payload: any) {}
}

// Get current teacher
export class GetCurrentTeacherRequestAction implements Action {
  readonly type: string = TeachersActionTypes.GET_CURRENT_TEACHER_REQUEST;
  constructor(public payload: any = null) {}
}

export class GetCurrentTeacherSuccessAction implements Action {
  readonly type: string = TeachersActionTypes.GET_CURRENT_TEACHER_SUCCESS;

  constructor(public payload: any) {}
}

export class GetCurrentTeacherFailureAction implements Action {
  readonly type: string = TeachersActionTypes.GET_CURRENT_TEACHER_FAILURE;

  constructor(public payload: any) {}
}

// Get teachers by slug
export class GetTeacherBySlugRequestAction implements Action {
  readonly type: string = TeachersActionTypes.GET_TEACHER_BY_SLUG_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetTeacherBySlugSuccessAction implements Action {
  readonly type: string = TeachersActionTypes.GET_TEACHER_BY_SLUG_SUCCESS;

  constructor(public payload: any) {}
}

export class GetTeacherBySlugFailureAction implements Action {
  readonly type: string = TeachersActionTypes.GET_TEACHER_BY_SLUG_FAILURE;

  constructor(public payload: any) {}
}

// Set teacher acvite
export class TeachersSetActiveAction implements Action {
  readonly type = TeachersActionTypes.TEACHERS_SET_ACTIVE;

  constructor(public payload: any) {
    // console.log('in set active action', payload);
  }
}

// Update teachers
export class UpdateTeacherRequestAction implements Action {
  readonly type: string = TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_REQUEST;

  constructor(public payload: any = null) {}
}

export class UpdateTeacherSuccessAction implements Action {
  readonly type: string = TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_SUCCESS;

  constructor(public payload: any) {}
}

export class UpdateTeacherFailureAction implements Action {
  readonly type: string = TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_FAILURE;

  constructor(public payload: any) {}
}

// Add class
export class AddClassRequestAction implements Action {
  readonly type: string = TeachersActionTypes.ADD_TEACHER_CLASS_REQUEST;
  constructor(public payload: any = null) {}
}

export class AddClassRequestProgressAction implements Action {
  readonly type: string = TeachersActionTypes.ADD_TEACHER_CLASS_PROGRESS_REQUEST;
  constructor(public payload: any ) {}
}

export class AddClassSuccessAction implements Action {
  readonly type: string = TeachersActionTypes.ADD_TEACHER_CLASS_SUCCESS;

  constructor(public payload: any) {}
}

export class AddClassSuccessEnd implements Action {
  readonly type: string = TeachersActionTypes.ADD_TEACHER_CLASS_END_GETTING;

  constructor(public payload: any = null) {}
}

export class AddClassFailureAction implements Action {
  readonly type: string = TeachersActionTypes.ADD_TEACHER_CLASS_FAILURE;

  constructor(public payload: any) {}
}

// Add video to class
export class AddVideoToClassAction implements Action {
  readonly type: string = TeachersActionTypes.ADD_VIDEO_TO_CLASS_REQUEST;

  constructor(public payload: any) {}
}

// Get students list by teacher
export class GetStudentsListByTeacherRequestAction implements Action {
  readonly type: string =
    TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetStudentsListByTeacherSuccessAction implements Action {
  readonly type: string =
    TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_SUCCESS;

  constructor(public payload: any) {}
}

export class GetStudentsListByTeacherFailureAction implements Action {
  readonly type: string =
    TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_FAILURE;

  constructor(public payload: any) {}
}
