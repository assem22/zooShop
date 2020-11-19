import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from '../../exit.order.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, ComponentCanDeactivate {

  saved = false;

  // tslint:disable-next-line:typedef
  save(){
    this.saved = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved){
      return confirm('Registration is not completed. Want to exit?');
    }
    return true;
  }

}
