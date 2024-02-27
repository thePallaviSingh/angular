import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { GeolocationService } from 'src/@myproject/service/geolocation.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/pages/modal/modal.service';
import { ModalComponent } from 'src/app/pages/modal/modal/modal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('modal', { static: false })
  mymodal!: ModalComponent;

  loginForm = this.fb.group({
    email: [null],
    password: [null],
    usertype: [null],
  });
  Data: any = [];
  usertype: any = [];
  location: any;
  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _location: GeolocationService,
    private _router: Router ,
    private _modal:ModalService
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
    this._auth.authLogin(payload).subscribe((res: any) => {
      console.log('res-save', res);
      if (res.code == 200) {
        localStorage.setItem('auth_token',res.data.user_data.authtoken);
        console.log('success',res.data.user_data.authtoken);
        this._router.navigate(['/dashboard']);
        // this._toastr.success(res.message)
      } else if (res.code == 202) {
        this.openModal();
        // this._toastr.error(res.message)
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
   // debugger;
    this.mymodal.open();
  }
}
