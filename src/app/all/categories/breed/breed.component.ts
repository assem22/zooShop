import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewChecked
} from '@angular/core';
import {Breed} from '../../model/breed';
import {BreedService} from '../../../services/breed.service';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css'],
})
// tslint:disable-next-line:max-line-length
export class BreedComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {
  searchText: string;
  listOfBreed: Breed[];

  // breedName: string;

  constructor(private breedService: BreedService) {
    this.listOfBreed = this.breedService.getBreeds();
  }

  // tslint:disable-next-line:typedef
  ngOnChanges() {
    console.log('ParentComponent:OnChanges');
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('ParentComponent:OnInit');
  }
  // tslint:disable-next-line:typedef
  ngDoCheck() {
    console.log('ParentComponent:DoCheck');
    this.searchText = this.breedService.getSearchText();
    // this.breedService.setBreedName(this.breedName);
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewChecked() {
    console.log('ParentComponent:AfterViewChecked');
    // this.showChild = this.breedService.getShowChild();
  }




  // tslint:disable-next-line:typedef
  // setNameOfBreed(name: string){
  //   this.breedName = name;
  // }

}
