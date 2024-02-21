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
    this.getLocation();
  }
  getLocation() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position:Position) => {
    //     if (position) {
    //       console.log("Latitude: " + position.coords.latitude +
    //         "Longitude: " + position.coords.longitude);
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //       console.log(this.lat);
    //       console.log(this.lat);
    //     }
    //   },
    //     (error: PositionError) => console.log(error));
    // } else {
    //   alert("Geolocation is not supported by this browser.");
    // }
  }
}
