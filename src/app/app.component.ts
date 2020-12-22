import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {User} from './all/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zooStore';
  user: User = null;

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.userValue[0];
  }

  // tslint:disable-next-line:typedef
  isLoggedIn() {
    console.log('Show nav-menu');
    return this.auth.isLoggedIn();
  }
}
