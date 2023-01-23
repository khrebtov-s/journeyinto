import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { TBasicCredentials } from './authentication.service.types';
import { AuthorizationService } from '@src/app/services/authorization/authorization.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends ApiService {
  constructor(
    protected authorizationService: AuthorizationService,
    protected store: Store<IAppState>,
    protected http: HttpClient
  ) {
    super(http, store);
  }
  /**
   * Attempt to authenticate via email/password (basic)
   *
   * METHOD: POST
   * URL: /api/v1/auth
   *
   * @param credentials
   */
  public attemptBasic(credentials: TBasicCredentials): Observable<any> {
    return this.http.post(`${this.BASE_URL}/rest-auth/login/`, credentials);
  }

  public refreshToken(): Observable<any> {
    return this.http
      .post<any>(`${this.BASE_URL}/rest-auth/refresh/`, {
        refresh: this.authorizationService.getRefreshToken()
      });
  }
}
