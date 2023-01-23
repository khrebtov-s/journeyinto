import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { normalize } from 'normalizr';
import { StripeService } from '../../../services/stripe/stripe.service';
import {
    GetStripeDashboardLinkRequestAction,
    StripeActionTypes,
    GetStripeDashboardLinkSuccessAction,
    GetStripeDashboardLinkFailureAction
} from './stripe.actions';
import { Router } from '@angular/router';
import { UtilsService } from '@src/app/services/utils.service';

@Injectable()
export class StripeEffects {
    constructor(
        protected actions$: Actions,
        protected stripeService: StripeService,
        protected router: Router,
        protected utilsService: UtilsService
    ) {
    }

    // Get recordings list
    @Effect()
    protected getStripeDashboardLinkRequest = this.actions$.pipe(
        ofType<GetStripeDashboardLinkRequestAction>(StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_REQUEST),
        exhaustMap(({payload}) => {
            return this.stripeService.getDashboardLink().pipe(
                map((response) => {
                    return new GetStripeDashboardLinkSuccessAction(response);
                }),
                catchError((error: any) => of(new GetStripeDashboardLinkFailureAction(error)))
            )
        })
    );

    @Effect({ dispatch: false })
    protected getStripeDashboardLinkSuccess: Observable<any> = this.actions$.pipe(
        ofType(StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_SUCCESS),
        tap(({ payload }) => {
            // console.log(payload.url);
            if (this.utilsService.isIos()) {
                document.location.href = payload.url;
            } else {
                window.open(payload.url, '_blank');
            }
        })
    );

    // @Effect({ dispatch: false })
    // protected getStripeDashboardLinkFailure: Observable<any> = this.actions$.pipe(
    //     ofType(StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_FAILURE)
    // );
}
