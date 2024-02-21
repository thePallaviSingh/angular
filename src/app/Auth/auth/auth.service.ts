import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { endpoint } from 'src/@myproject/service/endpoint';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
base_url=environment.url;


  constructor(private _httpClient: HttpClient) { 
    console.log('baseUrl',this.base_url);
    
  }

  authLogin(payLoad: any): Observable<any> {
    return this._httpClient.post(this.base_url  + endpoint.auth.login ,payLoad).pipe(
      catchError((err) =>
        of(err),
      ),
      switchMap((response: any) => {
        return of(response);
      }),
    );
  }
}
