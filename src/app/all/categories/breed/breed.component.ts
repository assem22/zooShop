import {Component, Input, OnInit} from '@angular/core';
import {Breed} from '../../model/breed';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {
  @Input() searchText: string;
  listOfBreed: Breed[] = [
    {id: 1, name: 'Breed of pet 1', image: 'https://mdbootstrap.com/img/Photos/Others/img3.jpg'},
    {id: 2, name: 'Breed of pet 2', image: 'https://mdbootstrap.com/img/Photos/Others/img9.jpg'},
    {id: 3, name: 'Breed of pet 3', image: 'https://mdbootstrap.com/img/Photos/Others/img4.jpg'},
    {id: 4, name: 'Breed of pet 4', image: 'https://mdbootstrap.com/img/Photos/Others/img5.jpg'},
    {id: 5, name: 'Breed of pet 5', image: 'https://mdbootstrap.com/img/Photos/Others/img10.jpg'},
    {id: 6, name: 'Breed of pet 6', image: 'https://mdbootstrap.com/img/Photos/Others/img8.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
