import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ModalComponent } from './modal/modal/modal.component';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[ModalComponent]
})
export class PagesModule { }
