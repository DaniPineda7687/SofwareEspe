import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gifs-search-form',
  imports: [FormsModule],
  templateUrl: './search-form.component.html',
  styles: ``
})
export class SearchFormComponent {
  searchQuery = signal<string>('');
  onSearch = output<string>();

  handleSubmit() {
    const query = this.searchQuery().trim();
    if (query) {
      this.onSearch.emit(query);
    }
  }

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }
}
