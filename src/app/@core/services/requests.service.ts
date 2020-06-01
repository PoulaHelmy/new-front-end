import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  }),
};
@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}
  getAllRequests() {
    return this.http
      .post(`${env.apiRoot}/auth/requests/incoming`, '', httpOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  } //end of getAllRequests
  approveRequest(data: object) {
    return this.http
      .post(`${env.apiRoot}/auth/requests/change/status`, data, httpOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
} //end of class
