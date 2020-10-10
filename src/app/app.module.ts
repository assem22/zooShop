import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './all/home/home.component';
import {NavbarComponent} from './static/navbar/navbar.component';
import {FooterComponent} from './static/footer/footer.component';
import {CategoriesModule} from './all/categories/categories.module';
import {PetDetailComponent} from './all/pet-detail/pet-detail.component';
import {RegisterComponent} from './all/register/register.component';
import {LoginComponent} from './all/login/login.component';
import {OrderComponent} from './all/order/order.component';
import {BasketComponent} from './all/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PetDetailComponent,
    RegisterComponent,
    LoginComponent,
    OrderComponent,
    BasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
