import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { normalize } from 'normalizr';
import {
  PosesActionTypes,
  GetPosesListRequestAction,
  GetPosesListSuccessAction,
  GetPosesListFailureAction,
  GetPosesBySlugRequestAction,
  GetPosesBySlugSuccessAction,
  GetPosesBySlugFailureAction,
  UpdatePosesByIdSuccessAction,
  UpdatePosesByIdFailureAction,
  UpdatePosesByIdRequestAction
} from './poses.actions';

import { PosesService } from '@src/app/services/poses/poses.service';
import { posesSchema } from './poses.schema';
import { PoseInterface } from '@src/app/interfaces/poses';

@Injectable()
export class PosesEffects {
  constructor(
    protected actions$: Actions, 
    protected router: Router, 
    protected posesService: PosesService) {}

  @Effect()
  protected getTeachersList = this.actions$.pipe(
    ofType<GetPosesListRequestAction>(PosesActionTypes.GET_POSES_LIST_REQUEST),
    exhaustMap(() =>
      this.posesService.list().pipe(
        map((response: PoseInterface[]) => new GetPosesListSuccessAction(normalize(response, [posesSchema]))),
        catchError((error: any) => of(new GetPosesListFailureAction(error)))
      )
    )
  );
  // get pose by slug
  @Effect()
  protected getPosesBySlug = this.actions$.pipe(
    ofType<GetPosesBySlugRequestAction>(PosesActionTypes.GET_POSES_BY_SLUG_REQUEST),
    exhaustMap(({ payload }) =>
      this.posesService.getBySlug(payload.slug).pipe(
        map((response: PoseInterface) => new GetPosesBySlugSuccessAction(normalize(response, posesSchema))),
        catchError((error: any) => of(new GetPosesBySlugFailureAction(error)))
      )
    )
  );
}
