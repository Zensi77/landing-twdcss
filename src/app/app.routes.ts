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
      },
      {
        path: 'responsive',
        title: 'Responsivo',
        loadComponent: () => import('./dashboard/pages/responsive-page/responsive-page.component').then(m => m.ResponsivePageComponent),
      },
      {
        path: 'animation',
        title: 'Animaciones',
        loadComponent: () => import('./dashboard/pages/animations-page/animations-page.component').then(m => m.AnimationsPageComponent),
      },
      {
        path: 'components',
        title: 'Componentes',
        loadComponent: () => import('./dashboard/pages/helpers-page/helpers-page.component').then(m => m.HelpersPageComponent),
      },
    ]
  }
];
