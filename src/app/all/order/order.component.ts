import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from '../../exit.order.guard';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, ComponentCanDeactivate {

 user: User  = null;
 saved = false;

  constructor(private accountService: AuthService) {
    this.user = this.accountService.userValue;
  }

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    phone: new FormControl('', [Validators.required, Validators.minLength(11)]),
    address: new FormControl('', [Validators.required]),
    comment: new FormControl()
  });

  // tslint:disable-next-line:typedef
  get name(){
    return this.orderForm.get('name');
  }
  // tslint:disable-next-line:typedef
  get email(){
    return this.orderForm.get('email');
  }
  // tslint:disable-next-line:typedef
  get phone(){
    return this.orderForm.get('phone');
  }
  // tslint:disable-next-line:typedef
  get address(){
    return this.orderForm.get('address');
  }
  // tslint:disable-next-line:typedef
  save(){
    this.saved = true;
  }

  ngOnInit(): void {
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved){
      return confirm('You didn\'t complete the order. Leave the page?');
    }else{
      return true;
    }
  }

  order(): any {
    alert('Order successfully accepted! Please, wait.');
  }
}
