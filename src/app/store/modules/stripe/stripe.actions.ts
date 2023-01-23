import { Action } from '@ngrx/store';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';

export enum StripeActionTypes {
    GET_STRIPE_DASHBOARD_LINK_REQUEST = '[get stripe dashboard link] request',
    GET_STRIPE_DASHBOARD_LINK_SUCCESS = '[get stripe dashboard link] success',
    GET_STRIPE_DASHBOARD_LINK_FAILURE = '[get stripe dashboard link] failure',
}

// get stripe dashboard by access token
export class GetStripeDashboardLinkRequestAction implements Action {
    readonly type: string = StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_REQUEST;

    constructor(public payload: any = null) { }
}

export class GetStripeDashboardLinkSuccessAction implements Action {
    readonly type: string = StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_SUCCESS;

    constructor(public payload: any) { }
}

export class GetStripeDashboardLinkFailureAction implements Action {
    readonly type: string = StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_FAILURE;

    constructor(public payload: any) { }
}
