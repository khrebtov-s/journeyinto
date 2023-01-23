import { Observable, merge, of, fromEvent } from 'rxjs';
import { switchMap, mapTo, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { SetIsOnlineAction, NetworkActionTypes } from './offline-detection.actions';

@Injectable()
export class NetworkEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  startOnlineOfflineCheck$: Observable<Action> = this.actions$.pipe(
    ofType(NetworkActionTypes.START_ONLINE_OFFLINE_CHECK),
    switchMap(() => {
      return merge(
        of(navigator.onLine),
        fromEvent(window, 'online').pipe(mapTo(true)),
        fromEvent(window, 'offline').pipe(mapTo(false))
      );
    }),
    map(isOnline => {
      return new SetIsOnlineAction(isOnline);
    })
  );
}
