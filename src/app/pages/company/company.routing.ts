import { Route, RouterModule } from '@angular/router';

import { CompanyListComponent, CompanyComponent } from './index';

export const CompanyRoutes: Route[] = [
	{
		path: '',
		component: CompanyComponent,
		children: [
			{
				path: 'list',
				component: CompanyListComponent
			}
			
		]
	}
];
export const routing = RouterModule.forChild(CompanyRoutes);
