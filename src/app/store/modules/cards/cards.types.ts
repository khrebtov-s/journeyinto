import {
  GetUserCardsFailureAction,
  GetUserCardsRequestAction,
  GetUserCardsSuccessAction,
  RemoveUserCardRequestAction,
  RemoveUserCardSuccessAction,
  RemoveUserCardFailureAction,
  SendStripeTokenFailureAction,
  SendStripeTokenRequestAction,
  SendStripeTokenSuccessAction
} from '@src/app/store/modules/cards/cards.actions';

export type TGetUserCardsActionsUnion =
  | GetUserCardsRequestAction
  | GetUserCardsSuccessAction
  | GetUserCardsFailureAction;

export type TRemoveUserCardsActionsUnion =
  | RemoveUserCardRequestAction
  | RemoveUserCardSuccessAction
  | RemoveUserCardFailureAction;

export type GetStripeTokensActionsUnion =
  | SendStripeTokenRequestAction
  | SendStripeTokenSuccessAction
  | SendStripeTokenFailureAction;

export type TCardsStatusReducer = null | string;
export type TCardsStatusActionReducer = null | {
  status: string,
  action: string
};

export type TCardsReducer = any;
export type TCardsEntitiesReducer = {};
export type TCardsIdsReducer = number[];
export type TCardsErrorsReducer = null;

export interface ICardsReducerState {
  status: TCardsStatusReducer;
  entities: TCardsEntitiesReducer;
  ids: TCardsIdsReducer;
  errors: TCardsErrorsReducer;
  // activeId: TUserActiveIdReducer;
  cards: TCardsReducer
}
