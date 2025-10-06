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
  searchGifs = signal<Gif[]>([]);
  searchHistory = signal<string[]>([]);
  isLoading = signal<boolean>(false);

  constructor() {
    this.loadTrendingGifs();
    this.loadSearchHistory();
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

  searchGifsByQuery(query: string) {
    if (!query.trim()) {
      this.searchGifs.set([]);
      return;
    }

    this.isLoading.set(true);

    return this.http.get<GiphyResponse>(`${this.environment.urlBase}/gifs/search`, {
      params: {
        api_key: this.environment.apiKey,
        q: query,
        limit: '40',
      }
    }).subscribe({
      next: (response) => {
        const gifs = GifMapper.mapGiphyItemsToGifs(response.data);
        this.searchGifs.set(gifs);
        this.addToSearchHistory(query);
        this.isLoading.set(false);
      },
      error: () => {
        this.searchGifs.set([]);
        this.isLoading.set(false);
      }
    });
  }

  private addToSearchHistory(query: string) {
    const normalizedQuery = query.toLowerCase().trim();
    const currentHistory = this.searchHistory();

    const filteredHistory = currentHistory.filter(item => item !== normalizedQuery);
    const newHistory = [normalizedQuery, ...filteredHistory].slice(0, 10);

    this.searchHistory.set(newHistory);
    this.saveSearchHistory();
  }

  private loadSearchHistory() {
    const history = localStorage.getItem('gifsSearchHistory');
    if (history) {
      this.searchHistory.set(JSON.parse(history));
    }
  }

  private saveSearchHistory() {
    localStorage.setItem('gifsSearchHistory', JSON.stringify(this.searchHistory()));
  }

  clearSearchHistory() {
    this.searchHistory.set([]);
    localStorage.removeItem('gifsSearchHistory');
  }
}
