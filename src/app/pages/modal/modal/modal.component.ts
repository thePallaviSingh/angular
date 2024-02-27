import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
 // @ViewChild('myModal', { static: false }) modal: ElementRef | undefined;
  @ViewChild('myModal', { static: false })
  mymodal!: ElementRef;
  constructor(private modalService: ModalService) {}
  open() {
    this.mymodal.nativeElement.style.display = 'block';
  }
  close(){
    
  }
}
