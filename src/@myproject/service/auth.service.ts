import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private getAuthStatus = (localStorage.getItem('auth_token') || ('false'));
  constructor(private _commonservice: CommonService) {
  }
  setgetAuthStatus(value: any) {
    this.getAuthStatus = value;
    localStorage.setItem('auth_token', 'true');
  }

  get LoginStatus() {
    // return JSON.parse(localStorage.getItem('auth_token') || this.getAuthStatus.toString());
    return localStorage.getItem('auth_token') || this.getAuthStatus.toString();
  }
}
