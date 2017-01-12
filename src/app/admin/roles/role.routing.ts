import { Route, RouterModule } from '@angular/router';

import { RoleListComponent, RoleComponent } from './index';

export const RoleRoutes: Route[] = [
	{
		path: '',
		component: RoleComponent,
		children: [
			{
				path: '',
				component: RoleListComponent
			}
			
		]
	}
];
export const routing = RouterModule.forChild(RoleRoutes);
