import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
  AuthenticationActionTypes,
  AuthenticationBasicRequestAction,
  AuthenticationBasicSuccessAction,
  AuthenticationBasicFailureAction,
  LogoutRequestAction,
  LogoutSuccessAction,
  LogoutFailureAction
} from './authentication.actions';
import { AuthenticationService } from '@src/app/services/authentication/authentication.service';
import { AuthorizationService } from '@src/app/services/authorization/authorization.service';

@Injectable()
export class AuthenticationEffects {
  constructor(
    protected actions$: Actions,
    protected router: Router,
    protected authenticationService: AuthenticationService,
    protected authorizationService: AuthorizationService
  ) {}

  @Effect()
  protected basic = this.actions$.pipe(
    ofType<AuthenticationBasicRequestAction>(AuthenticationActionTypes.AUTHENTICATION_BASIC_REQUEST),
    exhaustMap(({ payload }) => {
      return this.authenticationService.attemptBasic(payload).pipe(
        map((response: any) => {
          const { access, refresh } = response;
          this.authorizationService.setAccessToken(access);
          this.authorizationService.setRefreshToken(refresh);
          this.router.navigate(['/']);
          
          return new AuthenticationBasicSuccessAction(response);
        }),
        catchError(response => {
          return of(new AuthenticationBasicFailureAction(response));
        })
      );
    })
  );

  @Effect()
  protected logout = this.actions$.pipe(
    ofType<LogoutRequestAction>(AuthenticationActionTypes.LOGOUT_REQUEST),
    map(payload => new LogoutSuccessAction(payload)),
    catchError(payload => of(new LogoutFailureAction(payload)))
  );

  @Effect({ dispatch: false })
  protected logoutSuccess: Observable<any> = this.actions$.pipe(
    ofType(AuthenticationActionTypes.LOGOUT_SUCCESS),
    map(() => {
      // Remove access and refresh tokens from local storage
      this.authorizationService.destroyAccessToken();
      this.authorizationService.destroyRefreshToken();

      // Navigate to main page
     this.router.navigate(['/']);
    })
  );
}
