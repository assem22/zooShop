import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from '../../exit.order.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, ComponentCanDeactivate {

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
      return confirm('You didn\'t complete the order. Leave the page?');
    }else{
      return true;
    }
  }

}
