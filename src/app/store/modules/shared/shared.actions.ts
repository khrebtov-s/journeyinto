import { Action } from '@ngrx/store';
//import { SignUpActionTypes } from '@src/app/store/modules/sign-up/sign-up.actions';

export enum SharedActionTypes {
  SET_TITLE = '[shared] set title',
  SET_BACK = '[shared] set back',
  SET_CAN_GO_BACK = '[shared] set can go back',
  ROUTER_STORE_NAVIGATION = '@ngrx/router-store/navigation',
  ROUTER_STORE_CANCEL = '@ngrx/router-store/cancel'
}

export class SetTitleSharedAction implements Action {
  readonly type: string = SharedActionTypes.SET_TITLE;
  constructor(public payload = null) {
  }
}

export class SetBackSharedAction implements Action {
  readonly type: string = SharedActionTypes.SET_BACK;

  constructor(public payload: boolean | Array<string>) {
  }
}

export class SetCanGoBackSharedAction implements Action {
  readonly type: string = SharedActionTypes.SET_CAN_GO_BACK;

  constructor(public payload: boolean = null) {
  }
}