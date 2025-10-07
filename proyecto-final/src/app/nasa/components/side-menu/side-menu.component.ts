import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  menuOptions = [
    {
      label: 'Dashboard',
      icon: '🏠',
      route: '/nasa/dashboard'
    },
    {
      label: 'APOD',
      icon: '🌌',
      route: '/nasa/apod',
      description: 'Imagen Astronómica del Día'
    },
    {
      label: 'Mars Rover',
      icon: '🔴',
      route: '/nasa/mars-rover',
      description: 'Fotos de Marte'
    },
    {
      label: 'Near Earth Objects',
      icon: '☄️',
      route: '/nasa/neo',
      description: 'Objetos Cercanos'
    }
  ];
}
