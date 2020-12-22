import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/user';
import {AuthService} from '../../services/auth.service';
import {Breed} from '../model/breed';
import {BreedService} from '../../services/breed.service';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  num: number;
  private subscription: Subscription;
  user: User;
  pet: Breed;

  constructor(private breedService: BreedService, private activateRoute: ActivatedRoute,
              private accountService: AuthService, private router: Router) {
    this.subscription = activateRoute.params.subscribe(params => this.num = params.id);
    this.user = this.accountService.userValue[0];
  }

  ngOnInit(): void {
    console.log(this.num);
    this.getBreedById(this.num);
    console.log(this.user.name);
    // console.log(this.pet.name);
  }

  // tslint:disable-next-line:typedef
  getBreedById(id: number){
    this.breedService.getBreedById(id).subscribe(data => {
      console.log(data);
      this.pet = data;
      console.log(this.pet.name);
      console.log(this.user.name);
    });
  }

  addToBasket(): any{
    this.user.basket.push(this.pet);
    this.accountService.update(this.user)
      .pipe(first())
      .subscribe(
        data => {
          alert('Successfully added to basket');
          console.log('Successfully added to basket');
          this.router.navigate(['../../../../basket'], { relativeTo: this.activateRoute });
        },
        error => {
          alert('error');
        });
  }

  changeLike(): any{
    this.pet.likeStatus = !this.pet.likeStatus;
    console.log(this.pet.likeStatus);
    // tslint:disable-next-line:prefer-for-of
    if (this.pet.likeStatus === true){
      for (const test of this.user.favList){
        if (test === this.pet){
          console.log('I AM TUT');
          console.log(test);
        }else{
          console.log('I AM  NOT TUT');
        }
      }
      this.user.favList.push(this.pet);
      this.breedService.updatePet(this.pet).subscribe(data => console.log(data), error => console.log(error));
      this.accountService.update(this.user)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            alert('error');
          });
    }else {
      for (const test of this.user.favList){
        if (test.id === this.pet.id){
          console.log('I AM HERE');
          console.log(test);
        }else{
          console.log('I AM  NOT HERE');
          console.log(this.pet);
        }
      }
      this.user.favList = this.user.favList.filter(item => item.id !== this.pet.id);
      this.accountService.update(this.user).subscribe(data => console.log(data.favList), error => console.log(error));
      console.log('CHECKAI');
      console.log(this.user.favList);
      this.breedService.updatePet(this.pet).subscribe(data => console.log(data.name), error => console.log(error));
      console.log(this.user);
    }
  }
}
