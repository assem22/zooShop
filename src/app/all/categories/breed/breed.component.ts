import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewChecked
} from '@angular/core';
import {Breed} from '../../model/breed';
import {BreedService} from '../../../services/breed.service';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../model/user';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

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
  user: User  = null;
  breedId: number;
  private subscription: Subscription;

  constructor(private breedService: BreedService, private activateRoute: ActivatedRoute, private accountService: AuthService) {
    this.subscription = activateRoute.params.subscribe(params => this.breedId = params['id']);
    this.user = this.accountService.userValue[0];
  }

  // tslint:disable-next-line:typedef
  ngOnChanges() {
    console.log('ParentComponent:OnChanges');
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('ParentComponent:OnInit');
    this.getBreedList(this.breedId);
  }

  // tslint:disable-next-line:typedef
  getBreedList(breed: number) {
    this.breedService.getBreeds(breed).subscribe(res => {
      this.listOfBreed = res;
    });
  }
  // tslint:disable-next-line:typedef
  ngDoCheck() {
    console.log('ParentComponent:DoCheck');
    console.log(this.breedId);
    this.searchText = this.breedService.getSearchText();
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewChecked() {
    console.log('ParentComponent:AfterViewChecked');
  }

}
