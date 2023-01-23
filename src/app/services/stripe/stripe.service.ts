import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class StripeService extends ApiService {
    public getDashboardLink(): Observable<any> {
        return this.http.get(this.BASE_URL + '/users/creator/stripe-dashboard/');
    }
}
