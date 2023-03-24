import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FavouritepageComponent } from './components/favouritepage/favouritepage.component';
import { RescentpageComponent } from './components/rescentpage/rescentpage.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { WeatherdetailsComponent } from './components/weatherdetails/weatherdetails.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomepageComponent,
    FavouritepageComponent,
    RescentpageComponent,
    WeatherdetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatSlideToggleModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
