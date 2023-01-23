import { ActionReducer, combineReducers } from "@ngrx/store";
import { SpinnerActionTypes } from "@src/app/store/modules/spinner/spinner.actions";

const initialState_spinnerState = {
  textAboutClass: false,
};
const spinnerState = (
  state = initialState_spinnerState,
  { type }: any
): any => {
  switch (type) {
    case SpinnerActionTypes.SET_ADD_CLASS_TEXT:
      return {
        ...state,
        textAboutClass: true,
      };

    case SpinnerActionTypes.SET_ADD_CLASS_TEXT_END:
      return {
        ...state,
        textAboutClass: false,
      };

    default:
      return state;
  }
};

export const spinnerReducers: ActionReducer<any> = combineReducers({
  spinnerState,
});
