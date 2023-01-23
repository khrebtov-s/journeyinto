import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-form-header',
    templateUrl: './form-header.component.html',
    styleUrls: ['./form-header.component.scss']
})
export class FormHeaderComponent {
    @Input() title = '';
    @Input() canGoBack = false;
    @Input() backTo;

    constructor(
        private location: Location
    ) {}

    goBack() {
        this.location.back();
    }
}
