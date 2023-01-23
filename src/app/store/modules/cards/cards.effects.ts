// Get user cards
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs/index';
import { Injectable } from '@angular/core';
import { UserService } from '@src/app/services/user/user.service';
import { CardsService } from "@src/app/services/cards/cards.service";
import {
  CardsActionTypes,
  GetUserCardsRequestAction,
  GetUserCardsFailureAction,
  GetUserCardsSuccessAction,
  RemoveUserCardFailureAction,
  RemoveUserCardRequestAction,
  RemoveUserCardSuccessAction,
  SendStripeTokenFailureAction,
  SendStripeTokenRequestAction,
  SendStripeTokenSuccessAction,
  MakeUserCardDefaultRequestAction,
  MakeUserCardDefaultSuccessAction,
  MakeUserCardDefaultFailureAction,
} from '@src/app/store/modules/cards/cards.actions';
import { normalize } from 'normalizr';
import { cardsSchema } from '@src/app/store/modules/cards/cards.schema';

@Injectable()
export class CardsEffects {
  constructor(protected actions$: Actions, protected userService: UserService, protected cardsService: CardsService) {}

  @Effect()
  protected getUserCards = this.actions$.pipe(
    ofType<GetUserCardsRequestAction>(CardsActionTypes.GET_USERS_CARDS_REQUEST),
    exhaustMap(() =>
      this.userService.getUserCards().pipe(
        map((response: any) => {
          return new GetUserCardsSuccessAction({response})
          // return new GetUserCardsSuccessAction(normalize(response, [cardsSchema]))
        }),
        catchError(error => of(new GetUserCardsFailureAction(error)))
      )
    )
  );

  @Effect()
  protected sendStripeToken = this.actions$.pipe(
    ofType<SendStripeTokenRequestAction>(CardsActionTypes.SEND_STRIPE_TOKEN_REQUEST),
    exhaustMap(({ payload }) => {
      return this.cardsService.setStripeToken(payload).pipe(
        map((response: any) => {
          return new SendStripeTokenSuccessAction({response});
        }),
        catchError((error: any) => of(new SendStripeTokenFailureAction(error)))
      );
    })
  );

  @Effect()
  protected removeCard = this.actions$.pipe(
    ofType<RemoveUserCardRequestAction>(CardsActionTypes.REMOVE_CARD_REQUEST),
    exhaustMap(({ payload }) =>
      this.cardsService.removeCard(payload).pipe(
        map((response: any) => new RemoveUserCardSuccessAction(response.id)),
        catchError((error: any) => of(new RemoveUserCardFailureAction(error)))
      )
    )
  );

  @Effect()
  protected makeDefaultCard = this.actions$.pipe(
    ofType<MakeUserCardDefaultRequestAction>(CardsActionTypes.MAKE_USER_CARD_DEFAULT_REQUEST),
    exhaustMap(({ payload }) =>
      this.cardsService.makeDefaultCard(payload).pipe(
        map((response: any) => new MakeUserCardDefaultSuccessAction(normalize(response, [cardsSchema]))),
        catchError((error: any) => of(new MakeUserCardDefaultFailureAction(error)))
      )
    )
  );
}
