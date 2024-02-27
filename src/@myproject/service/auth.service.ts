import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private getAuthStatus = JSON.parse(localStorage.getItem('auth_token') || ('false'));

  constructor() { }
  setgetAuthStatus(value: any) {
    this.getAuthStatus = value;
    localStorage.setItem('auth_token', 'true');
  }

  get LoginStatus() {
    console.log(localStorage.getItem('auth_token'));
    return JSON.parse(localStorage.getItem('auth_token') ||
      this.getAuthStatus.toString());


  }
}
