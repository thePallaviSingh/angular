import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'user-register',
    component: UserRegisterComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
