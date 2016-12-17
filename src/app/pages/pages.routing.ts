import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },

  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },

  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'tours', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
      { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
      { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
      { path: 'maps', loadChildren: () => System.import('./maps/maps.module') },
      {
        path: 'tours',
        loadChildren: () => System.import('./tours/tour.module')
      },
      {
        path: 'tourTypes',
        loadChildren: () => System.import('./tourType/tourType.module')
      },
       {
        path: 'companies',
        loadChildren: () => System.import('./company/company.module')
      },
      {
        path: 'priceTypes',
        loadChildren: () => System.import('./priceTypes/priceType.module')
      },
      {
        path: 'currencyTypes',
        loadChildren: () => System.import('./currencyTypes/currencyType.module')
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
