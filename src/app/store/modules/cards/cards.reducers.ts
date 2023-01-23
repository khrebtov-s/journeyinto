import { AuthenticationActionTypes } from '@src/app/store/modules/authentication/authentication.actions';
import { CardsActionTypes } from '@src/app/store/modules/cards/cards.actions';
import { ActionReducer, combineReducers } from '@ngrx/store';
import {
  ICardsReducerState,
  TCardsEntitiesReducer,
  TCardsErrorsReducer,
  TCardsIdsReducer,
  TCardsStatusReducer,
  TGetUserCardsActionsUnion,
  TRemoveUserCardsActionsUnion,
  GetStripeTokensActionsUnion,
  TCardsStatusActionReducer
} from '@src/app/store/modules/cards/cards.types';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { TStudentsActionsUnion } from '@src/app/store/modules/students/students.types';

const initialState_cards = {
  cards: [],
};

const cards = (
  state = initialState_cards,
  {type, payload}
) => {
  switch (type) {
    case CardsActionTypes.GET_USERS_CARDS_SUCCESS:
    case CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS:
      return payload.response;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_cards;

    default:
      return state;
  }
};

const initialState_status: TCardsStatusReducer = null;
const status = (
  state = initialState_status,
  { type }: TGetUserCardsActionsUnion | TRemoveUserCardsActionsUnion | GetStripeTokensActionsUnion
): TCardsStatusReducer => {
  switch (type) {
    case CardsActionTypes.GET_USERS_CARDS_REQUEST:
    case CardsActionTypes.REMOVE_CARD_REQUEST:
    case CardsActionTypes.SEND_STRIPE_TOKEN_REQUEST:
    case CardsActionTypes.MAKE_USER_CARD_DEFAULT_REQUEST:
      return RequestStatus.pending;

    case CardsActionTypes.GET_USERS_CARDS_SUCCESS:
    case CardsActionTypes.REMOVE_CARD_SUCCESS:
    case CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS:
    case CardsActionTypes.MAKE_USER_CARD_DEFAULT_SUCCESS:
      return RequestStatus.success;

    case CardsActionTypes.GET_USERS_CARDS_FAILURE:
    case CardsActionTypes.REMOVE_CARD_FAILURE:
    case CardsActionTypes.SEND_STRIPE_TOKEN_FAILURE:
    case CardsActionTypes.MAKE_USER_CARD_DEFAULT_FAILURE:
      return RequestStatus.failure;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_status;

    default:
      return state;
  }
};

const initialState_status_action: TCardsStatusActionReducer = null;
const statusActions = (
  state = initialState_status_action,
  { type }: TGetUserCardsActionsUnion | TRemoveUserCardsActionsUnion | GetStripeTokensActionsUnion
): TCardsStatusActionReducer => {
  switch (type) {
    case CardsActionTypes.MAKE_USER_CARD_DEFAULT_SUCCESS:
      return {
        action: CardsActionTypes.MAKE_USER_CARD_DEFAULT_SUCCESS,
        status: RequestStatus.success
      };

    case CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS:
      return {
        action: CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS,
        status: RequestStatus.success
      };

    default:
      return state;
  }
}

const initialState_entities: TCardsEntitiesReducer = {};
const entities = (
  state = initialState_entities,
  { type, payload }: TGetUserCardsActionsUnion | TRemoveUserCardsActionsUnion | TStudentsActionsUnion
): TCardsEntitiesReducer => {
  switch (type) {
    case CardsActionTypes.GET_USERS_CARDS_SUCCESS:
      return payload.response;

    case CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS:
      return payload.response;


    case CardsActionTypes.MAKE_USER_CARD_DEFAULT_SUCCESS:
      return payload.entities.cards;


    case CardsActionTypes.REMOVE_CARD_SUCCESS:
      const result = Object.assign({}, state);
      delete result[payload];
      return result;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return initialState_entities;

    default:
      return state;
  }
};

const initialState_ids: TCardsIdsReducer = [];
const ids = (
  state = initialState_ids,
  { type, payload }: TGetUserCardsActionsUnion | TRemoveUserCardsActionsUnion
): TCardsIdsReducer => {
  switch (type) {
    case CardsActionTypes.GET_USERS_CARDS_SUCCESS:
    case CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS:
    case CardsActionTypes.MAKE_USER_CARD_DEFAULT_SUCCESS:
      return payload.result;

    case CardsActionTypes.REMOVE_CARD_SUCCESS:
      return state.filter(item => item !== payload);

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const initialState_errors: TCardsErrorsReducer = null;
const errors = (state = initialState_errors, { type, payload }: TGetUserCardsActionsUnion): TCardsErrorsReducer => {
  switch (type) {
    case CardsActionTypes.GET_USERS_CARDS_REQUEST:
    case CardsActionTypes.REMOVE_CARD_REQUEST:
    case CardsActionTypes.SEND_STRIPE_TOKEN_REQUEST:
    case CardsActionTypes.MAKE_USER_CARD_DEFAULT_REQUEST:
      return initialState_errors;

    case CardsActionTypes.GET_USERS_CARDS_SUCCESS:
    case CardsActionTypes.REMOVE_CARD_SUCCESS:
    case CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS:
    case CardsActionTypes.MAKE_USER_CARD_DEFAULT_SUCCESS:
      return initialState_errors;

    case CardsActionTypes.GET_USERS_CARDS_FAILURE:
    case CardsActionTypes.REMOVE_CARD_FAILURE:
    case CardsActionTypes.SEND_STRIPE_TOKEN_FAILURE:
    case CardsActionTypes.MAKE_USER_CARD_DEFAULT_FAILURE:
      return payload.message;

    default:
      return state;
  }
};

export const cardsReducers: ActionReducer<ICardsReducerState> = combineReducers({
  status,
  statusActions,
  entities,
  ids,
  // activeId,
  errors,
  cards
});
