import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from "@angular/core";
import { Title } from "@angular/platform-browser";

import { IAppState } from "@src/app/store/app.reducers";
import { Store, select } from "@ngrx/store";
import { Router, ActivatedRoute } from "@angular/router";

import { RouteNames } from "@src/app/route-names";
import {
  VideoService,
  SpinnerOverlayService,
  AuthorizationService,
  UserService,
} from "../../services";
import { SetTitleSharedAction } from "@src/app/store/modules/shared/shared.actions";
import { ConnectToTeacherRequestAction } from "@src/app/store/modules/students/students.actions";
import { UtilsService } from "@src/app/services/utils.service";
import { Observable, Subscription, combineLatest } from "rxjs";
import { TeacherInterface } from "@src/app/interfaces/teachers";
import { selectTeachersObject } from "@src/app/store/modules/teachers/teachers.selectors";
import { filter } from "rxjs/operators";
import { RequestStatus } from "@src/app/services/api.service.interface";
import { ViewStatuses } from "@src/app/store/modules/user/user.types";
import { selectUserActive } from "@src/app/store/modules/user/user.selectors";
import { StudentInterface } from "@src/app/interfaces/students";
import { environment } from "@src/environments/environment";

@Component({
  selector: "app-teachers-profile",
  templateUrl: "./teachers-profile.component.html",
  styleUrls: ["./teachers-profile.component.scss"],
})
export class TeachersProfileComponent implements OnInit, OnDestroy {
  subscriptions = [];

  public routeNames = RouteNames;
  public teacher: TeacherInterface;
  public canEdit = false;

  public teacherObj$: Observable<any> = this.store.pipe(
    select(selectTeachersObject)
  );
  public user$: Observable<any> = this.store.pipe(select(selectUserActive));
  public status = "pending";

  public message = "";
  public links = [];
  public slug = "";
  public isValidVimeoUrl = false;
  public selectable = false;

  public isAuthorized = false;
  public isSubscribed = false;
  public canSubscribe = false;
  public connectOnly = true;

  public user: StudentInterface;

  public appUrl = environment.serverUrl;
  public copied = false;
  public newsEventsText = "";

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private titleService: Title,
    private videoService: VideoService,
    private route: ActivatedRoute,
    private utils: UtilsService,
    public spinner: SpinnerOverlayService,
    private auth: AuthorizationService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.log("INIT TEACHERS PROFILE");

    this.subscriptions.push(
      this.teacherObj$.subscribe((teacherObj) => {
        const currentUserId = this.auth.getCurrentUserId();
        this.teacher = teacherObj.currentTeacher;

        if (this.teacher) {
          if (
            currentUserId &&
            this.teacher.user === currentUserId &&
            this.userService.getViewStatus() === ViewStatuses.TEACHER
          ) {
            this.canEdit = true;
          }
          this.initTeacher(this.teacher);
          this.spinner.hide();
        }
      }),

      // I use this cuz I wanna see when I manage to connect to a teacher if I'm a student
      this.user$.subscribe((user) => {
        this.user = user;
        this.isAuthorized = !!user;

        if (
          user &&
          user.view_status === ViewStatuses.STUDENT &&
          Array.isArray(user.creators)
        ) {
          if (user.creators.length === 0) {
            this.selectable = true;
            this.canSubscribe = true;
          } else if (!isNaN(user.creators[0])) {
            if (this.connectOnly) {
              this.log("only connecty");
              this.router.navigate(["/", RouteNames.student]);
            } else {
              this.log("connect + subscribe");
              this.router.navigate([
                "/",
                RouteNames.student,
                RouteNames.subscription,
              ]);
            }
          } else if (this.teacher && this.user.creators[0]) {
            this.canSubscribe =
              this.teacher.slug === this.user.creators[0].creator.slug;
          }
        }
      })
    );

    if (history.state.data) {
      if (history.state.data.message) {
        this.message = history.state.data.message;
      }
      this.selectable = history.state.data && history.state.data.selectable;
      this.canSubscribe = this.selectable;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }

  initTeacher(teacher) {
    let teacherTitle;
    const { links } = teacher;

    this.links = this.mapLinks(links);

    if (this.canEdit && !this.route.snapshot.paramMap.get("name")) {
      teacherTitle = "Your Profile";
    } else {
      if (teacher.first_name && teacher.last_name && teacher.profile_title) {
        teacherTitle = `${teacher.first_name} ${teacher.last_name} - ${teacher.profile_title}`;
      } else if (teacher.profile_title) {
        teacherTitle = teacher.profile_title;
      }
    }

    if (teacherTitle) {
      this.store.dispatch(new SetTitleSharedAction(teacherTitle));
    }

    this.isValidVimeoUrl =
      !!teacher.vimeo_url &&
      this.videoService.checkVimeoVideoURL(teacher.vimeo_url);

    if (!this.canEdit && teacher.subscribed && teacher.subscribed.length > 0) {
      this.isSubscribed = true;
    } else {
      this.isSubscribed = false;
    }
  }

  mapLinks(links) {
    const networks = new Map([
      ["twitter", "@"],
      ["instagram", "@"],
      ["facebook", "facebook.com/"],
      ["linkedin", "linkedin.com/"],
    ]);
    return links.map((item) => {
      for (const link of networks.keys()) {
       
        
        if (item.url.includes(link)) {
          return this.transformSocialLink(item, link, networks);
        }
      }
      return this.transformOtherLink(item);
    });
  }

  transformSocialLink(item, link, map) {
    return {
      id: item.id,
      icon: link,
      label: `${map.get(link)}${item.url.split("/").filter(el => el).pop()}`,
      url: item.url,
    };
  }

  transformOtherLink(item) {
    return {
      id: item.id,
      label: item.label,
      url: item.url,
    };
  }

  public gotoRecording(recording) {
    if (this.slug && recording.slug) {
      this.router.navigate([
        "/",
        RouteNames.teachers,
        this.slug,
        recording.slug,
      ]);
    }
  }

  handleConnectToTeacher() {
    this.log("CONNECT TO THIS TEACHER");
    const { slug, user } = this.teacher;
    if (this.isAuthorized) {
      this.store.dispatch(new ConnectToTeacherRequestAction({ slug }));
    } else {
      this.router.navigate(["/", RouteNames.signup], {
        state: { teacher: { slug, user } },
      });
    }
  }

  handleSubscribeToTeacher() {
    this.log("CONNECT + SUBSCRIBE TO THIS TEACHER");
    this.connectOnly = false;
    this.log(this.connectOnly);
    if (this.selectable || !this.isAuthorized) {
      this.utils.suscriptionOnTeacher = true;
      this.handleConnectToTeacher();
    } else {
      this.router.navigate(["/", RouteNames.student, RouteNames.subscription]);
    }
  }

  private log(text, ...args) {
    this.utils.logall(text, this.constructor.name, ...args);
  }

  copyProfileUrl(inputElement) {
    inputElement.select();
    document.execCommand("copy");
    inputElement.setSelectionRange(0, 0);
    inputElement.blur();

    this.copied = true;
  }
}
