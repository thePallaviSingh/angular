import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  public lat: any;
  public lng: any;
  Position:any;
  constructor() { 
   
    
  }
  ngOnInit(): void {
  }
  
  getLocation():Promise<any> {
    
        return new Promise((resolve,reject)=>{
          if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position)=>{
            const longitude = position.coords.longitude;
            const latitude = position.coords.latitude;
            resolve({
              lat: latitude,
              lng:longitude
            })
          });
        }else {
          reject ("No support for geolocation")
       }
        })
    } 
}
