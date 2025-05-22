import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '', // top of the route
    pathMatch: 'full', // match the full path
    loadComponent: () => {
        return import('./home/home.component').then((m) => m.HomeComponent);
    }
}];
