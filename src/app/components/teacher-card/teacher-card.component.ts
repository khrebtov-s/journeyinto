import { OnInit, Input, Component } from "@angular/core";
import { TeacherInterface } from "@src/app/interfaces/teachers";
import { StudentService } from "@src/app/services/student/student.service";
import { Store, select } from "@ngrx/store";
import { IAppState } from "@src/app/store/app.reducers";
import { DisconnectFromTeacherRequestAction, ConnectToTeacherRequestAction } from "@src/app/store/modules/students/students.actions";
import { selectStudentsStatus } from "@src/app/store/modules/students/students.selectors";
import { Subscription } from "rxjs";
import { SpinnerOverlayService } from "@src/app/services";
import { filter } from "rxjs/operators";
import { RequestStatus } from "@src/app/services/api.service.interface";
import { RouteNames } from "@src/app/route-names";
import { Router } from "@angular/router";
import { RecordingInterface } from "@src/app/interfaces/recording";

@Component({
    selector: 'app-teacher-card',
    templateUrl: './teacher-card.component.html',
    styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent implements OnInit {
    @Input() selectable = false;
    @Input() teacher: TeacherInterface;
    @Input() large = false; // if large is true, just do a different styling of image
    @Input() subscribeTo = '';
    @Input() classBought: RecordingInterface;

    public routeNames = RouteNames;
    public teacherLink;

    public subscriptions: Subscription[] = [];
    
    constructor(
        private store: Store<IAppState>,
        private spinnerOverlayService: SpinnerOverlayService,
        private router: Router
    ) {}


    ngOnInit() {
        this.teacherLink = ['/', RouteNames.teachers, this.teacher.slug];
    }

    goToTeacher() {
        this.router.navigate(this.teacherLink, {
            state: {
                data: {
                    selectable: this.selectable
                }
            }
        });
    }

    handleDisconnect() {
        this.store.dispatch(new DisconnectFromTeacherRequestAction(this.teacher));
    }

    handleConnect() {
        // showoverlay
        this.store.dispatch(new ConnectToTeacherRequestAction({ slug: this.teacher.slug }));
    }
}
