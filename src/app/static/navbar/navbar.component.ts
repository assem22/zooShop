import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../all/model/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dateObj: number = Date.now();
  user: User;

  constructor(private accountService: AuthService, private router: Router) {
    this.user = this.accountService.userValue[0];
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOut() {
    console.log('Log out');
    this.accountService.logout();
  }
}
