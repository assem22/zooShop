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
  user: User;

  constructor(private breedService: BreedService, private accountService: AuthService) {
    this.user = this.accountService.userValue;
  }

  // tslint:disable-next-line:typedef
  ngOnChanges() {
    console.log('ParentComponent:OnChanges');
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('ParentComponent:OnInit');
    this.getUserList();
  }

  // tslint:disable-next-line:typedef
  getUserList() {
    this.breedService.getBreeds().subscribe(res => {
      this.listOfBreed = res;
    });
  }
  // tslint:disable-next-line:typedef
  ngDoCheck() {
    console.log('ParentComponent:DoCheck');
    this.searchText = this.breedService.getSearchText();
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewChecked() {
    console.log('ParentComponent:AfterViewChecked');
  }

}
