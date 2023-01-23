import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-footer-icon',
    templateUrl: 'footer-icon.component.html',
    styleUrls: ['footer-icon.component.scss']
})

export class FooterIconComponent implements OnInit {
    @Input() icon;
    @Input() classes;

    constructor() { }

    ngOnInit() { }
}