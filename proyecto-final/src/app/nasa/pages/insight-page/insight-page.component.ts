import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-insight-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './insight-page.component.html',
  styleUrl: './insight-page.component.css'
})
export class InsightPageComponent implements OnInit {
  private nasaService = inject(NasaService);

  insightWeather = this.nasaService.insightWeather;
  isLoading = this.nasaService.isLoading;

  ngOnInit(): void {
    this.nasaService.loadInsightWeather();
  }

  getSeasonIcon(season: string): string {
    switch (season.toLowerCase()) {
      case 'winter':
        return '❄️';
      case 'spring':
        return '🌸';
      case 'summer':
        return '☀️';
      case 'autumn':
      case 'fall':
        return '🍂';
      default:
        return '🌍';
    }
  }

  getSeasonColor(season: string): string {
    switch (season.toLowerCase()) {
      case 'winter':
        return 'from-blue-50 to-blue-100 border-blue-200';
      case 'spring':
        return 'from-green-50 to-green-100 border-green-200';
      case 'summer':
        return 'from-yellow-50 to-yellow-100 border-yellow-200';
      case 'autumn':
      case 'fall':
        return 'from-orange-50 to-orange-100 border-orange-200';
      default:
        return 'from-gray-50 to-gray-100 border-gray-200';
    }
  }
}
