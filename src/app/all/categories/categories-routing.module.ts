import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories.component';
import {CertainBreedComponent} from './certain-breed/certain-breed.component';
import {BreedComponent} from './breed/breed.component';


const routes: Routes = [
  {
    path: '', component: CategoriesComponent,
    children: [
      {path: '', component: BreedComponent},
      {path: 'certain', component: CertainBreedComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
