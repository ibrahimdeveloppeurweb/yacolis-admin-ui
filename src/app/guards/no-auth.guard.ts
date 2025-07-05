
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private router: Router,
   private auth: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.getDataToken()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    const redirectUrl = route.queryParams['returnUrl'] || '/';
    this.router.navigate([redirectUrl]);
    return false;
  }
}