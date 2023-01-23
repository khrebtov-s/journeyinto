import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStripeReducerState } from './stripe.types';
import { getEntities, getErrors, getStatus } from '../../helpers/adapters';
import { denormalize } from 'normalizr';

export const selectStripeState = createFeatureSelector<IStripeReducerState>('stripe');

export const selectStripeEntities = createSelector(
    selectStripeState,
    getEntities
);


export const selectStripeStatus = createSelector(
    selectStripeState,
    getStatus
);

export const selectStripeErrors = createSelector(
    selectStripeState,
    getErrors
);

export const selectStripeMessages = createSelector(
    selectStripeState,
    (state: any) => {
        return state.message;
    }
);
