import { CanActivate, Routes } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
import { CanActivateUserEdit } from '../../security/guards/userEdit.guard';

import { UserListComponent, UserComponent, UserEditComponent } from './index';

export const UserRoutes: Routes = [
	{
		path: 'users',
		component: UserComponent,
		children: [
			{
				path: '',
				component: UserListComponent,
				// canActivate: [CanActivateUserEdit]

			}
			// {
			// 	path: 'edit/:id',
			// 	outlet: 'editModal',
			// 	component: UserEditComponent
			// 	// canActivate: [CanActivateUserEdit]

			// }

		]

	}
];
export const routing = RouterModule.forChild(UserRoutes);
