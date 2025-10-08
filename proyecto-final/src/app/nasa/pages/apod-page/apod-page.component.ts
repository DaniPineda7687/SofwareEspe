import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { DataListComponent } from '../../components/data-list/data-list.component';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-apod-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SearchFormComponent,
    DataListComponent
  ],
  templateUrl: './apod-page.component.html',
  styleUrl: './apod-page.component.css'
})
export class ApodPageComponent implements OnInit {
  private nasaService = inject(NasaService);

  apodData = this.nasaService.apodData;
  isLoading = this.nasaService.isLoading;

  ngOnInit(): void {
    this.nasaService.loadTodayApod();
  }

  onSearch(searchData: any): void {
    const { mode, date, start_date, end_date, count } = searchData;

    if (mode === 'single' && date) {
      this.nasaService.loadApodByDate(date);
    } else if (mode === 'range' && start_date && end_date) {
      this.nasaService.loadApodRange(start_date, end_date);
    }
  }

  searchFormConfig = {
    apiType: 'apod' as const
  };
}
