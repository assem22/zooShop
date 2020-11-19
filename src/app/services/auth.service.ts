import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status = false;

  isLoggedIn(): boolean {
    return this.status;
  }

  // tslint:disable-next-line:typedef
  setStatus(){
    this.status = !this.status;
  }
}
