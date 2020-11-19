import {
  Component, DoCheck,
  OnInit
} from '@angular/core';
import {Breed} from '../model/breed';
import {BreedService} from '../../services/breed.service';
import {LoggingService} from '../../services/logging.service';

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

  constructor(private breedService: BreedService) {
  }

  // ngOnChanges() {
  //   console.log('CategoryComponent:OnChanges');
  // }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('CategoryComponent:OnInit');
    this.listOfBreed = this.breedService.getBreeds();
  }
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
