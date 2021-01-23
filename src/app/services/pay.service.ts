import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PayService {

  constructor(private http: HttpClient) { }

  getPay(user?: any): Observable<any> {
    return this.http.get('http://www.mocky.io/v2/5e3d41272d00003f7ed95c09', user || {});
  }
}
