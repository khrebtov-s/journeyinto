import { OnInit, Input, Component } from "@angular/core";
import { RecordingInterface } from "@src/app/interfaces/recording";
import { RouteNames } from "@src/app/route-names";
import { RecordingStatus } from "@src/app/pages/teacher/recordings/recording-status";

@Component({
    selector: 'app-recording-card',
    templateUrl: './recording-card.component.html',
    styleUrls: ['./recording-card.component.scss']
})
export class RecordingCardComponent implements OnInit {
    @Input() recording: RecordingInterface;

    public routeNames = RouteNames;
    public emptyField = 'n/a';
    public recordingStates = RecordingStatus;

    constructor(
    ) { }

    ngOnInit() {
    }

}