import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthorizationService } from '@src/app/services/authorization/authorization.service';
import { ErrorsService } from '@src/app/services/errors/errors.service';
import { RouteNames } from '../route-names';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { LogoutSuccessAction } from '@src/app/store/modules/authentication/authentication.actions';
import { AddClassFailureAction } from '@src/app/store/modules/teachers/teachers.actions';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor(
    private authorizationService: AuthorizationService, 
    private errorsService: ErrorsService,
    private store: Store<IAppState>,
    private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          const errorMessage = this.errorsService.processError(error);
          const processedError = {
            ...error,
            error: errorMessage,
            message: errorMessage
          };
          
          // 401 Unauthorized. Undefined for Safari browser
          if (error.status === undefined || error.status === 401) {
            this.authorizationService.destroyAccessToken();
            this.authorizationService.destroyRefreshToken();
            // Navigate to main page
            this.router.navigate(['/']);
            window.location.reload();
            return throwError(processedError);
          }

          // 403 forbidden
          if (error.status === 403) {
            this.authorizationService.onForbiddenError(processedError);

            return throwError(processedError);
          }

          // 500 server error
          if (error.status === 500) {
            this.errorsService.onServerError(processedError);

            return throwError(processedError);
          }

          // 404 error
          if (error.status === 404) {
            this.errorsService.onServerError(processedError);
            this.router.navigate(['/', RouteNames.notFound]);
            return throwError(processedError);
          }

          if (error.status === 502) {
            window.location.reload();
            return;
          }

          this.errorsService.onServerError(processedError);
          return throwError(processedError);
        }

        return throwError(error);
      })
    );
  }
}
