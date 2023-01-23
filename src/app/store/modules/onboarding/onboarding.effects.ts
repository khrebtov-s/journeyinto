import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {
  OnboardingActionTypes,
  OnboardingStudentStepOneRequestAction,
  OnboardingStudentStepOneSuccessAction,
  OnboardingStudentStepOneFailureAction,
  OnboardingTeacherStepOneRequestAction,
  OnboardingTeacherStepOneSuccessAction,
  OnboardingTeacherStepOneFailureAction,
  OnboardingTeacherStepTwoSuccessAction,
  OnboardingTeacherStepTwoFailureAction
} from './onboarding.actions';
import { OnboardingService } from '../../../services/onboarding/onboarding.service';
import { RouteNames, TeacherStepOne, TeacherStepTwo } from '@src/app/route-names';
import { TeacherService } from '@src/app/services';

@Injectable()
export class OnboardingEffects {
  constructor(
    protected actions$: Actions, 
    protected router: Router, 
    protected onboardingService: OnboardingService,
    protected teacherService: TeacherService) {}

  // Student onboarding, store step one
  @Effect()
  protected studentStepOne = this.actions$.pipe(
    ofType<OnboardingStudentStepOneRequestAction>(OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_REQUEST),
    exhaustMap(({ payload }) =>
      this.onboardingService.studentStepOne(payload).pipe(
        map((response: any) => {
          return new OnboardingStudentStepOneSuccessAction(response);
        }),
        catchError((error: any) => of(new OnboardingStudentStepOneFailureAction(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  protected studentStepOneSuccess: Observable<any> = this.actions$.pipe(
    ofType(OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_SUCCESS)
  );

  @Effect({ dispatch: false })
  protected studentStepOneFailure: Observable<any> = this.actions$.pipe(
    ofType(OnboardingActionTypes.ONBOARDING_STUDENT_STEP_ONE_FAILURE)
  );

  // Teacher onboarding, store step one
  @Effect()
  protected teacherStepOne = this.actions$.pipe(
    ofType<OnboardingTeacherStepOneRequestAction>(OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_REQUEST),
    exhaustMap(({ payload }) =>{
      return this.onboardingService.teacherStepOne(payload).pipe(
        map((response: any) => {
          return new OnboardingTeacherStepOneSuccessAction(response);
        }),
        catchError((error: any) => of(new OnboardingTeacherStepOneFailureAction(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  protected teacherStepOneSuccess: Observable<any> = this.actions$.pipe(
    ofType(OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_SUCCESS),
    tap(({payload}) => {
      // // Navigate to the stripe URL
      // if (payload && payload.stripe_link) {
      //   console.log('go to step two');
      //   // window.location.href = payload.stripe_link;
      //   this.router.navigate(TeacherStepTwo);
      // }
    })
  );

  @Effect({ dispatch: false })
  protected teacherStepOneFailure: Observable<any> = this.actions$.pipe(
    ofType(OnboardingActionTypes.ONBOARDING_TEACHER_STEP_ONE_FAILURE)
  );

  // Teacher onboarding, store step two
  @Effect()
  protected teacherStepTwo = this.actions$.pipe(
    ofType<OnboardingTeacherStepOneRequestAction>(OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_REQUEST),
    exhaustMap(({ payload }) => 
      this.onboardingService.teacherStepTwo(payload).pipe(
        map((response: any) => new OnboardingTeacherStepTwoSuccessAction(response)),
        catchError((error: any) => of(new OnboardingTeacherStepTwoFailureAction(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  protected teacherStepTwoSuccess: Observable<any> = this.actions$.pipe(
    ofType(OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_SUCCESS),
    tap(({payload}) => {
      // console.log('stap two success!', payload);
    })
  );

  @Effect({ dispatch: false })
  protected teacherStepTwoFailure: Observable<any> = this.actions$.pipe(
    ofType(OnboardingActionTypes.ONBOARDING_TEACHER_STEP_TWO_FAILURE)
  );
}
