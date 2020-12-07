import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  user: User;

  constructor(private accountService: AuthService) {
    this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
  }
}
