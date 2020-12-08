import {
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';
import {Breed} from '../../model/breed';
import {BreedService} from '../../../services/breed.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {User} from '../../model/user';
import {AuthService} from '../../../services/auth.service';

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
  user: User;
  // breedName: string;

  listOfBreed1: Breed[];
  listOfBreed2: Breed[];
  listOfBreed3: Breed[];
  listOfBreed4: Breed[];
  listOfBreed5: Breed[];
  listOfBreed6: Breed[];

  constructor(private breedService: BreedService, private activateRoute: ActivatedRoute,
              private router: Router, private accountService: AuthService) {
    this.subscription = activateRoute.params.subscribe(params => this.num = params['id']);
    this.user = this.accountService.userValue;
  }

  // tslint:disable-next-line:typedef
  ngOnChanges() {
    console.log('ChildComponent:OnChanges');
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('ChildComponent:OnInit');
    this.getListOfBreed1();
    this.getListOfBreed2();
    this.getListOfBreed3();
    this.getListOfBreed4();
    this.getListOfBreed5();
    this.getListOfBreed6();
    // this.breedService.setShowChild(this.showChild);
  }
  // tslint:disable-next-line:typedef
  ngDoCheck() {
    console.log('ChildComponent:DoCheck');
    this.searchText = this.breedService.getSearchText();
    // this.breedName = this.breedService.getBreedName();
    // this.num = this.breedService.getNum();
  }

  // tslint:disable-next-line:typedef
  getListOfBreed1() {
    // this.breedService.getListOfBreed1().subscribe(res => {
    //   this.listOfBreed1 = res;
    // });
  }

  // tslint:disable-next-line:typedef
  getListOfBreed2() {
    // this.breedService.getListOfBreed2().subscribe(res => {
    //   this.listOfBreed2 = res;
    // });
  }

  // tslint:disable-next-line:typedef
  getListOfBreed3() {
    // this.breedService.getListOfBreed3().subscribe(res => {
    //   this.listOfBreed3 = res;
    // });
  }

  // tslint:disable-next-line:typedef
  getListOfBreed4() {
    // this.breedService.getListOfBreed4().subscribe(res => {
    //   this.listOfBreed4 = res;
    // });
  }

  // tslint:disable-next-line:typedef
  getListOfBreed5() {
    // this.breedService.getListOfBreed5().subscribe(res => {
    //   this.listOfBreed5 = res;
    // });
  }

  // tslint:disable-next-line:typedef
  getListOfBreed6() {
    // this.breedService.getListOfBreed6().subscribe(res => {
    //   this.listOfBreed6 = res;
    // });
  }

  // tslint:disable-next-line:typedef
  redirectToDetail(){
    this.router.navigate(['../../pet-details']);
  }
}
