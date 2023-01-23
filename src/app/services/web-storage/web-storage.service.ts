import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor() { }

  set(key: string, value: any) {
   localStorage.setItem(key, value);
  }

  get(key: string) {
   return localStorage.getItem(key);
  }
}
