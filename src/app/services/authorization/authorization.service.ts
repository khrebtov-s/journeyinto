import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService extends ApiService {
  // Access and refresh tokens keys in local storage
  public accessTokenKey = 'access_token';
  public refreshTokenKey = 'refresh_token';

  // Errors
  public unauthorized$: Subject<any> = new Subject<any>();
  public forbidden$: Subject<any> = new Subject<any>();

  /**
   * Get access token from local storage
   */
  public getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  public getCurrentUserId(): boolean | number {
    if (this.isAuthenticated()) {
      const token = this.getAccessToken();
      const decoded = helper.decodeToken(token);
      return decoded.user_id;
    }
    return false;
  }

  /**
   * Set access token to local storage
   */
  public setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  public isTokenExpired(): boolean {
    return helper.isTokenExpired(this.getAccessToken());
  }

  /**
   * Destroy access token from local storage
   */
  public destroyAccessToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }

  /**
   * Set refresh token to local storage
   */
  public setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }
  /**
   * Destroy refresh token from local storage
   */
  public destroyRefreshToken(): void {
    localStorage.removeItem(this.refreshTokenKey);
  }

  /**
   * Is user authenticated
   */
  public isAuthenticated(): boolean {
    return Boolean(this.getAccessToken());
  }

  /**
   * Error 401 from interceptor
   *
   * @param event
   */
  public onUnauthorizedError(event: any): void {
    this.unauthorized$.next(event);
  }

  /**
   * Error 403 from interceptor
   * @param event
   */
  public onForbiddenError(event: any): void {
    this.forbidden$.next(event);
  }
}
