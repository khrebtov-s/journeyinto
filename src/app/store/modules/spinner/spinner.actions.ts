import { Action } from "@ngrx/store";

export enum SpinnerActionTypes {
  SET_ADD_CLASS_TEXT = "[spinner] set text",
  SET_ADD_CLASS_TEXT_END = "[spinner] set text end",
}

export class SetAddClassTextAction implements Action {
  readonly type: string = SpinnerActionTypes.SET_ADD_CLASS_TEXT;
  constructor(public payload = null) {}
}

export class SetAddClassTextEndAction implements Action {
  readonly type: string = SpinnerActionTypes.SET_ADD_CLASS_TEXT_END;
  constructor(public payload = null) {}
}
