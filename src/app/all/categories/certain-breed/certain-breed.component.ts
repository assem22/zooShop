import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  Output, AfterViewChecked
} from '@angular/core';
import {Breed} from '../../model/breed';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-certain-breed',
  templateUrl: './certain-breed.component.html',
  styleUrls: ['./certain-breed.component.css']
})
// tslint:disable-next-line:max-line-length
export class CertainBreedComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, AfterViewChecked{
  @Input() searchText: string;
  @Input() num: number;
  @Output() showChild: EventEmitter<boolean> = new EventEmitter();

  listOfBreed1: Breed[] = [
    {id: 1, name: 'Certain pet 1', image: 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 2, name: 'Certain pet 2', image: 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 3, name: 'Certain pet 3', image: 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 4, name: 'Certain pet 4', image: 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 5, name: 'Certain pet 5', image: 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 6, name: 'Certain pet 6', image: 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'}
  ];

  listOfBreed2: Breed[] = [
    {id: 1, name: 'Certain pet 1', image: 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 2, name: 'Certain pet 2', image: 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 3, name: 'Certain pet 3', image: 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 4, name: 'Certain pet 4', image: 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 5, name: 'Certain pet 5', image: 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 6, name: 'Certain pet 6', image: 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'}
  ];

  listOfBreed3: Breed[] = [
    {id: 1, name: 'Certain pet 1', image: 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 2, name: 'Certain pet 2', image: 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 3, name: 'Certain pet 3', image: 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 4, name: 'Certain pet 4', image: 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 5, name: 'Certain pet 5', image: 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 6, name: 'Certain pet 6', image: 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'}
  ];

  listOfBreed4: Breed[] = [
    {id: 1, name: 'Certain pet 1', image: 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 2, name: 'Certain pet 2', image: 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 3, name: 'Certain pet 3', image: 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 4, name: 'Certain pet 4', image: 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 5, name: 'Certain pet 5', image: 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 6, name: 'Certain pet 6', image: 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'}
  ];

  listOfBreed5: Breed[] = [
    {id: 1, name: 'Certain pet 1', image: 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 2, name: 'Certain pet 2', image: 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 3, name: 'Certain pet 3', image: 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 4, name: 'Certain pet 4', image: 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 5, name: 'Certain pet 5', image: 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 6, name: 'Certain pet 6', image: 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'}
  ];

  listOfBreed6: Breed[] = [
    {id: 1, name: 'Certain pet 1', image: 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 2, name: 'Certain pet 2', image: 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 3, name: 'Certain pet 3', image: 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 4, name: 'Certain pet 4', image: 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 5, name: 'Certain pet 5', image: 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'},
    {id: 6, name: 'Certain pet 6', image: 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', information: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'}
  ];

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnChanges() { console.log('ChildComponent:OnChanges'); }
  // tslint:disable-next-line:typedef
  ngOnInit() { console.log('ChildComponent:OnInit'); }
  // tslint:disable-next-line:typedef
  ngDoCheck() { console.log('ChildComponent:DoCheck'); }
  // tslint:disable-next-line:typedef
  ngAfterContentInit() { console.log('ChildComponent:AfterContentInit'); }
  // tslint:disable-next-line:typedef
  ngAfterContentChecked(){console.log('ChildComponent:AfterContentChecked'); }
  // tslint:disable-next-line:typedef
  ngAfterViewInit() { console.log('ChildComponent:AfterViewInit'); }
  // tslint:disable-next-line:typedef
  ngAfterViewChecked() { console.log('ChildComponent:AfterViewChecked'); }
  // tslint:disable-next-line:typedef
  ngOnDestroy() { console.log('ChildComponent:OnDestroy'); }


  // tslint:disable-next-line:typedef
  hideChild(){
    this.showChild.emit(false);
  }
}
