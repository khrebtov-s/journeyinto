import { OnInit, Input, Component } from "@angular/core";

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
    @Input() icon;
    @Input() width = 25;
    @Input() height;

    constructor() { }

    ngOnInit() { }
}