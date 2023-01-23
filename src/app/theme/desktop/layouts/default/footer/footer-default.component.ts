import { Component, Input, OnInit } from '@angular/core';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { RouteNames, ExternalRouteNames } from '@src/app/route-names';
import { UserService } from '@src/app/services';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';

@Component({
  selector: 'app-layout-default-footer',
  templateUrl: './footer-default.component.html',
  styleUrls: ['./footer-default.component.scss']
})
export class FooterDefaultComponent implements OnInit {
  routeNames: typeof RouteNames = RouteNames;
  externalRoutes: typeof ExternalRouteNames = ExternalRouteNames;
  // user$ = this.store.pipe(select(selectUserActive));

  // Current user props
  @Input() public user: any = null;
  hasCreator = false;

  // User view statuses - student or teacher
  public viewStatuses = ViewStatuses;
  public canSeeFooter = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
  }
}
