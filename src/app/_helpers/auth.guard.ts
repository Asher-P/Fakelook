import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

   async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let flag = await this.authenticationService.isAuthenticated();
    console.log("gurd flag",flag);
    if(flag === true){
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
  }
}