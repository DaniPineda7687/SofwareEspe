import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface SearchConfig {
  apiType: 'apod' | 'mars-rover' | 'neo';
}

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent implements OnInit {
  @Input() config: SearchConfig = { apiType: 'apod' };
  @Input() isLoading: boolean = false;

  @Output() search = new EventEmitter<any>();

  apodDate: string = '';
  apodStartDate: string = '';
  apodEndDate: string = '';
  apodSearchMode: 'single' | 'range' = 'single';

  marsRover: string = 'curiosity';
  marsSearchMode: 'sol' | 'earth_date' = 'sol';
  marsSol: number = 1000;
  marsEarthDate: string = '';
  marsCamera: string = '';

  neoStartDate: string = '';
  neoEndDate: string = '';

  ngOnInit() {
    const today = new Date().toISOString().split('T')[0];
    this.apodDate = today;
    this.marsEarthDate = today;
    this.neoStartDate = today;
    this.neoEndDate = today;
  }

  onApodSearch() {
    const searchData: any = {
      apiType: 'apod',
      mode: this.apodSearchMode
    };

    if (this.apodSearchMode === 'single' && this.apodDate) {
      searchData.date = this.apodDate;
    } else if (this.apodSearchMode === 'range' && this.apodStartDate && this.apodEndDate) {
      searchData.start_date = this.apodStartDate;
      searchData.end_date = this.apodEndDate;
    }

    this.search.emit(searchData);
  }

  onMarsRoverSearch() {
    const searchData: any = {
      apiType: 'mars-rover',
      rover: this.marsRover,
      mode: this.marsSearchMode
    };

    if (this.marsSearchMode === 'sol') {
      searchData.sol = this.marsSol;
    } else if (this.marsSearchMode === 'earth_date' && this.marsEarthDate) {
      searchData.earth_date = this.marsEarthDate;
    }

    if (this.marsCamera) {
      searchData.camera = this.marsCamera;
    }

    this.search.emit(searchData);
  }

  onNeoSearch() {
    if (this.neoStartDate && this.neoEndDate) {
      const start = new Date(this.neoStartDate);
      const end = new Date(this.neoEndDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 7) {
        alert('El rango de fechas no puede ser mayor a 7 días');
        return;
      }

      this.search.emit({
        apiType: 'neo',
        start_date: this.neoStartDate,
        end_date: this.neoEndDate
      });
    }
  }

  rovers = [
    { value: 'curiosity', label: 'Curiosity' },
    { value: 'opportunity', label: 'Opportunity' },
    { value: 'spirit', label: 'Spirit' },
    { value: 'perseverance', label: 'Perseverance' }
  ];

  cameras = [
    { value: '', label: 'Todas las Cámaras' },
    { value: 'FHAZ', label: 'FHAZ - Front Hazard Avoidance' },
    { value: 'RHAZ', label: 'RHAZ - Rear Hazard Avoidance' },
    { value: 'MAST', label: 'MAST - Mast Camera' },
    { value: 'CHEMCAM', label: 'CHEMCAM - Chemistry Camera' },
    { value: 'MAHLI', label: 'MAHLI - Hand Lens Imager' },
    { value: 'MARDI', label: 'MARDI - Mars Descent Imager' },
    { value: 'NAVCAM', label: 'NAVCAM - Navigation Camera' },
    { value: 'PANCAM', label: 'PANCAM - Panoramic Camera' },
    { value: 'MINITES', label: 'MINITES - Miniature Thermal Emission' }
  ];
}
