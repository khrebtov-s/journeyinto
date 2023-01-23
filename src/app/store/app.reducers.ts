import { InjectionToken } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { authenticationReducers } from "./modules/authentication/authentication.reducers";
import { userReducers } from "./modules/user/user.reducers";
import { posesReducers } from "./modules/poses/poses.reducers";
import { signUpReducers } from "./modules/sign-up/sign-up.reducers";
import { forgottenPasswordReducers } from "./modules/forgotten-password/forgotten-password.reducers";
import { onboardingReducers } from "./modules/onboarding/onboarding.reducers";
import { environment } from "@src/environments/environment";
import { teachersReducers } from "@src/app/store/modules/teachers/teachers.reducers";
import { studentsReducers } from "@src/app/store/modules/students/students.reducers";
import { notificationReducers } from "@src/app/store/modules/notification/notification.reducers";
import { recordingReducers } from "./modules/recording/recording.reducers";
import { audioRecordingReducers } from "./modules/audio-recording/audio-recording.reducers";
import { IAuthenticationReducerState } from "@src/app/store/modules/authentication/authentication.types";
import { ISignUpReducerState } from "@src/app/store/modules/sign-up/sign-up.types";
import { IForgottenPasswordReducerState } from "@src/app/store/modules/forgotten-password/forgotten-password.types";
import { IUserReducerState } from "@src/app/store/modules/user/user.types";
import { IOnboardingReducerState } from "@src/app/store/modules/onboarding/onboarding.types";
import { ITeachersReducerState } from "@src/app/store/modules/teachers/teachers.types";
import { INotificationReducerState } from "@src/app/store/modules/notification/notification.types";
import { IPosesReducerState } from "@src/app/store/modules/poses/poses.types";
import { IRecordingReducerState } from "./modules/recording/recording.types";
import { IAudioRecordingReducerState } from "./modules/audio-recording/audio-recording.types";
import { IStudentsReducerState } from "@src/app/store/modules/students/students.types";
import { INetworkReducerState } from "./modules/offline-detection/offline-detection.types";
import { networkReducer } from "./modules/offline-detection/offline-detection.reducers";
import { ICardsReducerState } from "@src/app/store/modules/cards/cards.types";
import { cardsReducers } from "@src/app/store/modules/cards/cards.reducers";
import { IStripeReducerState } from "./modules/stripe/stripe.types";
import { stripeReducers } from "./modules/stripe/stripe.reducers";
import { sharedReducers } from "./modules/shared/shared.reducers";
import { spinnerReducers } from "./modules/spinner/spinner.reducers";
import { NullAstVisitor } from "@angular/compiler";

export interface IAppState {
  router: RouterReducerState;
  authentication: IAuthenticationReducerState;
  signUp: ISignUpReducerState;
  forgottenPassword: IForgottenPasswordReducerState;
  users: IUserReducerState;
  onboarding: IOnboardingReducerState;
  teachers: ITeachersReducerState;
  students: IStudentsReducerState;
  cards: ICardsReducerState;
  notifications: INotificationReducerState;
  poses: IPosesReducerState;
  recordings: IRecordingReducerState;
  recording: IAudioRecordingReducerState;
  shared: null;
  spinner: null;
  network: INetworkReducerState;
  stripe: IStripeReducerState;
}

// Meta reducers
// Dev env includes storeFreeze to prevent state from being mutated
export const metaReducers: MetaReducer<any, any>[] = environment.production
  ? []
  : [];

// Application reducers
export const appReducers: ActionReducerMap<IAppState> = {
  router: routerReducer,
  authentication: authenticationReducers,
  signUp: signUpReducers,
  forgottenPassword: forgottenPasswordReducers,
  users: userReducers,
  onboarding: onboardingReducers,
  teachers: teachersReducers,
  students: studentsReducers,
  cards: cardsReducers,
  notifications: notificationReducers,
  poses: posesReducers,
  recordings: recordingReducers,
  recording: audioRecordingReducers,
  shared: sharedReducers,
  spinner: spinnerReducers,
  network: networkReducer,
  stripe: stripeReducers,
};

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<IAppState>>(
  "root reducer"
);
