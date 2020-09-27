import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certain-breed',
  templateUrl: './certain-breed.component.html',
  styleUrls: ['./certain-breed.component.css']
})
export class CertainBreedComponent implements OnInit {
  @Input() searchText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
