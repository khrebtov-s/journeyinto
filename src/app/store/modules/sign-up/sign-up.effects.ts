import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SignUpRequestAction, SignUpSuccessAction, SignUpFailureAction, SignUpActionTypes } from './sign-up.actions';
import { SignUpService } from '@src/app/services/sign-up/sign-up.service';
import { AuthorizationService } from '@src/app/services/authorization/authorization.service';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { RouteNames, TeacherStepOne } from '@src/app/route-names';
import {Store} from "@ngrx/store";
import {IAppState} from "@src/app/store/app.reducers";
import {ConnectToTeacherRequestAction} from "@src/app/store/modules/students/students.actions";
import {UtilsService} from "@src/app/services/utils.service";

@Injectable()
export class SignUpEffects {
  constructor(
    private store: Store<IAppState>,
    private utils: UtilsService,
    protected actions$: Actions,
    protected router: Router,
    protected signUpService: SignUpService,
    protected authorizationService: AuthorizationService
  ) {}

  @Effect()
  protected attempt = this.actions$.pipe(
    ofType<SignUpRequestAction>(SignUpActionTypes.SIGN_UP_REQUEST),
    exhaustMap(({ payload }) =>
      this.signUpService.attempt(payload).pipe(
        map((response: any) => {
          const { token, user } = response;

          this.authorizationService.setAccessToken(token.access);
          this.authorizationService.setRefreshToken(token.refresh);

          if (user.view_status === ViewStatuses.TEACHER) {
            this.router.navigate(TeacherStepOne);
          } else {
            if (response.user.creators === null) { response.user.creators = []; } // need fix creators field on server
              const slug = history.state.teacher ? history.state.teacher.slug : null;
              if (history.state.teacher && !this.utils.suscriptionOnTeacher) {
                this.store.dispatch(new ConnectToTeacherRequestAction({ slug }));
                this.router.navigate(['/', RouteNames.student, RouteNames.myPractice]);
                } else {
                  this.store.dispatch(new ConnectToTeacherRequestAction({ slug }));
                }
                if (!history.state.teacher) {
                  this.router.navigate(['/', RouteNames.onboarding, RouteNames.student]);
                }
          }

          return new SignUpSuccessAction(response);
        }),
        catchError(response => of(new SignUpFailureAction(response)))
      )
    )
  );
}
