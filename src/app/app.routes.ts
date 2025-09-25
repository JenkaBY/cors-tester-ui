import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/request/request.module').then(m => m.RequestModule),
  }
];
