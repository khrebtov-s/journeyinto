import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { RecordingService } from "@src/app/services/recording/recording.service";
import { AudioRecordingService } from "@src/app/services/audio/audio-recording.service";
import {
  exhaustMap,
  map,
  catchError,
  tap,
  withLatestFrom,
  concatMap,
  mergeMap,
} from "rxjs/operators";
import { Observable, of, EMPTY } from "rxjs";
import {
  RecordingsActionTypes,
  GetRecordingsListRequestAction,
  GetRecordingsListSuccessAction,
  GetRecordingsListFailureAction,
  GetRecordingBySlugRequestAction,
  GetRecordingBySlugSuccessAction,
  GetRecordingBySlugFailureAction,
  GetRecordingsForCurrentUserRequestAction,
  GetRecordingsForCurrentUserSuccessAction,
  GetRecordingsForCurrentUserFailureAction,
  UpdateRecordingSuccessAction,
  UpdateRecordingFailureAction,
  UpdateRecordingPosesSuccessAction,
  UpdateRecordingPosesFailureAction,
  DeleteRecordingSuccessAction,
  DeleteRecordingFailureAction,
  UpdateRecordingRequestAction,
  UpdateRecordingPosesRequestAction,
  DeleteRecordingRequestAction,
  ChangeRecordingStatusRequestAction,
  ChangeRecordingStatusSuccessAction,
  ChangeRecordingStatusFailureAction,
} from "./recording.actions";
import { selectRecordingState } from "./recording.selectors";
import { Store, select } from "@ngrx/store";
import { IAppState } from "@src/app/store/app.reducers";
import { Action } from "rxjs/internal/scheduler/Action";

@Injectable()
export class RecordingEffects {
  public recording$ = this.store.pipe(select(selectRecordingState));

  constructor(
    protected actions$: Actions,
    protected router: Router,
    protected recordingService: RecordingService,
    protected audioRecordingService: AudioRecordingService,
    protected store: Store<IAppState>
  ) {}

  // Get recordings list
  @Effect()
  protected getRecordingsListRequest = this.actions$.pipe(
    ofType<GetRecordingsListRequestAction>(
      RecordingsActionTypes.GET_RECORDINGS_LIST_REQUEST
    ),
    exhaustMap(() =>
      this.recordingService.list().pipe(
        map((response: any) => new GetRecordingsListSuccessAction(response)),
        catchError((error: any) =>
          of(new GetRecordingsListFailureAction(error))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  protected getRecordingsListSuccess: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.GET_RECORDINGS_LIST_SUCCESS)
  );

  @Effect({ dispatch: false })
  protected getRecordingsListFailure: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.GET_RECORDINGS_LIST_FAILURE)
  );

