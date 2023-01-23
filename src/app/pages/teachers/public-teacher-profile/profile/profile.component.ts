import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { SetBackSharedAction } from '@src/app/store/modules/shared/shared.actions';
import { RouteNames } from '@src/app/route-names';
import { UtilsService } from '@src/app/services/utils.service';
import { SpinnerOverlayService } from '../../../../services';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public prevUrl = ['/', RouteNames.teachers];

    constructor(
        private store: Store<IAppState>,
        private utils: UtilsService,
        private spinner: SpinnerOverlayService
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new SetBackSharedAction(this.prevUrl));
    }

    log(text, ...args) {
        this.utils.logall(text, this.constructor.name, ...args);
    }
}
