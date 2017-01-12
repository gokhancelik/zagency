import { UserRoutes } from './users/user.routing';
import { Routes, RouterModule } from '@angular/router';
import { Admin } from './admin.component';
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
    path: 'admin',
    component: Admin,
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
      // ...UserRoutes,
      {
        path: 'users',
        loadChildren: () => System.import('./users/user.module')
      },
      {
        path: 'priceTypes',
        loadChildren: () => System.import('./priceTypes/priceType.module')
      },
      {
        path: 'b2b',
        loadChildren: () => System.import('./b2bs/b2b.module')
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
        path: 'imageSizes',
        loadChildren: () => System.import('./imageSizes/imageSize.module')
      },
      {
        path: 'roles',
        loadChildren: () => System.import('./roles/role.module')
      },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
