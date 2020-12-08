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
  user: User = null;
  pet: Breed = null;

  constructor(private breedService: BreedService, private activateRoute: ActivatedRoute,
              private accountService: AuthService, private router: Router) {
    this.subscription = activateRoute.params.subscribe(params => this.num = params.id);
    this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
    console.log(this.num);
    this.getBreedById(this.num);
  }

  // tslint:disable-next-line:typedef
  getBreedById(id: number){
    this.breedService.getBreedById(id).subscribe(data => {
      console.log(data);
      this.pet = data;
      console.log(this.pet.name);
      // console.log(this.pet.breedId);
      // this.pet.breedId = this.user.getId;
      // console.log(this.pet.breedId);
    });
  }

  addToBasket(): any{
    this.breedService.addToBasket(this.pet)
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
    // this.breedService.setBreed(this.pet);
  }

  changeLike(pet: Breed): any{
    pet.likeStatus = !pet.likeStatus;
    this.breedService.updatePet(pet).subscribe(data => console.log(data), error => console.log(error));
  }
}
