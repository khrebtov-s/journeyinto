import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api.service';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { TeacherStepOne, TeacherStepTwo, RouteNames } from '@src/app/route-names';
import { redirectMessage } from '@src/app/helpers';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {
  public user = null;

  private onlyStudentRoutes = ['student'];
  private onlyTeacherRoutes = ['teacher'];

  public getViewStatus() {
    return this.user && this.user.view_status;
  }

  /**
   * Get current user by jwt token header
   *
   * METHOD: GET
   * URL:
   */
  public current(): Observable<any> {
    // console.log('***** "API" GETTING CURRENT USER *****');
    return this.http.get(this.BASE_URL + '/users/profile/')
      .pipe(
        // tap(user => console.log('current user API response: ', user)),
        tap(user => this.user = user ? user : null)
      );
  }

  public checkToken():Observable<any> {
    return this.http.post(this.BASE_URL + '/rest-auth/verify/', 
    {
      token: localStorage.getItem('access_token')
    })
  }

  /**
   * Store current user locally to make offline possible
   *
   * METHOD: GET
   * URL:
   */
  public storeUser(user:any): Observable<any> {
    // TODO
    return of({/*Silence*/})
  }

  /**
   * Switch user view status - student / creator
   *
   * METHOD: POST
   * URL:
   */
  public switchUserViewStatus(user: any): Observable<any> {
    const formData = new FormData();
    formData.append('view_status', user.view_status);
    return this.http.patch(this.BASE_URL + '/users/profile/', formData);
  }

  // /**
  //  * Update user profile by id
  //  *
  //  * METHOD: PUT
  //  * URL:
  //  */
  // public updateById(userId: number, payload: any): Observable<any> {
  //   return this.http.post(`${this.BASE_URL}/users`, payload);
  // }

  /**
   * Get user cards from stripe
   */
  public getUserCards(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/cards/`);
  }

  /**
   * Update user data
   */
  public updateCurrentUser(body): Observable<any> {
    return this.http.patch(`${this.BASE_URL}/users/profile/`, body)
      .pipe(
        tap(user => this.user = user ? user : this.user)
      );
  }

  /**
   * Check that the 'creator' user has completed the first step of the creator's profile
   * If the creator.user is not set, then return false
   */
  public isCreatorOnboardingStepOneComplete(user: any): boolean {
    const isComplete = !(user && user.view_status === ViewStatuses.TEACHER && !user.creator);
    return isComplete;
  }

  /**
   * Check that the 'creator' user has completed their creator profile
   * If the creator.stripe_link is set, then return false
   */
  public isCreatorOnboardingStepTwoComplete(user: any): boolean {
    const isComplete = !!(user && user.view_status === ViewStatuses.TEACHER && user.creator.stripe_user_id);
    return isComplete;
  }

  /**
   * Check that the 'student' user has completed their student profile
   * If the user has no creators, direct back to onboarding step 1
   */
  public isStudentOnboardingComplete(user: any): boolean {
    return user && user.view_status === ViewStatuses.STUDENT && user.creators && user.creators.length > 0;
  }

  public isStudent(user: any): boolean {
    return user.view_status === ViewStatuses.STUDENT;
  }

  public isTeacher(user: any): boolean {
    return user.view_status === ViewStatuses.TEACHER;
  }

  public doUserOnboardingChecks(user, url) {
    if (this.isTeacher(user)) {
      const teacherOnboardingStepOneUrl = TeacherStepOne.join('/').slice(1);

      if (!this.isCreatorOnboardingStepOneComplete(user)) {
        if (url !== teacherOnboardingStepOneUrl) {
          return {
            canActivate: false,
            goTo: TeacherStepOne
          };
        }

      }

    } else if (this.isStudent(user)) {

      const studentOnboardingArray = ['/', RouteNames.onboarding, RouteNames.student];
      const studentOnboardingUrl = studentOnboardingArray.join('/').slice(1);

      // if the student has not complete the profile, redirect him there
      if (
        url !== studentOnboardingUrl
        && !this.isStudentOnboardingComplete(user)
      ) {
        return {
          canActivate: false,
          goTo: studentOnboardingArray
        };
      }

    }

    return {
      canActivate: true
    };
  }

  doUserStatusChecks(user) {
    const url = window.location.pathname;
    const urlArr = url.split('/').filter(Boolean);

    if (urlArr[0]) {
      if (this.isStudent(user) && this.onlyTeacherRoutes.includes(urlArr[0])) {
        return {
          canActivate: false,
          goTo: ['/']
        };
      }

      if (this.isTeacher(user) && this.onlyStudentRoutes.includes(urlArr[0])) {
        return {
          canActivate: false,
          goTo: ['/']
        };
      }
    }

    return {
      canActivate: true
    };
  }
}
