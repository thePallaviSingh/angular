import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../modal.service';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { CommonService } from 'src/@myproject/service/common.service';
import { AuthService } from 'src/app/Auth/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  userDetails: any;
  userdata: any;
  user: any;
  otp:any;
  @ViewChild('myModal', { static: false }) modal!: ElementRef;
  display: any;
  constructor(private _commonservice: CommonService, private _auth: AuthService,private _toastr: ToastrService,private _router: Router) {
    this.userdata = localStorage.getItem('userdata');
    this.user = JSON.parse(this.userdata);
    console.log('users??',this.user);
    
  }

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
    // classList: {
    //   inputBox: 'my-super-box-class',
    //   input: 'my-super-class',
    //   inputFilled: 'my-super-filled-class',
    //   inputDisabled: 'my-super-disable-class',
    //   inputSuccess: 'my-super-success-class',
    //   inputError: 'my-super-error-class',
    // },
  };
  open() {
    this.modal.nativeElement.style.display = 'block';
  }
  close() {
    this.modal.nativeElement.style.display = 'none';
  }
  submitOtp() {
     const payload = {
      email:      this.user?.email,
      password:   this.user?.password,
      admin_type: this.user?.admin_type,
      lat:        this.user?.lat,
      lng:        this.user?.lng,
      type:       1,
      otp: localStorage.getItem('otp')
    }
    this._auth.verifyOtp(payload).subscribe((res: any) => {
      // console.log('response', res);
      this._commonservice.setLocalData('auth_token', res.data.user_data?.authtoken)
      this._toastr.success(res.message)
      this._router.navigate(['pages/dashboard']);
     
    })
  }

  handeOtpChange(value: string[]): void {
    console.log(value);
  }

  handleFillEvent(value: string): void {
    this.otp=value;
    localStorage.setItem('otp', this.otp);
  }
}
