import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'introduccion',
        title: 'Introducción',
        loadComponent: () => import('./dashboard/pages/initial-page/initial-page.component').then(m => m.InitialPageComponent),
      },
      {
        path: 'texto',
        title: 'Texto',
        loadComponent: () => import('./dashboard/pages/texts-page/texts-page.component').then(m => m.TextsPageComponent),
      }
    ]
  }
];
