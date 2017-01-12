import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './guards/loggedin.guard';
import { Login } from './admin/login';

export const routes: Routes = [
  { path: '', redirectTo: 'admin/users', pathMatch: 'full' },
  // { path: '**', redirectTo: 'admin/users' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
