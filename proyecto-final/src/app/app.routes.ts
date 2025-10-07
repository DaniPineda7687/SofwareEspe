import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/nasa/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'nasa',
    loadChildren: () => import('./nasa/nasa.routes').then(m => m.NASA_ROUTES)
  },
  {
    path: '**',
    redirectTo: '/nasa/dashboard'
  }
];
