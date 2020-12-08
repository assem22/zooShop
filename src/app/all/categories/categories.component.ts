import {
  Component, DoCheck,
  OnInit
} from '@angular/core';
import {Breed} from '../model/breed';
import {BreedService} from '../../services/breed.service';
import {LoggingService} from '../../services/logging.service';
import {User} from '../model/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [BreedService, LoggingService]
})
// tslint:disable-next-line:max-line-length
export class CategoriesComponent implements OnInit, DoCheck {

  listOfBreed: Breed[];
  pet: Breed;
  searchText: string;
  user: User  = null;

  constructor(private breedService: BreedService, private accountService: AuthService) {
    this.user = this.accountService.userValue;
  }

  // ngOnChanges() {
  //   console.log('CategoryComponent:OnChanges');
  // }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('CategoryComponent:OnInit');
    // this.getUserList();
  }
  // tslint:disable-next-line:typedef
  // getUserList() {
  //   this.breedService.getBreeds().subscribe(res => {
  //     this.listOfBreed = res;
  //   });
  // }
  // tslint:disable-next-line:typedef
  ngDoCheck() {
    console.log('CategoryComponent:DoCheck');
    this.breedService.setSearchText(this.searchText);
  }

  // tslint:disable-next-line:typedef
  search(searchText: string) {
    this.breedService.setSearchText(searchText);
  }
}
