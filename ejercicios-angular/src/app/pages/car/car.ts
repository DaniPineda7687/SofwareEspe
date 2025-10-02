import {Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-car',
  templateUrl: './car.html',
  styleUrl: './car.css',
  imports: [UpperCasePipe]
})
export class CarComponent {
  brand = signal('Renault');
  student = signal('Pepito perez - codigo');
  year = signal(2020);
  getCarDescription = computed(()=>`${this.brand()} - ${this.year()}`);
  studentCapitalized = computed(() => capitalizeWords(this.student()));
  
  changeCar() {
    this.brand.set('Kia');
    this.year.set(2021);
  }

  resetForm() {
    this.brand.set('Renault');
    this.year.set(2020);
  }

  changeYear() {
    this.year.set(2025);
  }
}

function capitalizeWords(text: string): string {
  return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}