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
  // @Input() searchText: string;
  searchText: string;
  clickedBreed: number;
  listOfBreed: Breed[];

  showChild = false;

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
    this.breedService.setNum(this.clickedBreed);
    this.breedService.setShowChild(this.showChild);
    // this.showChild = this.breedService.getShowChild();
  }

  // ngAfterContentInit() {
  //   console.log('ParentComponent:AfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   console.log('ParentComponent:AfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('ParentComponent:AfterViewInit');
  // }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewChecked() {
    console.log('ParentComponent:AfterViewChecked');
    this.showChild = this.breedService.getShowChild();
  }

  // ngOnDestroy() {
  //   console.log('ParentComponent:OnDestroy');
  //   // this.showChild = this.breedService.getShowChild();
  // }



  // tslint:disable-next-line:typedef
  showCertainBreeds(item: boolean, id: number){
    // this.showChild = !this.showChild;

    this.showChild = item;
    this.clickedBreed = id;
  }

}
