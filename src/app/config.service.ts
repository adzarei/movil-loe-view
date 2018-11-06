import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  getLoginUrl = 'http://localhost:8080/auth/users/login';

  constructor(private http: HttpClient) {}


  trySavedTokenRequest(token, url){
    this.http.post(url, undefined, null).toPromise()
  }


  loginRequest = function(user, pass) {

    let body = new URLSearchParams();
    body.set('username' , user );
    body.set('password' , pass );

    const data = {
      username : user,
      password : pass
    };

    this.http.post(this.getLoginUrl, body.toString()).toPromise().then(function(response) {

      localStorage.setItem('authtoken',response.uuid);

    });
  };


}
