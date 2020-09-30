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

@Component({
  selector: 'app-certain-breed',
  templateUrl: './certain-breed.component.html',
  styleUrls: ['./certain-breed.component.css']
})
export class CertainBreedComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, AfterViewChecked{
  @Input() searchText: string;
  @Output() showChild: EventEmitter<boolean> = new EventEmitter();
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
    this.showChild.emit();
  }
}
