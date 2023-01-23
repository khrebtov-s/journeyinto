import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { normalize } from 'normalizr';
import { UserService } from '@src/app/services/user/user.service';
import {
  GetCurrentUserFailureAction,
  GetCurrentUserSuccessAction,
  SwitchUserViewStatusSuccessAction,
  SwitchUserViewStatusFailureAction,
  UserActionTypes,
  UpdateCurrentUserSuccessAction,
  UpdateCurrentUserFailureAction
} from './user.actions';
import { AuthenticationActionTypes } from '../authentication/authentication.actions';
import { userSchema } from '@src/app/store/modules/user/user.schema';
import { Router } from '@angular/router';
import { RouteNames, TeacherStepOne, TeacherStepTwo } from '@src/app/route-names';
import { redirectMessage } from '@src/app/helpers';
import { ViewStatuses } from './user.types';
import { TeacherInterface, TeacherStatusInterface } from '@src/app/interfaces/teachers';
import { StudentInterface } from '@src/app/interfaces/students';
import { UtilsService } from '@src/app/services/utils.service';

@Injectable()
export class UserEffects {
  constructor(
    protected actions$: Actions, 
    protected userService: UserService,
    protected router: Router,
    protected utils: UtilsService
  ) {}

  // Get current user by jwt token
  @Effect()
  protected getCurrentUser = this.actions$.pipe(
    ofType(UserActionTypes.GET_CURRENT_USER_REQUEST, AuthenticationActionTypes.AUTHENTICATION_BASIC_SUCCESS),
    exhaustMap(() =>
      this.userService.current().pipe(
        map((response: any) => {
          return new GetCurrentUserSuccessAction(normalize(response, userSchema));
        }),
        catchError(response => of(new GetCurrentUserFailureAction(response)))
      )
    )
  );

  // @Effect({ dispatch: false })
  // protected checkToken = this.actions$.pipe(
  //   ofType(UserActionTypes.CHECK_USER, AuthenticationActionTypes.AUTHENTICATION_BASIC_SUCCESS),
  //   exhaustMap(() =>
  //   this.userService.checkToken().pipe(
  //     map((response: any) => {
        
  //       return console.info('token is valid');
  //     }),
  //     catchError(response => of(console.info('token is not valid')
  //     ))
  //   )
  //   )
  // );


  // Switch user view status - student / creator
  @Effect()
  protected switchUserViewStatus = this.actions$.pipe(
    ofType(UserActionTypes.SWITCH_USER_VIEW_STATUS_REQUEST),
    exhaustMap((payload: any) => {
      const user: TeacherStatusInterface | StudentInterface = payload.payload;

      return this.userService.switchUserViewStatus(user)
        .pipe(
          map((res: any) => {
            const isOnboardingComplete = this.userService.doUserOnboardingChecks(user, window.location.pathname);
            const isAllowedOnRoute = this.userService.doUserStatusChecks(user);

            const goTo = !isOnboardingComplete.canActivate ? isOnboardingComplete.goTo :
              !isAllowedOnRoute.canActivate ? isAllowedOnRoute.goTo :
              // false; // if the user is allowed on the route, don't go anywhere.. (...the menu doesn't close)
              ['/']; // whether the user is allowed on the current route or not, still go to the homepage (which will also close the menu)

            // this.log(goTo);

            if (goTo) {
              this.router.navigate(goTo, {
                state: {
                  data: {
                    message: !isOnboardingComplete.canActivate ? redirectMessage : ''
                  }
                }
              });
            }

            return new SwitchUserViewStatusSuccessAction({ user });
          }),
          catchError(error => of(new SwitchUserViewStatusFailureAction(error)))
        );
      }
    )
  );

  // Update current user
  @Effect()
  protected updateUser = this.actions$.pipe(
    ofType(UserActionTypes.UPDATE_CURRENT_USER_REQUEST),
    exhaustMap(({ payload }: any) => {
      return this.userService.updateCurrentUser(payload).pipe(
        map((response: any) => {
          let subjectUpdated = 'account details';
          if (payload.password) {
            subjectUpdated = 'password';
          }

          return new UpdateCurrentUserSuccessAction({...response, subjectUpdated});
        }),
        catchError(error => of(new UpdateCurrentUserFailureAction(error)))
      );
    })
  );


  private log(text, ...args) {
    this.utils.log(text, this.constructor.name, ...args);
  }
}
