import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  singleMovie: object;
  getImgDomain = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
  loading = false;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.movieService.getSingleMovie(this.id).then(data => {
      this.singleMovie = data;
      this.loading = false;

    });
  }

}
