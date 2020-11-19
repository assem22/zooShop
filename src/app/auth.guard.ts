import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable()
export class AuthClass implements CanActivate{
  constructor(private auth: AuthService, private router: Router) {
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
  //   // @ts-ignore
  //   return this.auth.isLoggedIn();
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
