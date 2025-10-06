import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '@app/gifs/components/gif-list/gif-list.component';
import { GifsService } from '@app/gifs/services/gifs.service';


@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styles: ``
})
export default class TrendingPageComponent {
  gifService = inject(GifsService);
  //gifs = signal<string[]>(imageUrls);
}
