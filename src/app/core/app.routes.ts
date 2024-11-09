import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/resumen/resumen.component').then((m) => m.ResumenComponent),
  }
];
