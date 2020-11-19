import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './all/home/home.component';
import {PetDetailComponent} from './all/pet-detail/pet-detail.component';
import {LoginComponent} from './all/login/login.component';
import {RegisterComponent} from './all/register/register.component';
import {BasketComponent} from './all/basket/basket.component';
import {OrderComponent} from './all/order/order.component';
import {ErrorComponent} from './error/error.component';
import {ExitOrderGuard} from './exit.order.guard';
import {AuthClass} from './auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pet-details', component: PetDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canDeactivate: [ExitOrderGuard]},
  {path: 'basket', component: BasketComponent},
  {path: 'basket/order', component: OrderComponent, canDeactivate: [ExitOrderGuard]},
  {path: 'categories', canActivate: [AuthClass], loadChildren: () => import('./all/categories/categories.module').then(allModule => allModule.CategoriesModule)},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
