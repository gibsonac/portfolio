import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){}
  //add functions here like this: getCakes() {
      // return this._http.get('/cakes/')
  }
