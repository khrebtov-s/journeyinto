import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap, first } from 'rxjs/operators';
import { of, timer } from 'rxjs';
import { normalize } from 'normalizr';
import {
  StudentsActionTypes,
  GetStudentsListRequestAction,
  GetStudentsListSuccessAction,
  GetStudentsListFailureAction,
  SubscribeToTeacherRequestAction,
  SubscribeToTeacherSuccessAction,
  SubscribeToTeacherFailureAction,
  UnsubscribeFromTeacherSuccessAction,
  UnsubscribeFromTeacherFailureAction,
  UnsubscribeFromTeacherRequestAction,
  ConnectToTeacherRequestAction,
  ConnectToTeacherSuccessAction,
  ConnectToTeacherFailureAction,
  DisconnectFromTeacherRequestAction,
  DisconnectFromTeacherSuccessAction,
  DisconnectFromTeacherFailureAction,
  PurchaseTeacherClassRequestAction,
  PurchaseTeacherClassSuccessAction,
  PurchaseTeacherClassFailureAction
} from './students.actions';

import { StudentService } from '@src/app/services/student/student.service';
import { studentsSchema } from './students.schema';
import { RouteNames } from '@src/app/route-names';
import { SpinnerOverlayService } from '@src/app/services/spinner-overlay/spinner-overlay.service';
import {UtilsService} from "@src/app/services/utils.service";

@Injectable()
export class StudentsEffects {
  constructor(
    private utils: UtilsService,
    protected actions$: Actions,
    protected router: Router,
    protected studentService: StudentService,
    protected spinnerOverlayService: SpinnerOverlayService
  ) {}

  @Effect()
  protected getTeachersList = this.actions$.pipe(
    ofType<GetStudentsListRequestAction>(StudentsActionTypes.GET_STUDENTS_LIST_REQUEST),
    exhaustMap(() =>
      this.studentService.list().pipe(
        map((response: any) => new GetStudentsListSuccessAction(normalize(response, [studentsSchema]))),
        catchError((error: any) => of(new GetStudentsListFailureAction(error)))
      )
    )
  );

  @Effect()
  protected setConnection = this.actions$.pipe(
    ofType<ConnectToTeacherRequestAction>(StudentsActionTypes.SEND_CONNECT_TO_TEACHER_REQUEST),
    exhaustMap(({ payload }) => {
      return this.studentService.setConnection(payload).pipe(
          map((response: any) => {
            // console.log('CONNECT TO TEACHER ACTION am about to go home,.....', response);
            // this.router.navigate(['/', RouteNames.student]);
              if (this.utils.suscriptionOnTeacher) {
                  this.router.navigate(['/', RouteNames.student, RouteNames.subscription]);
              }
            return new ConnectToTeacherSuccessAction(response);
          }),
          catchError((error: any) => of(new ConnectToTeacherFailureAction(error)))
        );
      }
    )
  );

  @Effect()
  protected disconnect = this.actions$.pipe(
    ofType<DisconnectFromTeacherRequestAction>(StudentsActionTypes.SEND_DISCONNECT_FROM_TEACHER_REQUEST),
    exhaustMap(({payload}) =>
      this.studentService.disconnect(payload).pipe(
        map((response: any) => new DisconnectFromTeacherSuccessAction(response)),
        catchError((error: any) => of(new DisconnectFromTeacherFailureAction(error)))
      )
    )
  );

  @Effect()
  protected setSubscription = this.actions$.pipe(
    ofType<SubscribeToTeacherRequestAction>(StudentsActionTypes.SEND_SUBSCRIBE_TO_TEACHER_REQUEST),
    exhaustMap(({ payload }) => {
      this.spinnerOverlayService.show();
      return this.studentService.setSubscription(payload).pipe(
        map((response: any) => {
          // delay for getting current request
          this.timeout(() => {
            this.spinnerOverlayService.hide();
          }, 3500);
          return new SubscribeToTeacherSuccessAction(response);
        }),
        catchError((error: any) => {
          this.spinnerOverlayService.hide();
          return of(new SubscribeToTeacherFailureAction(error));
        })
      );
    })
  );

  @Effect()
  protected unSubscription = this.actions$.pipe(
    ofType<UnsubscribeFromTeacherRequestAction>(StudentsActionTypes.SEND_UNSUBSCRIBE_FROM_TEACHER_REQUEST),
    exhaustMap(({ payload }) =>
      this.studentService.unsubscribe(payload).pipe(
        map((response: any) => new UnsubscribeFromTeacherSuccessAction(response)),
        catchError((error: any) => of(new UnsubscribeFromTeacherFailureAction(error)))
      )
    )
  );

  @Effect()
  protected purchase = this.actions$.pipe(
    ofType<PurchaseTeacherClassRequestAction>(StudentsActionTypes.PURCHASE_TEACHER_CLASS_REQUEST),
    exhaustMap(({ payload }) =>
      this.studentService.purchase(payload).pipe(
        map((response: any) => new PurchaseTeacherClassSuccessAction(response)),
        catchError((error: any) => of(new PurchaseTeacherClassFailureAction(error)))
      )
    )
  );

  /**
     * @name timeout
     * @description call function with delay time
     * @param { function } callback
     * @param { number } delay
     */
    timeout(callback, delay: number): void {
      timer(delay)
        .pipe(first())
        .subscribe(() => callback());
    }
}
