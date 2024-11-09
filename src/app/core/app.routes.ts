import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/resumen/resumen.component').then((m) => m.ResumenComponent),
  },
  {
    path: 'comics',
    loadComponent: () =>
      import('@pages/comics/comics.component').then((m) => m.ComicsComponent),
  },
  {
    path: 'juegos',
    loadComponent: () =>
      import('@pages/juegos/juegos.component').then((m) => m.JuegosComponent),
  }
];
