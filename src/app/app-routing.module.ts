import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './Auth/auth/auth.service';
import { AuthGuard } from 'src/@myproject/service/auth.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('././Auth/auth/auth.module').then(mod => mod.AuthModule),
  },
  
  {
    path: 'pages',
    loadChildren: () => import('././pages/pages.module').then(mod => mod.PagesModule),
  },
  
  {
	  canActivate: [AuthGuard],
    path:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
