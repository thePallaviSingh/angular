import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('././Auth/auth/auth.module').then(mod => mod.AuthModule),
  },
  
  {
    path: 'pages',
    loadChildren: () => import('././pages/pages.module').then(mod => mod.PagesModule),
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
