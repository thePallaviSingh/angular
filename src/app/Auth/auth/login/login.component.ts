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
  userDetails: any;
  userdata: any;
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
    private authenticservice:AuthService
    // public _modal: MatDialogRef<ModalComponent>,
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
        //  this.userdata = localStorage.getItem('userdata');  //this._commonservice.getLocalData('userdata')
        // this.user = JSON.parse(this.userdata);
        // console.log('userdetails', this.user);
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

  // otpVerify() {
  //   const payload = {
  //     email: this.user.email,
  //     password:this.user.password,
  //     admin_type: this.user.admin_type,
  //     lat: this.user.lat,
  //     lng: this.user.lng,
  //   }
  //   this._auth.verifyOtp(payload).subscribe((res: any) => {
  //     console.log('response', res);
  //   })
  // }
}
