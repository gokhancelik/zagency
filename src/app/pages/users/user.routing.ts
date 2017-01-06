import { CanActivate, Routes } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
import { CanActivateUserEdit } from '../../security/guards/userEdit.guard';

import { UserListComponent, UserComponent, UserEditComponent } from './index';

export const UserRoutes: Routes = [
	{
		path: '',
		component: UserComponent,
		children: [
			{
				path: 'list',
				component: UserListComponent,
				// canActivate: [CanActivateUserEdit]
			},
			{
				path: 'edit/:id',
				outlet: 'editModal',
				component: UserEditComponent
				// canActivate: [CanActivateUserEdit]

			},
			{
				path: 'playlist',
				outlet: 'anotherList',
				component: UserListComponent
			}
		],

	}
];
export const routing = RouterModule.forChild(UserRoutes);
