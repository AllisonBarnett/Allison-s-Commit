import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { StlCoffeeComponent } from './stl-coffee/stl-coffee.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PublicReviewsComponent } from './public-reviews/public-reviews.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    StlCoffeeComponent,
    ReviewsComponent,
    PublicReviewsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcUSugiFf5ZW-JTnDERKVuKDUdfqbvj9Y',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
