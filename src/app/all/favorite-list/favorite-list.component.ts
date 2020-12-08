import { Component, OnInit } from '@angular/core';
import {Breed} from '../model/breed';
import {User} from '../model/user';
import {AuthService} from '../../services/auth.service';
import {BreedService} from '../../services/breed.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  user: User = null;
  pets: Breed[];

  constructor(private accountService: AuthService, private breedService: BreedService) {
    this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
    this.getFavoriteList();
  }

  // tslint:disable-next-line:typedef
  getFavoriteList() {
    this.breedService.getFavorite().subscribe(res => {
      this.pets = res;
    });
  }

  changeLike(pet: Breed): any{
    pet.likeStatus = !pet.likeStatus;
    this.breedService.updatePet(pet).subscribe(data => console.log(data), error => console.log(error));
  }
}
