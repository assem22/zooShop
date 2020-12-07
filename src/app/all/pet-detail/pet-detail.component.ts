import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  num: number;
  private subscription: Subscription;
  user: User;

  constructor(private activateRoute: ActivatedRoute, private accountService: AuthService) {
    this.subscription = activateRoute.params.subscribe(params => this.num = params['id']);
    this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
    console.log(this.num);
  }

}
