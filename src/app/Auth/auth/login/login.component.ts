import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  
 loginForm = this.fb.group({
    email: [null],
    password: [null]
  });
  Data: any =[];
  usertype:any=[];


 

  constructor(private fb:FormBuilder,private _auth:AuthService) { 
    this.getUserType();
  }

  ngOnInit(): void {
    this.Data= [{ id: 0, nameData:"pallavi" }, { id: 1, nameData:"priya" }];
    console.log('Data',this.Data);
  }
  login(){
    const payload = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,

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

  getUserType(){
    this._auth.userTypeList().subscribe((res:any)=>{
       //console.log('usertype',res);
       this.usertype=res.data;
    });
  }
}
