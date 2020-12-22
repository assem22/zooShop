import { Component, OnInit } from '@angular/core';
import {Breed} from '../model/breed';
import {User} from '../model/user';
import {AuthService} from '../../services/auth.service';
import {BreedService} from '../../services/breed.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  user: User = null;

  constructor(private accountService: AuthService, private breedService: BreedService) {
    this.user = this.accountService.userValue[0];
  }

  ngOnInit(): void {
  }

  changeLike(pet: Breed): any{
    pet.likeStatus = !pet.likeStatus;
    console.log(pet.likeStatus);
    // tslint:disable-next-line:prefer-for-of
    if (pet.likeStatus === true){
      this.user.favList.push(pet);
      this.breedService.updatePet(pet).subscribe(data => console.log(data), error => console.log(error));
      this.accountService.update(this.user)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            alert('error');
          });
    }else{
      this.user.favList = this.user.favList.filter(item => item !== pet);
      this.breedService.updatePet(pet).subscribe(data => console.log(data), error => console.log(error));
      this.accountService.update(this.user).subscribe(data => console.log(data), error => console.log(error));
      console.log(this.user);
    }
  }
}
