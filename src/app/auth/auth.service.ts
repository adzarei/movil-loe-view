import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('authtoken');
  }

  public isAuthenticated(): boolean {
    return !this.getToken();
  }

}
