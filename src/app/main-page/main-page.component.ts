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

  constructor(private api: MoviesService) { }
  loadPopularMovies() {
    this.api.popularMovies().then((result: any) => {
      this.data = result.results;
    });
  }

  ngOnInit() {
  }

}
