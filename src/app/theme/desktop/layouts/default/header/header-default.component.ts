import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, combineLatest } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { IAppState } from '@src/app/store/app.reducers';
import { selectTitle, selectBack, selectCancelUrl, selectCanGoBack } from '@src/app/store/modules/shared/shared.selectors';
import { Location } from '@angular/common';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import {
  Router,
  NavigationEnd,
  ActivatedRoute
} from '@angular/router';
import { filter, take, map, switchMap } from 'rxjs/operators';
import { UtilsService } from '@src/app/services/utils.service';

@Component({
  selector: 'app-layout-default-header',
  templateUrl: './header-default.component.html',
  styleUrls: ['header-default.component.scss']
})
export class HeaderDefaultComponent implements OnInit, OnDestroy {
  @Input() public user: any = null;
  @Input() public hideNav = false;

  @Output() public sidenavToggle = new EventEmitter();
  @Output() public switchUserViewStatus: EventEmitter<any> = new EventEmitter<any>();

  public subscriptions: Subscription[] = [];

  public title$: Observable<any> = this.store.pipe(select(selectTitle));
  public title = '';

  /*
  in the pages where it is relevant we send a dispatch
  saying where the back button should go,
  so it would be a router array
  */
  public back$: Observable<any> = this.store.pipe(select(selectBack));
  public canGoBack$: Observable<any> = this.store.pipe(select(selectCanGoBack));
  public showBackButton = false;
  public backUrl: boolean | Array<string> = false;
  public history = 1;
  public trackedUrls = [];
  public startingPage = '';

  // User view status - student or teacher
  public user$: Observable<any> = this.store.pipe(select(selectUserActive));
  public viewStatus = ViewStatuses;

  constructor(
    private store: Store<IAppState>,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.trackedUrls.push(window.location.pathname);

    this.subscriptions.push(
      this.user$.subscribe(user => {
        this.user = user;
      }),
      this.title$.subscribe(title => {
        this.title = title;
      }),
      this.back$.subscribe(goBack => {
        // this.log('header going back?', goBack);
        this.backUrl = goBack;
      }),
      this.canGoBack$.subscribe(canGoBack => {
        // this.log('can I go back now? ', canGoBack, this.backUrl, this.history);
        this.showBackButton = canGoBack;
      }),
      this.router.events
        .pipe(
          filter(e => e instanceof NavigationEnd)
        )
        .subscribe((e: NavigationEnd) => {
          this.trackedUrls.push(e.url);
          this.log('on route change : ', this.trackedUrls);
          this.history = window.history.state.navigationId;
        })
    );
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  goBack() {
    this.log('on go back: ', this.trackedUrls, this.history);
    if (this.history > 1) {
      this.log('I wanna go back normally');
      let prevUrl = this.trackedUrls[this.trackedUrls.length - 2];
      const currentUrl = this.trackedUrls[this.trackedUrls.length - 1];
      const isParentOfPrev = prevUrl.includes(currentUrl);

      if (isParentOfPrev) {
        prevUrl = currentUrl.split('/');
        prevUrl.pop();
        prevUrl = prevUrl.join('/');

      } else {
        // check that the current and prev urls are not 'parallel children' of parent
        // i.e. /teacher/recordings/rec-id/edit-recording && /teacher/recordings/rec-id/edit-audio

        const currentAsArr = currentUrl.split('/');
        currentAsArr.pop();

        const prevAsArr = prevUrl.split('/');
        prevAsArr.pop();

        if (currentAsArr.join('/') === prevAsArr.join('/')) {
          prevUrl = currentAsArr.join('/');
        }

      }

      this.removeLastTrackedUrl();

      // if the current url is a parent of the previous url, do not go back there, go to its
      this.router.navigate([prevUrl]);

    } else if (this.backUrl && Array.isArray(this.backUrl)) {
      this.log('I wanna go back by default');
      this.router.navigate(this.backUrl);
    } else {
      this.router.navigate(['/']);
    }
  }

  /**
   * @name removeLastTrackedUrl
   * @description prevent infinity go back loop
   */
  removeLastTrackedUrl(): void {
    const shallowCopy = [ ...this.trackedUrls ];
    shallowCopy.splice(this.trackedUrls.length - 1, 1);

    this.trackedUrls = shallowCopy;
  }

  /**
   * Switch user view status - Student / Creator
   *
   * @param view_status
   */
  handleClickSwitchUserViewStatus(view_status: ViewStatuses): void {
    this.switchUserViewStatus.emit({ view_status });
  }

  log(text, ...args) {
    this.utils.logall(text, this.constructor.name, ...args);
  }
}
