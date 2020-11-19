import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './all/home/home.component';
import {NavbarComponent} from './static/navbar/navbar.component';
import {FooterComponent} from './static/footer/footer.component';
import {PetDetailComponent} from './all/pet-detail/pet-detail.component';
import {RegisterComponent} from './all/register/register.component';
import {LoginComponent} from './all/login/login.component';
import {OrderComponent} from './all/order/order.component';
import {BasketComponent} from './all/basket/basket.component';
import { ErrorComponent } from './error/error.component';
import {ExitOrderGuard} from './exit.order.guard';
import {AuthService} from './services/auth.service';
import {AuthClass} from './auth.guard';

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
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ExitOrderGuard,
    AuthService,
    AuthClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
