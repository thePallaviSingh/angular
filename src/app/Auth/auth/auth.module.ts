import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from 'src/app/pages/pages.module';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserRegisterComponent } from './user-register/user-register.component';





@NgModule({
  declarations: [
    LoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PagesModule,
    NgxOtpInputModule,
    PagesRoutingModule,
    NgSelectModule,
    
   
  ],

 
})
export class AuthModule { }
