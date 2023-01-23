import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { TeacherInterface } from '@src/app/interfaces/teachers';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends ApiService {
  public list(): Observable<any> {
    return this.http.get(this.BASE_URL + '/students/');
  }

  // public getById(id): Observable<any> {
  //   return this.http.get(this.BASE_URL + '/students/1/');
  // }

  // public updateById(id: number, body: any): Observable<any> {
  //   return this.http.post(`${this.BASE_URL}/students/1/update/`, body);
  // }

  public setStripeToken(payload: any): Observable<any> {
    const { token, accountMark } = payload;
    return this.http.post(`${this.BASE_URL}/users/cards/`, { token, is_default: accountMark });
  }


  public setConnection(payload: any): Observable<any> {
    const { slug } = payload;
    return this.http.post(`${this.BASE_URL}/users/creator/${slug}/connect/`, {});
  }

  public disconnect(payload: TeacherInterface): Observable<any> {
    const { slug } = payload;
    return this.http.delete(`${this.BASE_URL}/users/creator/${slug}/connect/`);
  }


  public setSubscription(payload: any): Observable<any> {
    const { token, teacher_slug } = payload;

    let body = {};
    if (token) {
      body = {stripe_token: token};
    }

    return this.http.post(`${this.BASE_URL}/subscription/${teacher_slug}/`, body);
  }

  public setSubscriptionWithCard(payload: any): Observable<any> {
    const { card_id, teacher_slug } = payload;
    return this.http.post(`${this.BASE_URL}/subscription/${teacher_slug}/`, { card_id });
  }

  public unsubscribe(payload: any): Observable<any> {
    const { slug } = payload;
    return this.http.delete(`${this.BASE_URL}/subscription/${slug}/`);
  }

  public purchase(payload: any): Observable<any> {
    const { teacher_slug, recording_id, stripe_token } = payload;
    let body = {};
    if (recording_id) {
      body = { recording_id };
    }
    return this.http.post(`${this.BASE_URL}/subscription/purchase/${teacher_slug}/`, body);
  }
}
