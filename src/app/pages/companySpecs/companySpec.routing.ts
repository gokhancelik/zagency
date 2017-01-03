import { Route, RouterModule } from '@angular/router';

import { CompanySpecListComponent, CompanySpecComponent } from './index';

export const CompanySpecRoutes: Route[] = [
	{
		path: '',
		component: CompanySpecComponent,
		// children: [
		// 	{
		// 		path: '',
		// 		component: CompanySpecListComponent
		// 	}
			
		// ]
	}
];
export const routing = RouterModule.forChild(CompanySpecRoutes);
