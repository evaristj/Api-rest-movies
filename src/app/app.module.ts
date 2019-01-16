import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchSingleMovieComponent } from './search-single-movie/search-single-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MovieDetailComponent,
    SearchSingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
