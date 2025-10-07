import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nasa-side-menu-options',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './side-menu-options.component.html',
  styles: ``
})
export class SideMenuOptionsComponent {

  menuOptions = [
    {
      label: 'APOD',
      description: 'Astronomy Picture of the Day',
      route: '/dashboard/apod',
      icon: '🌟'
    },
    {
      label: 'Mars Rover',
      description: 'Mars Rover Photos',
      route: '/dashboard/mars-rover',
      icon: '🔴'
    },
    {
      label: 'Near Earth Objects',
      description: 'Asteroids & Comets',
      route: '/dashboard/neo',
      icon: '☄️'
    }
  ];

}