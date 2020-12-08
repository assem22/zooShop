import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './all/home/home.component';
import {PetDetailComponent} from './all/pet-detail/pet-detail.component';
import {LoginComponent} from './all/userAuthentication/login/login.component';
import {RegisterComponent} from './all/userAuthentication/register/register.component';
import {BasketComponent} from './all/basket/basket.component';
import {OrderComponent} from './all/order/order.component';
import {ErrorComponent} from './error/error.component';
import {ExitOrderGuard} from './exit.order.guard';
import {AuthClass} from './auth.guard';
import {HomeNavbarComponent} from './static/home-navbar/home-navbar.component';
import {FavoriteListComponent} from './all/favorite-list/favorite-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-home-navbar', component: HomeNavbarComponent},
  {path: 'register', component: RegisterComponent, canDeactivate: [ExitOrderGuard]},
  {path: 'basket', component: BasketComponent, canActivate: [AuthClass]},
  {path: 'favorites', component: FavoriteListComponent, canActivate: [AuthClass]},
  {path: 'basket/order', component: OrderComponent, canDeactivate: [ExitOrderGuard]},
  {path: 'categories/:id', canActivate: [AuthClass], loadChildren: () => import('./all/categories/categories.module')
      .then(allModule => allModule.CategoriesModule)},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
