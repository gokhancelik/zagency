import { Route, RouterModule } from '@angular/router';

import { UserListComponent, UserComponent } from './index';

export const UserRoutes: Route[] = [
	{
		path: '',
		component: UserComponent,
		children: [
			{
				path: 'list',
				component: UserListComponent
			}
			
		]
	}
];
export const routing = RouterModule.forChild(UserRoutes);
