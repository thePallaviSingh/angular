import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @ViewChild('myModal', { static: false }) modal!: ElementRef;
  constructor() { }
  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     console.log(this.modal.nativeElement);
  //   }, 1000);
  // }

  open() {
    this.modal.nativeElement.style.display = 'block';
  }
  submitOtp() {
   
  }
}
