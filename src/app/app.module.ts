import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { StlCoffeeComponent } from './stl-coffee/stl-coffee.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PublicReviewsComponent } from './public-reviews/public-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    StlCoffeeComponent,
    ReviewsComponent,
    PublicReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
