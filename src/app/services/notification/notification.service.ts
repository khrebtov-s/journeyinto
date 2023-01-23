import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends ApiService {
  /**
   * Get teachers list
   *
   * METHOD: GET
   * URL:
   */
  public list(): Observable<any> {
    return this.http.get(this.BASE_URL + '/notifications/');
  }

}
