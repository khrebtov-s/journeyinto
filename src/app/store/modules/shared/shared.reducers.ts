import { ActionReducer, combineReducers } from '@ngrx/store';
import { SharedActionTypes } from '@src/app/store/modules/shared/shared.actions';
import { PosesActionTypes } from '@src/app/store/modules/poses/poses.actions';
import { OnboardingActionTypes } from '@src/app/store/modules/onboarding/onboarding.actions';
import { SignUpActionTypes } from '@src/app/store/modules/sign-up/sign-up.actions';
import { AuthenticationActionTypes } from '@src/app/store/modules/authentication/authentication.actions';
import { UtilsService } from '@src/app/services/utils.service';

const cancelUrl = (state = '', { type, payload }: any): string => {
  switch (type) {
    case SharedActionTypes.ROUTER_STORE_CANCEL:
      return payload.event.url;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return '';

    default:
      return state;
  }
};

// THIS IS THE UNIVERSAL WAY OF SETTING THE TITLE WHEREVER YOU ARE IN THE APP DYNAMICALLY
const title = (state = '', { type, payload }: any): string => {
  switch (type) {
    case PosesActionTypes.GET_POSES_BY_SLUG_SUCCESS:
      return `Poses, ${payload.entities.poses[payload.result].title}`;

    case SharedActionTypes.SET_TITLE:
      return payload;

    default:
      return state;
  }
};

// should we show a back button or not?
const goBack = (state = false, { type, payload }: any): any => {
  switch (type) {
    case SharedActionTypes.SET_BACK:
      return payload;

    case '@ngrx/router-store/navigated':
      return false;

    default:
      return state;
  }
};

// should we show a back button or not?
const canGoBack = (state = false, { type, payload }: any): any => {
  switch (type) {
    case SharedActionTypes.SET_CAN_GO_BACK:
      return payload;

    default:
      return state;
  }
};

export const sharedReducers: ActionReducer<any> = combineReducers({
  title,
  goBack,
  cancelUrl,
  canGoBack
});
