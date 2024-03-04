import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private authService: AuthService

  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    var isAuthenticated = this.authService.LoginStatus();
    console.log('isAuthenticated?????',isAuthenticated);
    
    if (isAuthenticated) {
      this._router.navigate(['/login']);
    }else{
      this._router.navigate(['pages/dashboard']);
    }
    return isAuthenticated;
  }

}



