import { ActionReducer, combineReducers } from '@ngrx/store';
import { StripeActionTypes } from './stripe.actions';
import {
    IStripeReducerState,
    TStripeActionsUnion,
    TStripeStatusReducer,
    TStripeEntitiesReducer,
    TStripeErrorsReducer,
    TStripeMessageReducer
} from './stripe.types';
import { RequestStatus } from '@src/app/services/api.service.interface';

const initialState_status: TStripeStatusReducer = null;
const status = (state = initialState_status, { type }: TStripeActionsUnion): TStripeStatusReducer => {
    switch (type) {
        case StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_REQUEST:
            return RequestStatus.pending;

        case StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_SUCCESS:
            return RequestStatus.success;

        case StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_FAILURE:
            return RequestStatus.failure;

        default:
            return state;
    }
};

const initialState_entities: TStripeEntitiesReducer = {};
const entities = (state = initialState_entities, { type, payload }: TStripeActionsUnion): TStripeEntitiesReducer => {
    switch (type) {
        case StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_REQUEST:
            return initialState_entities;

        case StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_SUCCESS:
            // console.log({payload});
            return initialState_entities;

        case StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_FAILURE:
            return initialState_entities;

        default:
            return state;
    }
};

const initialState_errors: TStripeErrorsReducer = null;
const errors = (state = initialState_errors, { type, payload }: TStripeActionsUnion): TStripeErrorsReducer => {
    switch (type) {
        case StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_REQUEST:
            return initialState_errors;

        case StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_SUCCESS:
            return initialState_errors;

        case StripeActionTypes.GET_STRIPE_DASHBOARD_LINK_FAILURE:
            return payload.message;

        default:
            return state;
    }
};

const initialState_message: TStripeMessageReducer = null;
const message = (state = initialState_message, { type, payload }: TStripeActionsUnion): TStripeMessageReducer => {
    switch (type) {
        default:
            return state;
    }
};

export const stripeReducers: ActionReducer<IStripeReducerState> = combineReducers({
    status,
    entities,
    errors,
    message
});
