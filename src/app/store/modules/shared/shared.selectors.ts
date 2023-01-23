import { createFeatureSelector, createSelector } from '@ngrx/store';
export const selectSharedState = createFeatureSelector<any>('shared');

export const selectTitle = createSelector(
  selectSharedState,
  (state: any) => {
    return state.title;
  }
);
export const selectBack = createSelector(
  selectSharedState,
  (state: any) => {
    return state.goBack;
  }
);
export const selectCanGoBack = createSelector(
  selectSharedState,
  (state: any) => {
    return state.canGoBack;
  }
);

export const selectCancelUrl = createSelector(
  selectSharedState,
  (state: any) => state.cancelUrl
);
