import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { CarComponent } from './pages/car/car';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent,
    },
    {
        path: 'car',
        component: CarComponent,
    },
    {
        path: 'dragonball',
        component: Dragonball,
    },
    {
        path: 'dragonball-super',
        component: DragonballSuper,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
