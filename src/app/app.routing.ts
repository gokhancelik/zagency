import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/loggedin.guard';
import { Login } from './pages/login';

export const routes: Routes = [
  { path: '', redirectTo: 'pages/users', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages/users' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
