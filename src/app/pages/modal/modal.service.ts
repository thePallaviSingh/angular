import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private html: BehaviorSubject<HTMLElement | string>;


  constructor() {
    this.html = new BehaviorSubject<HTMLElement | string>('');
  }

  modal(): Observable<HTMLElement | string> {
    return this.html.asObservable();
  }

  openModal(html: HTMLElement | string): void {
    this.html.next(html);
  }

}
