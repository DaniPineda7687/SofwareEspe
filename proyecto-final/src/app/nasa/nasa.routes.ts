import { Routes } from '@angular/router';

export const NASA_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent),
    title: 'NASA Data Explorer - Dashboard'
  },
  {
    path: 'apod',
    loadComponent: () => import('./pages/apod-page/apod-page.component').then(m => m.ApodPageComponent),
    title: 'NASA - Imagen Astronómica del Día'
  },
  {
    path: 'mars-rover',
    loadComponent: () => import('./pages/mars-rover-page/mars-rover-page.component').then(m => m.MarsRoverPageComponent),
    title: 'NASA - Fotos del Mars Rover'
  },
  {
    path: 'neo',
    loadComponent: () => import('./pages/neo-page/neo-page.component').then(m => m.NeoPageComponent),
    title: 'NASA - Objetos Cercanos a la Tierra'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];