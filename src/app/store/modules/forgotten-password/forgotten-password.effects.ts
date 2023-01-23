import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {
  ForgottenPasswordActionTypes,
  ForgottenPasswordResetRequestAction,
  ForgottenPasswordResetSuccessAction,
  ForgottenPasswordResetFailureAction,
  ResetPasswordRequestAction,
  ResetPasswordSuccessAction,
  ResetPasswordFailureAction
} from './forgotten-password.actions';
import { ForgottenPasswordService } from '@src/app/services/forgotten-password/forgotten-password.service';
import { RouteNames } from '@src/app/route-names';

@Injectable()
export class ForgottenPasswordEffects {
  constructor(
    protected actions$: Actions,
    protected router: Router,
    protected forgottenPasswordService: ForgottenPasswordService
  ) {}

  @Effect()
  protected reset = this.actions$.pipe(
    ofType<ForgottenPasswordResetRequestAction>(ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_REQUEST),
    exhaustMap(({ payload }) =>
      this.forgottenPasswordService.attempt(payload).pipe(
        map((response: any) => new ForgottenPasswordResetSuccessAction(response)),
        catchError(response => of(new ForgottenPasswordResetFailureAction(response)))
      )
    )
  );

  @Effect({ dispatch: false })
  protected resetSuccess: Observable<any> = this.actions$.pipe(
    ofType(ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_SUCCESS),
    tap(({ payload }) => {})
  );

  @Effect({ dispatch: false })
  protected resetFailure: Observable<any> = this.actions$.pipe(
    ofType(ForgottenPasswordActionTypes.FORGOTTEN_PASSWORD_RESET_FAILURE)
  );

  // RESET PASSWORD effects
  @Effect()
  protected resetPasswordRequest = this.actions$.pipe(
    ofType<ResetPasswordRequestAction>(ForgottenPasswordActionTypes.RESET_PASSWORD_REQUEST),
    exhaustMap(({payload}) =>
      this.forgottenPasswordService.reset(payload).pipe(
        map((response: any) => {

          this.router.navigate(['/', RouteNames.login], {
            state: {
              message: 'You\'ve reset your password! Now, login with your new credentials.'
            }
          });

          return new ResetPasswordSuccessAction(response);
        }),
        catchError((error: any) => of(new ResetPasswordFailureAction(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  protected resetPasswordSuccess: Observable<any> = this.actions$.pipe(
    ofType(ForgottenPasswordActionTypes.RESET_PASSWORD_SUCCESS)
  );

  @Effect({ dispatch: false })
  protected resetPasswordFailure: Observable<any> = this.actions$.pipe(
    ofType(ForgottenPasswordActionTypes.RESET_PASSWORD_FAILURE)
  );

}
