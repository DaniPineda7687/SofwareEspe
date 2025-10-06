import { Component, inject } from '@angular/core';
import { GifsService } from '@app/gifs/services/gifs.service';
import { SearchFormComponent } from '@app/gifs/components/search-form/search-form.component';
import { SearchHistoryComponent } from '@app/gifs/components/search-history/search-history.component';
import { GifListComponent } from '@app/gifs/components/gif-list/gif-list.component';

@Component({
  selector: 'app-search-page',
  imports: [
    SearchFormComponent,
    SearchHistoryComponent,
    GifListComponent
  ],
  templateUrl: './search-page.component.html',
  styles: ``
})
export default class SearchPageComponent {
  private gifsService = inject(GifsService);

  get searchGifs() {
    return this.gifsService.searchGifs;
  }

  get searchHistory() {
    return this.gifsService.searchHistory;
  }

  get isLoading() {
    return this.gifsService.isLoading;
  }

  onSearch(query: string) {
    this.gifsService.searchGifsByQuery(query);
  }

  onSearchFromHistory(query: string) {
    this.gifsService.searchGifsByQuery(query);
  }

  onClearHistory() {
    this.gifsService.clearSearchHistory();
  }
}
