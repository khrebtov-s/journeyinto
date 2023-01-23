import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { TForgottenPasswordAttempt, TForgottenPasswordReset } from './forgotten-password.service.types';

@Injectable({
  providedIn: 'root'
})
export class ForgottenPasswordService extends ApiService {
  /**
   * Attempt to remind password
   *
   * METHOD: POST
   * URL:
   */
  public attempt(data: TForgottenPasswordAttempt): Observable<any> {
    return this.http.post(this.BASE_URL + '/rest-auth/password/reset/', data);
  }

  /**
   * Reset Password
   *
   * METHOD: POST
   */
  public reset(data: TForgottenPasswordReset): Observable<any> {
    return this.http.post(this.BASE_URL + '/rest-auth/password/reset/confirm/', data);
  }
}
