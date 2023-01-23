import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUserActive, selectUserStatus } from '@src/app/store/modules/user/user.selectors';
import { LogoutRequestAction } from '@src/app/store/modules/authentication/authentication.actions';
import { IAppState } from '@src/app/store/app.reducers';
import { SwitchUserViewStatusRequestAction, GetCurrentUserRequestAction } from '@src/app/store/modules/user/user.actions';
import { MatSidenav } from '@angular/material';
import { UserService } from '@src/app/services';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { SpinnerOverlayService } from '@src/app/services';
import { filter } from 'rxjs/operators';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { Router, NavigationEnd } from '@angular/router';
import { UtilsService } from '@src/app/services/utils.service';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.scss']
})
export class LayoutDefaultComponent implements OnInit, OnDestroy {
  // Store
  public subscriptions: Subscription[] = [];
  public user$: Observable<any> = this.store.pipe(select(selectUserActive));
  public status$ = this.store.pipe(
    select(selectUserStatus),
    filter(status => Boolean(status))
  );

  // Current user profile
  public user: any;

  /** 
   * whether to hide or show navigation
   * we're hiding the navigation for example if the user is a teacher 
   * and hasn't completed onboarding
   * */
  public hideNav = false;

  // Side navigation ref
  @ViewChild('sidenav', { static: false })
  public sidenav: MatSidenav;

  public sidenavOpen = false;

  constructor(
    private store: Store<IAppState>,
    private userService: UserService,
    private spinner: SpinnerOverlayService,
    private router: Router,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.user$.subscribe(user => {
        if (user) {
          this.user = user;
          this.log('Got the user: ', this.user);
          if (user && user.creators && user.creators.length && !isNaN(user.creators[0].creator)) {
            this.log('gotta get the correct user obj');
            // console.log('GetCurrentUserRequestAction...');
            this.store.dispatch(new GetCurrentUserRequestAction());
          }

          setTimeout(() => {
            if (
              (
                this.user.view_status === ViewStatuses.TEACHER
                && !this.userService.isCreatorOnboardingStepOneComplete(user)
              ) || (
                this.user.view_status === ViewStatuses.STUDENT
                && !this.userService.isStudentOnboardingComplete(user)
              )
            ) {
              this.hideNav = true;
            } else {
              this.hideNav = false;
            }
          });
        }
      }),
      this.status$.subscribe(status => {
        if (status !== RequestStatus.pending) {
          // hideoverlay
        } else {
          // showoverlay
        }
      }),
      this.router.events.subscribe(
        ev => {
          if (ev instanceof NavigationEnd) {
            const pathArray = ev.urlAfterRedirects.split('/').filter(Boolean);
            if (pathArray.includes('onboarding')) {
              this.hideNav = true;
            } else {
              this.hideNav = false;
            }
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * On switch user view status - student / creator
   */
  onSwitchUserViewStatus({ view_status }: { view_status: string }): void {
    const newUser = { ...this.user, view_status };
    // showoverlay
    this.store.dispatch(new SwitchUserViewStatusRequestAction(newUser));
  }
  /**
   * On user logout
   */
  onLogout(): void {
    this.store.dispatch(new LogoutRequestAction());
  }

  /**
   * On close side navigation
   */
  onCloseSideNav(): void {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  onSidenavToggle() {
    this.sidenav.toggle();

    this.sidenavOpen = !!this.sidenav.opened;
  }

  log(text, ...args) {
    this.utils.log(text, this.constructor.name, ...args);
  }
}
