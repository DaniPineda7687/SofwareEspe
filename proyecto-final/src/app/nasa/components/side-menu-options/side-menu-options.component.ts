import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nasa-side-menu-options',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {
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
    },
    {
      label: 'InSight Weather',
      icon: '🌡️',
      route: '/nasa/insight',
      description: 'Clima en Marte'
    }
  ];
}
