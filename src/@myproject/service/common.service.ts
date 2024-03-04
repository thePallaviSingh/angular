import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  setLocalData($name: any, $value: any) {
    localStorage.setItem($name, $value);
  }
  getLocalData($name: string) {
    localStorage.getItem($name);
  }
}
