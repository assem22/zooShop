import { Component, OnInit } from '@angular/core';
import {Breed} from '../model/breed';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  pet: Breed;
  searchText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