  // Get recordings for current user
  @Effect()
  protected getRecordingsForCurrentUserRequest = this.actions$.pipe(
    ofType<GetRecordingsForCurrentUserRequestAction>(
      RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_REQUEST
    ),
    exhaustMap(() =>
      this.recordingService.getRecordingsForCurrentUser().pipe(
        tap((res) => {
          // console.log('GetRecordingsForCurrentUserRequestAction', res);
        }),
        map(
          (response: any) =>
            new GetRecordingsForCurrentUserSuccessAction(response)
        ),
        catchError((error: any) =>
          of(new GetRecordingsForCurrentUserFailureAction(error))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  protected getRecordingsForCurrentUserSuccess: Observable<
    any
  > = this.actions$.pipe(
    ofType(RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_SUCCESS)
  );

  @Effect({ dispatch: false })
  protected getRecordingsForCurrentUserFailure: Observable<
    any
  > = this.actions$.pipe(
    ofType(RecordingsActionTypes.GET_RECORDINGS_FOR_CURRENT_USER_FAILURE)
  );

  // Get recording by slug
  @Effect()
  protected getRecordingBySlugRequest = this.actions$.pipe(
    ofType<GetRecordingBySlugRequestAction>(
      RecordingsActionTypes.GET_RECORDING_BY_SLUG_REQUEST
    ),
    exhaustMap(({ payload: body }: any) =>
      this.recordingService.getRecordingBySlug(body).pipe(
        map((response: any) => new GetRecordingBySlugSuccessAction(response)),
        catchError((error: any) =>
          of(new GetRecordingBySlugFailureAction(error))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  protected getRecordingBySlugSuccess: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.GET_RECORDING_BY_SLUG_SUCCESS)
  );

  @Effect({ dispatch: false })
  protected getRecordingBySlugFailure: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.GET_RECORDING_BY_SLUG_FAILURE)
  );

  // Update recording
  @Effect()
  protected updateRecordingRequest = this.actions$.pipe(
    ofType<UpdateRecordingRequestAction>(
      RecordingsActionTypes.UPDATE_RECORDING_REQUEST
    ),
    exhaustMap(({ payload: { id, body } }: any) =>
      this.recordingService.updateRecording(id, body).pipe(
        map((response: any) => new UpdateRecordingSuccessAction(response)),
        catchError((error) => of(new UpdateRecordingFailureAction(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  protected updateRecordingSuccess: Observable<any> = this.actions$.pipe(
    ofType<UpdateRecordingSuccessAction>(
      RecordingsActionTypes.UPDATE_RECORDING_SUCCESS
    ),
    tap(() => {
      // console.log('updateRecordingSuccess');
    })
  );

  @Effect({ dispatch: false })
  protected updateRecordingFailure: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.UPDATE_RECORDING_FAILURE),
    tap(() => {})
  );

  // Update recording with poses
  @Effect()
  protected updateRecordingPosesRequest = this.actions$.pipe(
    ofType<UpdateRecordingPosesRequestAction>(
      RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_REQUEST
    ),
    exhaustMap(({ payload: { id, poses } }: any) =>
      this.recordingService.updateRecordingPoses(id, poses).pipe(
        map((response: any) => new UpdateRecordingPosesSuccessAction(response)),
        catchError((error) => of(new UpdateRecordingPosesFailureAction(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  protected updateRecordingPosesSuccess: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_SUCCESS),
    tap(() => {})
  );

  @Effect({ dispatch: false })
  protected updateRecordingPosesFailure: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.UPDATE_RECORDING_WITH_POSES_FAILURE),
    tap(() => {})
  );

  // Delete recording
  @Effect()
  protected deleteRecordingRequest = this.actions$.pipe(
    ofType<DeleteRecordingRequestAction>(
      RecordingsActionTypes.DELETE_RECORDING_REQUEST
    ),
    exhaustMap(({ payload }: any) => {
      return this.recordingService.deleteRecording(payload).pipe(
        map((response: any) => new DeleteRecordingSuccessAction(response)),
        catchError((error) => of(new DeleteRecordingFailureAction(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  protected deleteRecordingSuccess: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.DELETE_RECORDING_SUCCESS),
    tap(() => {})
  );

  @Effect({ dispatch: false })
  protected deleteRecordingFailure: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.DELETE_RECORDING_FAILURE),
    tap(() => {})
  );

  // Change recording status
  @Effect()
  protected changeRecordingStatusRequest = this.actions$.pipe(
    ofType<ChangeRecordingStatusRequestAction>(
      RecordingsActionTypes.CHANGE_RECORDING_STATUS_REQUEST
    ),
    exhaustMap(({ payload }: any) => {
      return this.recordingService.changeRecordingStatus(payload).pipe(
        map(
          (response: any) => new ChangeRecordingStatusSuccessAction(response)
        ),
        catchError((error) => of(new ChangeRecordingStatusFailureAction(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  protected changeRecordingStatusSuccess: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.CHANGE_RECORDING_STATUS_SUCCESS),
    tap(() => {})
  );

  @Effect({ dispatch: false })
  protected changeRecordingStatusFailure: Observable<any> = this.actions$.pipe(
    ofType(RecordingsActionTypes.CHANGE_RECORDING_STATUS_FAILURE),
    tap(() => {})
  );
}
