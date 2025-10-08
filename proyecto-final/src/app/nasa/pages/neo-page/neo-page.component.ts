import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { DataListComponent } from '../../components/data-list/data-list.component';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-neo-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SearchFormComponent,
    DataListComponent
  ],
  templateUrl: './neo-page.component.html',
  styleUrl: './neo-page.component.css'
})
export class NeoPageComponent implements OnInit {
  private nasaService = inject(NasaService);

  neoData = this.nasaService.neoData;
  isLoading = this.nasaService.isLoading;

  searchFormConfig = {
    apiType: 'neo' as const
  };

  ngOnInit(): void {
    this.nasaService.loadTodayNeos();
  }

  onSearch(searchData: any): void {
    const { apiType, start_date, end_date } = searchData;

    if (start_date && end_date) {
      this.nasaService.loadNeoFeed(start_date, end_date);
    }
  }

  getHazardousCount(): number {
    return this.neoData().filter(neo => neo.isPotentiallyHazardous).length;
  }

  getSafeCount(): number {
    return this.neoData().filter(neo => !neo.isPotentiallyHazardous).length;
  }
}
