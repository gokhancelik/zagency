import { UserEditComponent } from './user.edit.component';
import { CanActivate } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
import { CanActivateUserEdit } from '../../security/guards/userEdit.guard';

import { UserListComponent, UserComponent } from './index';

export const UserRoutes: Route[] = [
	{
		path: '',
		component: UserComponent,
		children: [
			{
				path: '',
				component: UserListComponent,
				canActivate: [CanActivateUserEdit]
				
			}
			
		]
	}
];
export const routing = RouterModule.forChild(UserRoutes);
