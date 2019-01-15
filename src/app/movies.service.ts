import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey = 'f278d69b62f15e306ca90e2799c0712d';
  popularEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  popularMovies() {
    return new Promise(resolve => {
      this.http.get(this.popularEndpoint).subscribe(result => {
        resolve(result);
      });
    });
  }
}
