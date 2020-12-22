import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories.component';
import {CertainBreedComponent} from './certain-breed/certain-breed.component';
import {BreedComponent} from './breed/breed.component';
import {PetDetailComponent} from '../pet-detail/pet-detail.component';


const routes: Routes = [
  {
    path: '', component: CategoriesComponent,
    children: [
      {path: '', component: BreedComponent},
    ]
  },
  {path: 'detail/:id', component: PetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
