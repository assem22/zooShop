import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Breed} from '../model/breed';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
// tslint:disable-next-line:max-line-length
export class CategoriesComponent implements OnInit, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, AfterViewChecked {

  pet: Breed;
  searchText: string;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnChanges() { console.log('CategoryComponent:OnChanges'); }
  // tslint:disable-next-line:typedef
  ngOnInit() { console.log('CategoryComponent:OnInit'); }
  // tslint:disable-next-line:typedef
  ngAfterContentInit() { console.log('CategoryComponent:AfterContentInit'); }
  // tslint:disable-next-line:typedef
  ngAfterContentChecked(){console.log('CategoryComponent:AfterContentChecked'); }
  // tslint:disable-next-line:typedef
  ngAfterViewInit() { console.log('CategoryComponent:AfterViewInit'); }
  // tslint:disable-next-line:typedef
  ngAfterViewChecked() { console.log('CategoryComponent:AfterViewChecked'); }
  // tslint:disable-next-line:typedef
  ngOnDestroy() { console.log('CategoryComponent:OnDestroy'); }

}
