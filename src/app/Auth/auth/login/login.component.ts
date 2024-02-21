import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selectedCity: any;

 loginForm = this.fb.group({
    email: [null],
    password: [null]
  });

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
 

  constructor(private fb:FormBuilder,private _auth:AuthService) { }

  ngOnInit(): void {

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
}
