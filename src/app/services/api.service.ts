import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';

export class ApiService {
  // Api base url
  protected BASE_URL = `${environment.apiUrl}/${environment.apiVersion}`;

  protected API_URL =  `${environment.apiUrl}`;

  constructor(
    protected http: HttpClient,
    protected store: Store<IAppState>
    ) {}
}
