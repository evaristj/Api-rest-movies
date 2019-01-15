import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  data: Array<object>;
  imgDomain = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

  constructor(private api: MoviesService) { }
  loadPopularMovies() {
    this.api.popularMovies().then((result: any) => {
      this.data = result.results;
    });
  }
  loadTrendingMovies() {
    this.api.trendingMovies().then((result: any) => {
      this.data = result.results;
    });
  }

  ngOnInit() {
  }

}
