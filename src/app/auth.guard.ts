import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable()
export class AuthClass implements CanActivate{
  constructor(private auth: AuthService, private router: Router) {
  }

  // tslint:disable-next-line:typedef
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const user = this.auth.userValue;
  //   if (user) {
  //     // authorised so return true
  //     return true;
  //   }
  //
  //   // not logged in so redirect to login page with the return url
  //   this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
  //   return false;
  // }

  // tslint:disable-next-line:typedef
  canActivate() {
    console.log('authGuard');
    if (this.auth.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      // window.alert('First login');
      return false;
    }
  }
}
