import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  getLoginUrl = 'http://localhost:8080/auth/users/login';



  constructor(private http: HttpClient) {}

  loginRequest = function(user, pass){

    const headers = new Headers({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*' });
    const options = { headers: headers };

    const data = {
      username : user,
      password : pass
    }
    this.http.post(this.getLoginUrl, data, options).toPromise().then(function() {
      debugger;
    });

  };
}
