import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { GeolocationService } from 'src/@myproject/service/geolocation.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/pages/modal/modal.service';
import { ModalComponent } from 'src/app/pages/modal/modal/modal.component';
import { CommonService } from 'src/@myproject/service/common.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdata: any;
  userdata1: any;
  user1: any;
  // user1:AstMemoryEfficientTransformer;
  userDetails: any;
  usertypedata: any;
  // userdata: any;
  @ViewChild('modal', { static: false }) mymodal!: ModalComponent
  loginForm = this.fb.group({
    email: [null],
    password: [null],
    usertype: [null],
  });
  Data: any = [];
  usertype: any = [];
  location: any;
  user: any;

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _location: GeolocationService,
    private _router: Router,
    private _modal: ModalService,
    private _commonservice: CommonService,
    private _toastr: ToastrService,
    private authenticservice: AuthService
  ) {
    this.getUserType();
  }

  ngOnInit(): void {
    this._location.getLocation().then((res: any) => {
      if (res) {
        this.location = res
      }
    })


  }
  login() {
    const payload = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
      admin_type: this.loginForm.controls['usertype'].value,
      lat: this.location.lat,
      lng: this.location.lng,
    }
    this._commonservice.setLocalData('userdata', JSON.stringify(payload));
    this._auth.authLogin(payload).subscribe((res: any) => {
      if (res.code == 200) {
        this._commonservice.setLocalData('auth_token', res.data.user_data.authtoken)
        this._toastr.success(res.message)
        this._router.navigate(['pages/dashboard']);
      } else if (res.code == 202) {
        this.openModal();
        this._toastr.success(res.message)
      }
    })
  }
  getUserType() {
    this._auth.userTypeList().subscribe((res: any) => {
      console.log('usertype', res);
      this.usertype = res.data;
    });
  }
  openModal() {
    this.mymodal.open();
  }
  closeModel() {
    this.mymodal.close();
  }
  verifyOtp(value: any) {
    this.userdata1 = localStorage.getItem('userdata');
    this.user1 = JSON.parse(this.userdata1);
    const payload = {
      email: this.user1.email,
      password: this.user1.password,
      admin_type: this.user1.admin_type,
      lat: this.user1.lat,
      lng: this.user1.lng,
      otp: value.otp,
      type: value.type,
    }
    // console.log('user>>>>>>>>>>>>>>>>',this.user1);
    // console.log(value);
    // console.log('verify-payload',payload);
    this._auth.verifyOtp(payload).subscribe((res: any) => {
      console.log('response', res);
      this._commonservice.setLocalData('auth_token', res.data.user_data?.authtoken)
      this._toastr.success(res.message)
      this._router.navigate(['pages/dashboard']);

    })
  }

}
