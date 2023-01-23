import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class PosesService extends ApiService {

  public list(): Observable<any> {
    return this.http.get(this.BASE_URL + '/poses/');
  }

  public getBySlug(slug): Observable<any> {
    return this.http.get(`${this.BASE_URL}/poses/${slug}`);
  }

}
