import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  getLoginUrl = 'http://localhost:8080/auth/users/login';



  constructor(private http: HttpClient) {}

  loginRequest = function(user, pass) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
        //'Authorization': 'my-auth-token'
      })};

    let body = new URLSearchParams();
    body.set('username' , user );
    body.set('password' , pass );

    const data = {
      username : user,
      password : pass
    }

    this.http.post(this.getLoginUrl, body.toString() , httpOptions).toPromise().then(function() {
      debugger;
    });
  };

/* TODO: Token BEARER + TOKEN.
  createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
  }
  */
}
