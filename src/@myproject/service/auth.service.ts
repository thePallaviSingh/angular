import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private getAuthStatus =(localStorage.getItem('auth_token') || ('false'));


  constructor(private _commonservice:CommonService) { 
    console.log('auth_token',(localStorage.getItem('auth_token')));
    
  }
  setgetAuthStatus(value: any) {
    this.getAuthStatus = value;
    localStorage.setItem('auth_token', 'true');
  }

  get LoginStatus() {
    console.log(localStorage.getItem('auth_token'));
    return JSON.parse(localStorage.getItem('auth_token') || this.getAuthStatus.toString());

;
  }
}
