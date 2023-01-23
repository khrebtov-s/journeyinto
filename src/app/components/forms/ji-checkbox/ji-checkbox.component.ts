import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-ji-checkbox',
    templateUrl: 'ji-checkbox.component.html',
    styleUrls: ['ji-checkbox.component.scss']
})

export class JiCheckboxComponent implements OnInit {
    @Input() parentForm;
    @Input() name;
    @Input() hasError;

    constructor() { }

    ngOnInit() {
    }
}
