import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './all/home/home.component';
import {NavbarComponent} from './static/navbar/navbar.component';
import {FooterComponent} from './static/footer/footer.component';
import {PetDetailComponent} from './all/pet-detail/pet-detail.component';
import {RegisterComponent} from './all/userAuthentication/register/register.component';
import {LoginComponent} from './all/userAuthentication/login/login.component';
import {OrderComponent} from './all/order/order.component';
import {BasketComponent} from './all/basket/basket.component';
import { ErrorComponent } from './error/error.component';
import {ExitOrderGuard} from './exit.order.guard';
import {AuthService} from './services/auth.service';
import {AuthClass} from './auth.guard';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeNavbarComponent } from './static/home-navbar/home-navbar.component';
import {BreedService} from './services/breed.service';
import {LoggingService} from './services/logging.service';
import {FavoriteListComponent} from './all/favorite-list/favorite-list.component';

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
    HomeNavbarComponent,
    FavoriteListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    ExitOrderGuard,
    AuthService,
    AuthClass,
    BreedService,
    LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
