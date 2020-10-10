import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from './categories.component';
import {CategoriesRoutingModule} from './categories-routing.module';
import { BreedComponent } from './breed/breed.component';
import { CertainBreedComponent } from './certain-breed/certain-breed.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from '../../summary.pipe';

@NgModule({
  declarations: [CategoriesComponent, BreedComponent, CertainBreedComponent, SummaryPipe],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
  ]
})
export class CategoriesModule { }
