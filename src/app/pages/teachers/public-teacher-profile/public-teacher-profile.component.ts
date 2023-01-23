import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GetTeacherBySlugRequestAction, TeachersSetActiveAction } from '@src/app/store/modules/teachers/teachers.actions';
import { IAppState } from '@src/app/store/app.reducers';
import { selectTeachersEntities, selectTeachersObject } from '@src/app/store/modules/teachers/teachers.selectors';
import { filter } from 'rxjs/operators';
import { TeacherInterface } from '@src/app/interfaces/teachers';
import { GetCurrentUserRequestAction } from '@src/app/store/modules/user/user.actions';
import { SetBackSharedAction } from '@src/app/store/modules/shared/shared.actions';
import { RouteNames } from '@src/app/route-names';
import { UtilsService } from '@src/app/services/utils.service';
import { SpinnerOverlayService } from '@src/app/services/spinner-overlay/spinner-overlay.service';
import { UserService } from '@src/app/services/user/user.service';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';

@Component({
    selector: 'app-public-teacher-profile',
    templateUrl: './public-teacher-profile.component.html',
    styleUrls: ['./public-teacher-profile.component.scss']
})
export class PublicTeacherProfileComponent implements OnInit, OnDestroy {
    public subscriptions: Subscription[] = [];

    // public teacher$: Observable<any> = this.store.pipe(
    //     select(selectTeachersObject),
    //     filter(teacher => !!teacher && Object.keys(teacher).length > 0)
    // );
    public teacher: TeacherInterface;

    private teacherSlug;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<IAppState>,
        private utils: UtilsService,
        private userService: UserService,
        private spinner: SpinnerOverlayService
    ) {
        // showoverlay
    }

    ngOnInit() {
        this.subscriptions.push(
            // get teacher by slug
            this.route.params.subscribe(
                params => {
                    if (params.name) {
                        this.teacherSlug = params.name;
                        this.store.dispatch(new GetTeacherBySlugRequestAction({slug: params.name}));
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            ),
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    log(text, ...args) {
        this.utils.logall(text, this.constructor.name, args);
    }

}
