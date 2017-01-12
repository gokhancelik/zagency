import { UserRoutes } from './users/user.routing';
import { Routes, RouterModule } from '@angular/router';
import { Admin } from './admin.component';
import { AdminRootComponent } from './admin.root.component';
import { LoggedInGuard } from '../security/guards/loggedin.guard';
// noinspection TypeScriptValidateTypes
const routes: Routes = [

  {
    path: 'admin',
    component: AdminRootComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => System.import('./login/login.module')
      },

      {
        path: 'register',
        loadChildren: () => System.import('./register/register.module')
      },
      {
        path: '',
        component: Admin,
        children: [
          {
            canActivate: [LoggedInGuard],
            path: 'tours',
            loadChildren: () => System.import('./tours/tour.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'tourCategories',
            loadChildren: () => System.import('./tourCategories/tourCategory.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'companies',
            loadChildren: () => System.import('./company/company.module')
          },
          // ...UserRoutes,
          {
            canActivate: [LoggedInGuard],
            path: 'users',
            loadChildren: () => System.import('./users/user.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'priceTypes',
            loadChildren: () => System.import('./priceTypes/priceType.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'b2b',
            loadChildren: () => System.import('./b2bs/b2b.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'specTypes',
            loadChildren: () => System.import('./specTypes/specType.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'companySpecs',
            loadChildren: () => System.import('./companySpecs/companySpec.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'tourScheduleSpecs',
            loadChildren: () => System.import('./tourScheduleSpecs/tourScheduleSpec.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'currencyTypes',
            loadChildren: () => System.import('./currencyTypes/currencyType.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'imageSizes',
            loadChildren: () => System.import('./imageSizes/imageSize.module')
          },
          {
            canActivate: [LoggedInGuard],
            path: 'roles',
            loadChildren: () => System.import('./roles/role.module')
          }
        ]
      },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
