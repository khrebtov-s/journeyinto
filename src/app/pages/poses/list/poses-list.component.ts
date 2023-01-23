import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { GetPosesListRequestAction } from '@src/app/store/modules/poses/poses.actions';
import { selectPoses, selectPosesStatus } from '@src/app/store/modules/poses/poses.selectors';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/operators';
import { PoseInterface } from '@src/app/interfaces/poses';
import { SpinnerOverlayService } from '@src/app/services/spinner-overlay/spinner-overlay.service';
import { RequestStatus } from '@src/app/services/api.service.interface';

@Component({
  selector: 'app-poses-list',
  templateUrl: './poses-list.component.html',
  styleUrls: ['./poses-list.component.scss']
})
export class PosesListComponent implements OnInit, OnDestroy {
  public poses$ = this.store.pipe(
    select(selectPoses),
    filter(poses => Boolean(poses) && Array.isArray(poses))
  );
  public status$ = this.store.pipe(
    select(selectPosesStatus),
    filter(status => Boolean(status) && status === RequestStatus.success)
  );
  public poses: PoseInterface[] = [];
  public subscriptions: Subscription[] = [];

  constructor(
    private store: Store<IAppState>,
    public spinner: SpinnerOverlayService
  ) {}

  ngOnInit() {
    // showoverlay
    this.load();

    this.subscriptions.push(
      this.poses$.subscribe(poses => {
        this.poses = poses;

        // hideoverlay
        // console.log('hide spinner');
        this.spinner.hide();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  load() {
    this.store.dispatch(new GetPosesListRequestAction());
  }
}
