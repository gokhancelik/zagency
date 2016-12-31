import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { LoggedInGuard } from '../security/guards/loggedin.guard';

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
    canActivate: [LoggedInGuard],
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'tours', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
      { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
      { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
      { path: 'maps', loadChildren: () => System.import('./maps/maps.module') },
      {
        path: 'tours',
        loadChildren: () => System.import('./tours/tour.module')
      },
      {
        path: 'tourCategories',
        loadChildren: () => System.import('./tourCategories/tourCategory.module')
      },
      {
        path: 'companies',
        loadChildren: () => System.import('./company/company.module')
      },
      {
        path: 'users',
        loadChildren: () => System.import('./users/user.module')
      },
      {
        path: 'priceTypes',
        loadChildren: () => System.import('./priceTypes/priceType.module')
      },
      {
        path: 'specTypes',
        loadChildren: () => System.import('./specTypes/specType.module')
      },
      {
        path: 'companySpecs',
        loadChildren: () => System.import('./companySpecs/companySpec.module')
      },
      {
        path: 'tourScheduleSpecs',
        loadChildren: () => System.import('./tourScheduleSpecs/tourScheduleSpec.module')
      },
      {
        path: 'currencyTypes',
        loadChildren: () => System.import('./currencyTypes/currencyType.module')
      },
      {
        path: 'photoLocationTypes',
        loadChildren: () => System.import('./photoLocationTypes/photoLocation.module')
      },
      {
        path: 'roles',
        loadChildren: () => System.import('./roles/role.module')
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
