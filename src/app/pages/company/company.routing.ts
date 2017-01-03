import { Route, RouterModule } from '@angular/router';

import {
	CompanyListComponent, CompanyComponent,
	CompanyEditComponent, CompanyAddComponent
} from './index';

export const CompanyRoutes: Route[] = [
	{
		path: '',
		component: CompanyComponent,
		children: [
			{
				path: 'list',
				component: CompanyListComponent
			},
			{
				path: 'edit/:id',
				component: CompanyEditComponent
			},
			{
				path: 'newCompany',
				component: CompanyAddComponent
			}

		]
	}
];
export const routing = RouterModule.forChild(CompanyRoutes);
