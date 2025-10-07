import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {
  @Input() data: any[] = [];
  @Input() dataType: 'apod' | 'mars' | 'neo' = 'apod';
  @Input() title: string = 'Results';
  @Input() emptyMessage: string = 'No data available';
  @Input() isLoading: boolean = false;

  getItemTitle(item: any): string {
    switch (this.dataType) {
      case 'apod':
        return item.title;
      case 'mars':
        return `${item.roverName} - ${item.cameraFullName}`;
      case 'neo':
        return item.name;
      default:
        return 'Unknown';
    }
  }

  getItemSubtitle(item: any): string {
    switch (this.dataType) {
      case 'apod':
        return item.date;
      case 'mars':
        return `Sol ${item.sol} - ${item.earthDate}`;
      case 'neo':
        return `${item.closeApproachDate} - ${item.isPotentiallyHazardous ? 'Potentially Hazardous' : 'Safe'}`;
      default:
        return '';
    }
  }

  getItemImage(item: any): string | null {
    switch (this.dataType) {
      case 'apod':
        return item.mediaType === 'image' ? item.url : null;
      case 'mars':
        return item.imageUrl;
      case 'neo':
        return null;
      default:
        return null;
    }
  }

  getItemDescription(item: any): string {
    switch (this.dataType) {
      case 'apod':
        return item.explanation.substring(0, 150) + (item.explanation.length > 150 ? '...' : '');
      case 'mars':
        return `Camera: ${item.cameraName} | Status: ${item.roverStatus}`;
      case 'neo':
        return `Diameter: ${item.estimatedDiameterKm.min.toFixed(3)} - ${item.estimatedDiameterKm.max.toFixed(3)} km | Velocity: ${parseFloat(item.velocityKmH).toFixed(0)} km/h`;
      default:
        return '';
    }
  }

  getBadgeColor(item: any): string {
    switch (this.dataType) {
      case 'apod':
        return item.mediaType === 'video' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800';
      case 'mars':
        return item.roverStatus === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
      case 'neo':
        return item.isPotentiallyHazardous ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getBadgeText(item: any): string {
    switch (this.dataType) {
      case 'apod':
        return item.mediaType;
      case 'mars':
        return item.roverStatus;
      case 'neo':
        return item.isPotentiallyHazardous ? 'Hazardous' : 'Safe';
      default:
        return '';
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  getMissDistanceFormatted(item: any): string {
    return (parseFloat(item.missDistanceKm) / 1000000).toFixed(2);
  }
}