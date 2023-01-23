import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RecordingService extends ApiService {
  public getRecordingBySlug(body: any): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append("Content-Type", "text/plain");

    return this.http.get(
      this.BASE_URL + `/recordings/view/${body.creatorslug}/${body.slug}/`,
      { headers: headers }
    );
  }

  /* Get recordings for logged in teacher */
  public list(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append("Content-Type", "text/plain");

    return this.http.get(this.BASE_URL + "/recordings/list/", {
      headers: headers,
    });
  }

  public getRecordingsForCurrentUser(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append("Content-Type", "text/plain");

    return this.http.get(this.BASE_URL + "/users/library/", {
      headers: headers,
    });
  }

  public updateRecording(id: number, body: any): Observable<any> {
    const formData = new FormData();

    for (const field in body) {
      if (body[field]) {
        formData.append(field, body[field]);
      }
    }

    return this.http.patch(
      `${this.BASE_URL}/recordings/record/${id}/`,
      formData
    );
  }

  public updateRecordingPoses(id: number, body: any): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append("Content-Type", 'multipart/form-data');

    return this.http.patch(`${this.BASE_URL}/recordings/record/${id}/`, body, {
      headers
    });
  }

  public deleteRecording(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/recordings/record/${id}/`);
  }

  public changeRecordingStatus(payload: any): Observable<any> {
    const formData = new FormData();
    formData.append(
      "status",
      payload.status.charAt(0).toUpperCase() + payload.status.slice(1)
    );

    return this.http.patch(
      `${this.BASE_URL}/recordings/record/${payload.id}/`,
      formData
    );
  }
}
