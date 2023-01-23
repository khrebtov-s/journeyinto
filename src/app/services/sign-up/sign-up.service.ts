import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { TSignUpAttempt } from './sign-up.service.types';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';

@Injectable({
  providedIn: 'root'
})
export class SignUpService extends ApiService {
  /**
   * Attempt to sign up
   *
   * METHOD: POST
   * URL: /rest-auth/registration/
   */
  public attempt(data: TSignUpAttempt): Observable<any> {
    const { email, first_name, last_name, marketing, telephone, view_status, password } = data;
    const body = {
      email,
      first_name,
      last_name,
      marketing,
      password1: password,
      password2: password,
      telephone,
      view_status
    };

    return this.http.post(this.BASE_URL + '/rest-auth/registration/', body);
  }
}
