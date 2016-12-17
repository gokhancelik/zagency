import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pages/tours/list', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/tours/list' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
