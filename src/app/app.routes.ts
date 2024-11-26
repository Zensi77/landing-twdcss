import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'inicio',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'introduccion',
        title: 'introducción',
        loadComponent: () => import('./dashboard/pages/initial-page/initial-page.component').then(m => m.InitialPageComponent),
      }
    ]
  }
];
