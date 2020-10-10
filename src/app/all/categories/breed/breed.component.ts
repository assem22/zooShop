import {Component, Input, OnInit, OnChanges, AfterContentChecked, DoCheck} from '@angular/core';
import {Breed} from '../../model/breed';
import {Router} from '@angular/router';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit, OnChanges, AfterContentChecked, DoCheck {
  @Input() searchText: string;
  clickedBreed: number;
  listOfBreed: Breed[] = [
    {id: 1, name: 'Breed of pet 1', image: 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 2, name: 'Breed of pet 2', image: 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 3, name: 'Breed of pet 3', image: 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 4, name: 'Breed of pet 4', image: 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 5, name: 'Breed of pet 5', image: 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 6, name: 'Breed of pet 6', image: 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'}
  ];

  showChild = false;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnChanges() { console.log('ParentComponent:OnChanges'); }
  // tslint:disable-next-line:typedef
  ngDoCheck() { console.log('ParentComponent:DoCheck'); }
  // tslint:disable-next-line:typedef
  ngAfterContentChecked() { console.log('ParentComponent:AfterContentChecked'); }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showCertainBreeds(item: boolean, id: number){
    // this.showChild = !this.showChild;
    this.showChild = item;
    this.clickedBreed = id;
  }

  // tslint:disable-next-line:typedef
  setClickedBreed(id: number){
    this.clickedBreed = id;
  }

}
