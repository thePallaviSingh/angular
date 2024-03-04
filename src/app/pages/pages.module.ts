import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ModalComponent } from './modal/modal/modal.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    ModalComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxOtpInputModule
  ],
  exports:[ModalComponent]
})
export class PagesModule { }
