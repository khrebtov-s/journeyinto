import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectTeachersObject } from '@src/app/store/modules/teachers/teachers.selectors';
import { filter } from 'rxjs/operators';
import { TeacherInterface } from '@src/app/interfaces/teachers';
import { RecordingInterface } from '@src/app/interfaces/recording';
import { RouteNames } from '@src/app/route-names';
import { Router } from '@angular/router';
import { SpinnerOverlayService } from '../../../../services';
import { IAppState } from '@src/app/store/app.reducers';

@Component({
    selector: 'app-public-recordings',
    templateUrl: './public-recordings.component.html',
    styleUrls: ['./public-recordings.component.scss']
})
export class PublicRecordingsComponent implements OnInit, OnDestroy {
    public subscriptions: Subscription[] = [];

    public teacher$: Observable<any> = this.store.pipe(
        select(selectTeachersObject),
        filter(Boolean)
    );
    public teacher: TeacherInterface;
    public recordings: RecordingInterface[];

    constructor(
        private store: Store<IAppState>,
        private router: Router,
        private spinnerOverlay: SpinnerOverlayService
    ) {
        // showoverlay
    }

    ngOnInit() {
        // when someone lands on this page, direct them to the teacher profile instead!
        this.subscriptions.push(
            this.teacher$.subscribe(
                (obj) => {
                    const teacher = obj.currentTeacher;
                    if (teacher) {
                        this.router.navigate(['/', RouteNames.teachers, teacher.slug]);
                    }
                }
            )
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

}
