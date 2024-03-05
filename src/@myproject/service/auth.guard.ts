import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticated: any;
  constructor(
    private _router: Router,
    private authService: AuthService

  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    this.isAuthenticated = this.authService.LoginStatus;
    console.log('isAuthenticated?????', this.isAuthenticated);
    if (!this.isAuthenticated) {
      this._router.navigate(['auth/login']);
    }
    this.authService.LoginStatus;
    return true;
  }

}



