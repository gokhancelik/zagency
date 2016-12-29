import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/loggedin.guard';
import { Login } from './pages/login';

export const routes: Routes = [
  { path: '', redirectTo: 'pages/tours/list', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/tours/list' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
