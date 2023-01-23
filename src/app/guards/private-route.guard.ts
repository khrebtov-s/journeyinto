import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/app.reducers';
import { selectUserActive } from '../store/modules/user/user.selectors';
import { Observable } from 'rxjs';
import { AuthorizationService, UserService } from '../services';

import { RouteNames, TeacherStepOne, TeacherStepTwo } from '../route-names';
import { redirectMessage } from '../helpers';
import { ViewStatuses } from '../store/modules/user/user.types';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { TeacherInterface } from '../interfaces/teachers';
import { StudentInterface } from '../interfaces/students';
import _ from 'lodash';

@Injectable()
export class PrivateRouteGuard implements CanActivate {
  public user: any = null;
  public user$: Observable<any> = this.store.pipe(
    select(selectUserActive),
    filter(Boolean),
    filter((user: any) => {
      if (!this.user) {
        return user;
      }

      // if there is this.user we need to check whether the objs have changed..
      if (!_.isEqual(user, this.user)) {
        return user;
      }

      return false;
    })
  );

  private onlyStudentRoutes = [ 'student' ];
  private onlyTeacherRoutes = [ 'teacher' ];

  constructor(
    protected authorizationService: AuthorizationService,
    protected router: Router,
    protected store: Store<IAppState>,
    protected userService: UserService,
    protected route: ActivatedRoute
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authorizationService.isAuthenticated()) {
      let canDo = true;

      this.user$.subscribe(user => {
        this.user = user;
        canDo = this.checkUser(state);
      });

      if (this.user) {
        canDo = this.checkUser(state);
      }

      return canDo;
    }

    this.router.navigate(['/', RouteNames.login]);
    return false;
  }

  checkUser(state) {
    if (state.url !== '/') {
      const isOnboardingComplete = this.userService.doUserOnboardingChecks(this.user, state.url);
      const isAllowedInRoute = this.userService.doUserStatusChecks(this.user);

      const goTo = !isOnboardingComplete.canActivate ? isOnboardingComplete.goTo :
        !isAllowedInRoute.canActivate ? isAllowedInRoute.goTo :
          false;

      if (goTo) {
        this.router.navigate(goTo, {
          state: { data: { message: redirectMessage } }
        });
      }

      return !goTo;
    }

    return true;
  }

}
