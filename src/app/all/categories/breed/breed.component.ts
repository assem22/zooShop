import {
  Component,
  Input,
  OnInit,
  OnChanges,
  AfterContentChecked,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  AfterViewChecked
} from '@angular/core';
import {Breed} from '../../model/breed';
import {Router} from '@angular/router';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, AfterViewChecked {
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
  ngOnInit() { console.log('ParentComponent:OnInit'); }
  // tslint:disable-next-line:typedef
  ngDoCheck() { console.log('ParentComponent:DoCheck'); }
  // tslint:disable-next-line:typedef
  ngAfterContentInit() { console.log('ParentComponent:AfterContentInit'); }
  // tslint:disable-next-line:typedef
  ngAfterContentChecked() { console.log('ParentComponent:AfterContentChecked'); }
  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewInit() { console.log('ParentComponent:AfterViewInit'); }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewChecked() { console.log('ParentComponent:AfterViewChecked'); }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnDestroy() { console.log('ParentComponent:OnDestroy'); }



  // tslint:disable-next-line:typedef
  showCertainBreeds(item: boolean, id: number){
    // this.showChild = !this.showChild;
    this.showChild = item;
    this.clickedBreed = id;
  }

}
