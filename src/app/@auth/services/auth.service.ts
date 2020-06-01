import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endPoint: string = 'auth';
  options: any;
  /*---------------------------------------------------------- */
  private isAuthenticated = new BehaviorSubject(
    this.getIsAuthenticated() || false
  );
  isAuthenticated$ = this.isAuthenticated.asObservable();
  getIsAuthenticated(): boolean {
    return localStorage.getItem('access_token') ? true : false;
  }
  setIsAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated.next(isAuthenticated);
  }
  /*---------------------------------------------------------- */
  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    };
  }

  login(email: string, password: string) {
    return this.http.post(
      `${env.apiRoot}/${this.endPoint}/login`,
      {
        email: email,
        password: password,
      },
      this.options
    );
  }
  register(data: object) {
    return this.http.post(
      `${env.apiRoot}/${this.endPoint}/signup`,
      data,
      this.options
    );
  }

  logout() {
    return this.http.get(`${env.apiRoot}/${this.endPoint}/logout`, httpOptions);
  }
  forgetPassword(email: string) {
    return this.http.post(
      `${env.apiRoot}/password/create`,
      { email: email },
      this.options
    );
  }
  resetPassword(data: object) {
    return this.http.post(`${env.apiRoot}/password/reset`, data, this.options);
  }
  getDetails() {
    return this.http.get(`${env.apiRoot}/${this.endPoint}/user`, httpOptions);
  }
  updateProfileData(data: object) {
    return this.http.post(`${env.apiRoot}/${this.endPoint}/update`, data, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        Accept: 'application/json',
      },
    });
  }
} //end of class
// getDetails() {
//   return this.http.get(`${env.apiRoot}/${this.endPoint}/user`, {
//     headers: {
//       Authorization: 'Bearer ' + localStorage.getItem('access_token'),
//       Accept: 'application/json',
//       'X-Requested-With': 'XMLHttpRequest',
//     },
//   });
// }
