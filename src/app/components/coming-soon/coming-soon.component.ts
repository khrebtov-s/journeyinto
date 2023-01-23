import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SpinnerOverlayService } from '../../services';

@Component({
    selector: 'app-coming-soon',
    templateUrl: './coming-soon.component.html',
    styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
    constructor(
        private spinner: SpinnerOverlayService
    ) {
        this.spinner.hide();
    }
}
