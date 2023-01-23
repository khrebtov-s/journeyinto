import { OnInit, Component, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IAppState } from "@src/app/store/app.reducers";
import { selectRecordingEntities, selectRecordingStatus } from "@src/app/store/modules/recording/recording.selectors";
import { Subscription, combineLatest } from "rxjs";
import { filter } from "rxjs/operators";
import { GetRecordingsListRequestAction, GetRecordingBySlugRequestAction } from "@src/app/store/modules/recording/recording.actions";
import { SpinnerOverlayService } from "@src/app/services";
import { ActivatedRoute, Router } from "@angular/router";
import { RouteNames } from "@src/app/route-names";
import { selectUserActive } from "@src/app/store/modules/user/user.selectors";
import { StudentInterface } from "@src/app/interfaces/students";
import { ViewStatuses } from "@src/app/store/modules/user/user.types";
import { UtilsService } from "@src/app/services/utils.service";
import { RecordingInterface } from "@src/app/interfaces/recording";

@Component({
    selector: 'app-record-view',
    templateUrl: './record-view.component.html',
    styleUrls: ['./record-view.component.scss']
})
export class RecordViewComponent implements OnInit, OnDestroy {
    public subscriptions: Subscription[] = [];
    public recordings$ = this.store.pipe(
        select(selectRecordingEntities),
        filter(Boolean),
    );
    public recording;

    public status$ = this.store.pipe(
        select(selectRecordingStatus),
        filter(Boolean)
    );
    public status;

    constructor(
        private store: Store<IAppState>,
        private spinnerOverlayService: SpinnerOverlayService,
        private activeRoute: ActivatedRoute,
        private router: Router,
        private utils: UtilsService
    ) {}

    ngOnInit() {
        

        this.subscriptions.push(
            combineLatest(
                this.activeRoute.paramMap,
                this.store.pipe(
                    select(selectUserActive),
                    filter(user => Boolean(user))
                ),
                (params, user) => ({ params, user })
            ).subscribe(pair => {
                const params: any = pair.params;
                const user: StudentInterface = pair.user;
                this.log('from recording view compoennt:', {user, params});
                if (user.view_status === ViewStatuses.STUDENT) {
                    this.router.navigate(['/']);
                }

                if (params.params.slug && user.creator && user.creator.slug) {
                    this.log('new GetRecordingBySlugRequestAction: ', {
                        body: { creatorslug: user.creator.slug, slug: params.params.slug }
                    });

                    this.store.dispatch(new GetRecordingBySlugRequestAction({
                        creatorslug: user.creator.slug,
                        slug: params.params.slug
                    }));
                }
            }),
            this.recordings$.subscribe(
                (recordings: RecordingInterface | RecordingInterface[]) => {
                    const recordingSlug = this.activeRoute.snapshot.paramMap.get('slug');
                    this.log('recordings: ', recordings);
                    if (Array.isArray(recordings)) {
                        this.recording = recordings.find(recording => {
                            return recording.slug === recordingSlug;
                        });
                    } else {
                        if (recordingSlug === recordings.slug) {
                            this.recording = recordings;
                        } else {
                            this.recording = false;
                        }
                    }

                    this.log('GOT RECORDING: ', this.recording);

                    if (!this.recording) {
                        this.router.navigate(['/', RouteNames.notFound]);
                    }
                }
            ),
            this.status$.subscribe(
                status => {
                    this.status = status;
                    if (status === 'pending') {
                        // showoverlay
                    } else {
                        // hideoverlay
                    }
                }
            )
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    log(text, ...args) {
        this.utils.log(text, this.constructor.name, ...args);
    }
}
