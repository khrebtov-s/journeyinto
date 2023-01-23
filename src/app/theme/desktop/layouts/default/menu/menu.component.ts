import { Component, Output, EventEmitter, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { Router, NavigationStart } from '@angular/router';
import { RouteNames } from '@src/app/route-names';
import { UserService } from '@src/app/services';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { selectUserActive, selectUserStatus, selectUserEntities } from '@src/app/store/modules/user/user.selectors';
import { filter } from 'rxjs/operators';
import { UtilsService } from '@src/app/services/utils.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
  activeLinkClass = 'active-menu-item';
  routeNames: typeof RouteNames = RouteNames;
  
  // Current user props
  @Input() public user: any = null;
  @Input() public hidePrivateMenuItems = false;

  // Emit event to parent
  @Output() public switchUserViewStatus: EventEmitter<any> = new EventEmitter<any>();
  @Output() public sidenavClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  // Current user props
  public user$: Observable<any> = this.store.pipe(
    select(selectUserActive),
    filter(Boolean)
  );
  public switchUser$: Observable<any> = this.store.pipe(
    select(selectUserEntities),
    filter(Boolean)
  );
  public subscriptions = [];

  // User view status - student or teacher
  public viewStatus = ViewStatuses;
  public currentViewStatus: boolean | string = false;

  public studentSwitchTitle = '';
  public teacherSwitchTitle = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<IAppState>,
    private utils: UtilsService
  ) {
    this.subscriptions.push(
      router.events.subscribe(val => {
        if (val instanceof NavigationStart) {
          this.handleClickCloseSideNav();
        }
      }),
      this.user$.subscribe(user => {
        if (user.creators && user.creators.length === 0) {
          this.studentSwitchTitle = 'Create student profile';
        } else {
          this.studentSwitchTitle = 'Yoga view';
        }

        if (!user.creator) {
          this.teacherSwitchTitle = 'Create teacher profile';
        } else {
          this.teacherSwitchTitle = 'Teacher view';
        }
      })
    );
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Switch user view status - Student / Creator
   *
   * @param view_status
   */
  handleClickSwitchUserViewStatus(view_status: ViewStatuses): void {
    this.switchUserViewStatus.emit({ view_status });
  }

  /**
   * Handle click close side navigation
   */
  handleClickCloseSideNav(): void {
    this.sidenavClose.emit();
  }

  /**
   * Handle click on logout
   */
  handleLogoutClick(): void {
    this.logout.emit();
    this.sidenavClose.emit();
  }

  log(text, ...args) {
    this.utils.logall(text, this.constructor.name, ...args);
  }
}
