import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { GetPosesBySlugRequestAction } from '@src/app/store/modules/poses/poses.actions';
import { selectPoseActive, selectPosesStatus } from '@src/app/store/modules/poses/poses.selectors';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PoseInterface } from '@src/app/interfaces/poses';
import { filter } from 'rxjs/operators';
import { SpinnerOverlayService } from '@src/app/services/spinner-overlay/spinner-overlay.service';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { SetBackSharedAction } from '@src/app/store/modules/shared/shared.actions';
import { RouteNames } from '@src/app/route-names';

@Component({
  selector: 'app-poses-item',
  templateUrl: './poses-item.component.html',
  styleUrls: ['./poses-item.component.scss']
})
export class PosesItemComponent implements OnInit, OnDestroy {
  public pose$ = this.store.pipe(
    select(selectPoseActive),
    filter(pose => Boolean(pose))
  );
  public status$ = this.store.pipe(
    select(selectPosesStatus),
    filter(status => Boolean(status) && status === RequestStatus.success)
  );
  public pose: PoseInterface = null;
  public subscriptions: Subscription[] = [];
  public slug: string = this.activatedRoute.snapshot.paramMap.get('slug');
  public title = '';

  constructor(
    private store: Store<IAppState>,
    private activatedRoute: ActivatedRoute,
    public spinner: SpinnerOverlayService
  ) {}

  ngOnInit() {
    this.store.dispatch(new SetBackSharedAction(['/', RouteNames.poses]));

    // showoverlay
    this.load();

    this.subscriptions.push(
      this.status$.subscribe(() => {
        // hideoverlay
      }),
      this.pose$
        .subscribe(pose => {
          this.pose = pose;
          this.title = `Poses, ${pose.title}`;

          // console.log('hide spinner');
          this.spinner.hide();
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  load() {
    this.store.dispatch(new GetPosesBySlugRequestAction({ slug: this.slug }));
  }
}
