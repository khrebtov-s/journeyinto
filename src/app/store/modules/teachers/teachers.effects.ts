import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {normalize} from 'normalizr';
import {Store} from '@ngrx/store';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {
    TeachersActionTypes,
    GetTeachersListRequestAction,
    GetTeachersListSuccessAction,
    GetTeachersListFailureAction,
    GetTeacherBySlugRequestAction,
    GetTeacherBySlugSuccessAction,
    GetTeacherBySlugFailureAction,
    UpdateTeacherSuccessAction,
    UpdateTeacherFailureAction,
    UpdateTeacherRequestAction,
    AddClassRequestAction,
    AddClassSuccessAction,
    AddClassFailureAction,
    AddClassRequestProgressAction,
    AddClassSuccessEnd,
    GetStudentsListByTeacherRequestAction,
    GetStudentsListByTeacherSuccessAction,
    GetStudentsListByTeacherFailureAction,
    GetCurrentTeacherRequestAction,
    GetCurrentTeacherSuccessAction,
    GetCurrentTeacherFailureAction,
} from './teachers.actions';

import {TeacherService} from '@src/app/services/teacher/teacher.service';
import {teachersSchema} from './teachers.schema';
import {studentsSchema} from '@src/app/store/modules/students/students.schema';
import {RouteNames} from '@src/app/route-names';
import {IAppState} from '@src/app/store/app.reducers';

@Injectable()
export class TeachersEffects {
    constructor(
        protected actions$: Actions,
        protected router: Router,
        protected teacherService: TeacherService,
        private store: Store<IAppState>
    ) {
    }

    @Effect()
    protected getTeachersList = this.actions$.pipe(
        ofType<GetTeachersListRequestAction>(
            TeachersActionTypes.GET_TEACHERS_LIST_REQUEST
        ),
        exhaustMap(() =>
            this.teacherService.list().pipe(
                map((response: any) => {
                    return new GetTeachersListSuccessAction(
                        normalize(response, [teachersSchema])
                    );
                }),
                catchError((error: any) => of(new GetTeachersListFailureAction(error)))
            )
        )
    );

    // Get current teacher
    @Effect()
    protected getCurrentTeacher = this.actions$.pipe(
        ofType<GetCurrentTeacherRequestAction>(
            TeachersActionTypes.GET_CURRENT_TEACHER_REQUEST
        ),
        exhaustMap(() =>
            this.teacherService.getCurrentTeacher().pipe(
                map(
                    (response: any) =>
                        new GetCurrentTeacherSuccessAction(
                            normalize([response], [teachersSchema])
                        )
                ),
                catchError((error: any) =>
                    of(new GetCurrentTeacherFailureAction(error))
                )
            )
        )
    );

    // Get teachers by slug
    @Effect()
    protected getTeachersById = this.actions$.pipe(
        ofType<GetTeacherBySlugRequestAction>(
            TeachersActionTypes.GET_TEACHER_BY_SLUG_REQUEST
        ),
        exhaustMap(({payload: {slug, isLoggedin}}: any) =>
            this.teacherService.getBySlug(slug).pipe(
                map((response: any) => {
                    return new GetTeacherBySlugSuccessAction({
                        response,
                        isLoggedin,
                    });
                }),
                catchError((error: any) => of(new GetTeacherBySlugFailureAction(error)))
            )
        )
    );

    // Update teachers by slug
    @Effect()
    protected updateById = this.actions$.pipe(
        ofType<UpdateTeacherRequestAction>(
            TeachersActionTypes.UPDATE_TEACHER_BY_SLUG_REQUEST
        ),
        exhaustMap(({payload}: any) =>
            this.teacherService.update(payload).pipe(
                map((response: any) => {
                    return new UpdateTeacherSuccessAction({response});
                }),
                catchError((error) => {
                    if (error.error.includes('https://connect.stripe.com')) {
                        window.location.href = error.error;
                    }
                    return of(new UpdateTeacherFailureAction(error));
                })
            )
        )
    );

    // Add class
    // @Effect()
    // protected addClass = this.actions$.pipe(
    //     ofType<AddClassRequestAction>(
    //         TeachersActionTypes.ADD_TEACHER_CLASS_REQUEST
    //     ),
    //     exhaustMap(async ({payload}: any) =>
    //         this.teacherService.addClass(payload)
    //             .pipe(
    //                 map((response: any) => {
    //                     return new AddClassSuccessAction({response});
    //                 }),
    //                 catchError((error) => {
    //                     return of(new AddClassFailureAction(error));
    //                 })
    //             )
    //             .subscribe((ev) => {
    //                 if (ev.payload.response.loaded) {
    //                     this.store.dispatch(new AddClassRequestProgressAction(Math.round((100 * ev.payload.response.loaded) / ev.payload.response.total)));
                  
    //                 } else if (ev.payload.response instanceof HttpResponse) {
    //                     this.store.dispatch(new AddClassSuccessAction('success'));
    //                 }
    //             })
    //     )
    // );

    // Add class
    @Effect()
    protected addViedeoToClass = this.actions$.pipe(
        ofType<AddClassRequestAction>(
            TeachersActionTypes.ADD_VIDEO_TO_CLASS_REQUEST
        ),
        exhaustMap((payload: any) =>
            this.teacherService.addViedeoToClass(payload).pipe(
                map((response: any) => {
                    console.log(response);
                }),
                catchError((error) => {
                    //  if (error.error.includes("https://connect.stripe.com")) {
                    //    window.location.href = error.error;
                    //  }
                    return of(console.log('123'));
                })
            )
        )
    );

    @Effect({dispatch: false})
    protected AddClassSuccessEnd: Observable<any> = this.actions$.pipe(
        ofType(TeachersActionTypes.ADD_TEACHER_CLASS_END_GETTING)
    );

    // Get students list by teacher
    @Effect()
    protected getStudentsListByTeacher = this.actions$.pipe(
        ofType<GetStudentsListByTeacherRequestAction>(
            TeachersActionTypes.GET_STUDENTS_LIST_BY_TEACHER_REQUEST
        ),
        exhaustMap(() =>
            this.teacherService.getStudentsListByTeacher().pipe(
                map((response: any) => {
                    return new GetStudentsListByTeacherSuccessAction(response);
                }),
                catchError((error) =>
                    of(new GetStudentsListByTeacherFailureAction(error))
                )
            )
        )
    );
}
