import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AddClassRequestProgressAction, AddClassSuccessAction, AddClassFailureAction } from '@src/app/store/modules/teachers/teachers.actions';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApiService {
  /**
   * Get teachers list
   *
   * METHOD: GET
   * URL:
   */
  public list(): Observable<any> {
    return this.http.get(this.BASE_URL + '/users/creators/');
  }

  public getBySlug(slug): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/creator/${slug}/`);
  }

  public getCurrentTeacher(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/creator/`);
  }

  public update( payload: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    const httpOptions = { headers };

    return this.http.patch(`${this.BASE_URL}/users/creator/`, payload, httpOptions);
  }

  public addClass( payload: any) {
    return this.http
    .request(
      "POST",
      `${this.BASE_URL}/recordings/record/`,
      {
        body: payload,
        observe: "events",
        reportProgress: true,
        responseType: "json"
      },
      
    )
    .subscribe((ev: any) => {
      const {loaded, total} = ev;
      if (loaded) {
          this.store.dispatch(new AddClassRequestProgressAction(Math.round((100 * loaded) / total)));
      } else if (ev instanceof HttpResponse) {
          this.store.dispatch(new AddClassSuccessAction('success'));
      } else if (ev instanceof HttpErrorResponse) {
          this.store.dispatch(new AddClassFailureAction(ev));
      }
    })
  }

  public getStudentsListByTeacher() {
    return this.http.get(`${this.BASE_URL}/users/students/`);
  }

  public addViedeoToClass({payload}: any): Observable<any> {
    const formData = new FormData();
    formData.append("file", payload.file);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    const httpOptions = { headers };

    return this.http.put(`${this.BASE_URL}/recordings/chunked-upload/${payload.id}/`, formData, httpOptions)
  }
}
