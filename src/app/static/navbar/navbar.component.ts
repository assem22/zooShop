import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dateObj: number = Date.now();

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOut() {
    console.log('Log out');
    this.service.logout();
    this.service.setStatus();
    // window.alert('You just logged out');
    // this.router.navigate(['']);
  }
}
