import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { GeolocationService } from 'src/@myproject/service/geolocation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email:    [null],
    password: [null],
    usertype: [null],
  });
  Data: any = [];
  usertype: any = [];

  constructor(private fb: FormBuilder, private _auth: AuthService,private _location:GeolocationService) {
    this.getUserType();
    this._location.getLocation();
  }

  // email!: string;
  // password!: string;
  // usertype: any;

  ngOnInit(): void {

  }
  login() {
    const payload = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
      admin_type: this.loginForm.controls['usertype'].value,

    }
    this._auth.authLogin(payload).subscribe((res: any) => {
      console.log('res-save', res);
      if (res.code == 200) {
        console.log('success');
        // this._toastr.success(res.message)
      } else {
        // this._toastr.error(res.message)
      }
    })
  }

  getUserType() {
    this._auth.userTypeList().subscribe((res: any) => {
      //console.log('usertype',res);
      this.usertype = res.data;
    });
  }
}
