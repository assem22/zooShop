import {
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';
import {Breed} from '../../model/breed';
import {BreedService} from '../../../services/breed.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-certain-breed',
  templateUrl: './certain-breed.component.html',
  styleUrls: ['./certain-breed.component.css']
})
// tslint:disable-next-line:max-line-length
export class CertainBreedComponent implements OnInit, OnChanges, DoCheck{
  searchText: string;
  num: number;
  private subscription: Subscription;
  // breedName: string;

  listOfBreed1: Breed[];
  listOfBreed2: Breed[];
  listOfBreed3: Breed[];
  listOfBreed4: Breed[];
  listOfBreed5: Breed[];
  listOfBreed6: Breed[];

  constructor(private breedService: BreedService, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.num = params['id']);

    this.listOfBreed1 = this.breedService.getlistOfBreed1();
    this.listOfBreed2 = this.breedService.getlistOfBreed2();
    this.listOfBreed3 = this.breedService.getlistOfBreed3();
    this.listOfBreed4 = this.breedService.getlistOfBreed4();
    this.listOfBreed5 = this.breedService.getlistOfBreed5();
    this.listOfBreed6 = this.breedService.getlistOfBreed6();
  }

  // tslint:disable-next-line:typedef
  ngOnChanges() {
    console.log('ChildComponent:OnChanges');
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('ChildComponent:OnInit');
    // this.breedService.setShowChild(this.showChild);
  }
  // tslint:disable-next-line:typedef
  ngDoCheck() {
    console.log('ChildComponent:DoCheck');
    this.searchText = this.breedService.getSearchText();
    // this.breedName = this.breedService.getBreedName();
    // this.num = this.breedService.getNum();
  }
}
