import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '@src/app/services';
import { IAppState } from '@src/app/store/app.reducers';

@Injectable()
export class GuestRouteGuard implements CanActivate {
  constructor(
    protected authorizationService: AuthorizationService,
    protected router: Router,
    protected store: Store<IAppState>
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authorizationService.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
