import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { DataListComponent } from '../../components/data-list/data-list.component';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-mars-rover-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SearchFormComponent,
    DataListComponent
  ],
  templateUrl: './mars-rover-page.component.html',
  styleUrl: './mars-rover-page.component.css'
})
export class MarsRoverPageComponent {
  private nasaService = inject(NasaService);

  marsPhotos = this.nasaService.marsPhotos;
  isLoading = this.nasaService.isLoading;

  onSearch(searchData: any): void {
    const { apiType, rover, mode, sol, earth_date, camera } = searchData;

    if (mode === 'sol') {
      if (camera) {
        this.nasaService.loadMarsRoverPhotosByCamera(rover, sol, camera);
      } else {
        this.nasaService.loadMarsRoverPhotosBySol(rover, sol);
      }
    } else if (mode === 'earth_date' && earth_date) {
      if (camera) {
        this.nasaService.loadMarsRoverPhotosByDate(rover, earth_date);
      } else {
        this.nasaService.loadMarsRoverPhotosByDate(rover, earth_date);
      }
    }
  }

  searchFormConfig = {
    apiType: 'mars-rover' as const
  };
}
