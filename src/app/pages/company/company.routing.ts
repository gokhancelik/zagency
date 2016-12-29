import { Route, RouterModule } from '@angular/router';

import { CompanyListComponent, CompanyComponent } from './index';
import { LoggedInGuard } from '../../guards/loggedin.guard';

export const CompanyRoutes: Route[] = [
	{
		path: '',
		component: CompanyComponent,
		children: [
			{
				path: 'list',
				component: CompanyListComponent
			}

		],
		canActivate: [LoggedInGuard]
	}
];
export const routing = RouterModule.forChild(CompanyRoutes);
