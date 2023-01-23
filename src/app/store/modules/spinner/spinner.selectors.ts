import { createFeatureSelector, createSelector } from "@ngrx/store";
export const selectSpinnerState = createFeatureSelector<any>("spinner");

export const selectText = createSelector(
  selectSpinnerState,
  (state: any) => {
    return state.spinnerState;
  }
);
