import {
    GetStripeDashboardLinkRequestAction,
    GetStripeDashboardLinkSuccessAction,
    GetStripeDashboardLinkFailureAction,
} from './stripe.actions';

// Actions
export type TGetStripeDashboardLinkActionsUnion =
    | GetStripeDashboardLinkRequestAction
    | GetStripeDashboardLinkSuccessAction
    | GetStripeDashboardLinkFailureAction;

export type TStripeActionsUnion =
    | TGetStripeDashboardLinkActionsUnion;

// Reducers
export type TStripeStatusReducer = null | string;
export type TStripeEntitiesReducer = {};
export type TStripeMessageReducer = any;
export type TStripeErrorsReducer = any;

export interface IStripeReducerState {
    status: TStripeStatusReducer;
    entities: TStripeEntitiesReducer;
    errors: TStripeErrorsReducer;
    message: TStripeMessageReducer;
}
