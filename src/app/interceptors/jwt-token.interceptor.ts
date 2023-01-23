import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { AuthorizationService } from '@src/app/services/authorization/authorization.service';
import { UserService } from '@src/app/services/user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CheckUserToken } from '@src/app/store/modules/user/user.actions';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<IAppState>, 
    private authorizationService: AuthorizationService,
    protected userService: UserService,
    protected http: HttpClient,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authorizationService.getAccessToken();
    this.store.dispatch(new CheckUserToken());
    
    const authReq = !!accessToken
      ? req.clone({
          setHeaders: { Authorization: 'Bearer ' + accessToken }
        })
      : req;

    return next.handle(authReq);
  }
}
