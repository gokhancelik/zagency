import { ClientComponent } from './client.component';
import { UserRoutes } from './users/user.routing';
import { Routes, RouterModule } from '@angular/router';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: () => System.import('./login/login.module')
  // },

  // {
  //   path: 'register',
  //   loadChildren: () => System.import('./register/register.module')
  // },
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => System.import('./home/home.module')
      }
    ]
  },

];

export const routing = RouterModule.forChild(routes);
