import { UserEditComponent } from './user.edit.component';
import { CanActivate, Routes } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
import { CanActivateUserEdit } from '../../security/guards/userEdit.guard';

import { UserListComponent, UserComponent } from './index';

export const UserRoutes: Routes = [
	{
		path: '',
		component: UserComponent,
		children: [
			{
				path: '',
				component: UserListComponent,
				children: [
					{
						path: 'edit/:id',
						outlet: 'editModal',
						component: UserEditComponent
						// canActivate: [CanActivateUserEdit]

					}
				]
				// canActivate: [CanActivateUserEdit]

			}

		],

	},
	{
		path: 'playlist',
		outlet: 'aside',
		component: UserEditComponent
	}

];
export const routing = RouterModule.forChild(UserRoutes);
