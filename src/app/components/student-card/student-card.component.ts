import { OnInit, Input, Component, Output, EventEmitter } from '@angular/core';
import { RouteNames } from '@src/app/route-names';

@Component({
    selector: 'app-student-card',
    templateUrl: './student-card.component.html',
    styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
    @Input() student:any = '';
    @Input() ctaText = '';
    @Output() studentCtaClicked = new EventEmitter<void>();

    public routeNames = RouteNames;

    constructor() {}

    ngOnInit() {}

    handleClick() {
        this.studentCtaClicked.emit();
    }
}
