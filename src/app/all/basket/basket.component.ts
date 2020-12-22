import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {AuthService} from '../../services/auth.service';
import {Breed} from '../model/breed';
import {BreedService} from '../../services/breed.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  user: User = null;
  pets: Breed[] = null;
  totalSum = 0;

  constructor(private accountService: AuthService, private breedService: BreedService) {
    this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
    console.log(this.user.name);
    this.pets = this.user.basket;
    console.log(this.pets);
    console.log(this.user.basket);
    // this.getBreedList();
  }

  // tslint:disable-next-line:typedef
  getBreedList() {
    this.breedService.getBasket().subscribe(res => {
      this.pets = res;
      this.calculateTotalCost();
    });
  }

  calculateTotalCost(): any{
    this.totalSum = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.pets.length; i++){
      this.totalSum += this.pets[i].cost;
    }
  }

  delete(id: number): any {
    this.breedService.delete(id).subscribe(data => {
      this.getBreedList();
    });
  }
}
