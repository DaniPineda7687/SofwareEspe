import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy-interface';
import { Gif } from '../interfaces/gif-interface';
import { GifMapper } from '../mapper/gif-mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);
  private environment = environment;
  trendingGifs = signal<Gif[]>([]);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    return this.http.get<GiphyResponse>(`${this.environment.urlBase}/gifs/trending`, {
      params: {
        api_key: this.environment.apiKey,
        limit: '40',
      }
    }).subscribe((response) => {
      const gifs = GifMapper.mapGiphyItemsToGifs(response.data);
      this.trendingGifs.set(gifs);
    });

  }
}
