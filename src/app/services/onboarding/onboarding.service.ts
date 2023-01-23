import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { TStudentStepOnePayload, TTeacherStepTwoPayload } from './onboarding.service.types';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OnboardingService extends ApiService {
  /**
   * Store student step one
   *
   * METHOD: POST
   * URL: /onboarding/student/step-one
   */
  public studentStepOne(payload: TStudentStepOnePayload): Observable<any> {
    const slug = payload.teacherSlug;
    return this.http.post(`${this.BASE_URL}/users/creator/${slug}/connect/`, {});
  }

  /**
   * Store teacher step one
   *
   * METHOD: POST
   * URL: /onboarding/teacher/step-one
   */
  public teacherStepOne(payload: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    const httpOptions = { headers };

    return this.http.post(this.BASE_URL + '/users/creator/', payload, httpOptions);
  }

  /**
   * Store teacher step two
   *
   * METHOD: POST
   * URL: /onboarding/teacher/step-two
   */
  public teacherStepTwo(payload: TTeacherStepTwoPayload): Observable<any> {
    return this.http.post(this.BASE_URL + '/users/creator/', payload);
  }
}
