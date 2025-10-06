import { Component, input, output } from '@angular/core';

@Component({
  selector: 'gifs-search-history',
  imports: [],
  templateUrl: './search-history.component.html',
  styles: ``
})
export class SearchHistoryComponent {
  searchHistory = input.required<string[]>();
  onSearchFromHistory = output<string>();
  onClearHistory = output<void>();

  searchFromHistory(query: string) {
    this.onSearchFromHistory.emit(query);
  }

  clearHistory() {
    this.onClearHistory.emit();
  }
}
