import { OnInit, Input, Component, OnDestroy } from "@angular/core";
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    animations: [
        fadeInOnEnterAnimation(),
        fadeOutOnLeaveAnimation()
    ]
})
export class MessageComponent implements OnInit, OnDestroy {
    @Input() message = '';

    constructor() {}

    ngOnInit() {
        setTimeout(() => {
            this.closeMessage();
        }, 3000);
    }

    ngOnDestroy() {
        this.closeMessage();
    }

    closeMessage() {
        this.message = '';
    }
}