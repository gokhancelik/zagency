import { Routes, RouterModule } from '@angular/router';

import { PublishingTourComponent,PublishingTourListComponent} from './index';

const PublishingTourRoutes: Routes = [
		{
		path: '',
		component: PublishingTourComponent,
		children: [
			{
				path: 'list',
				component:  PublishingTourListComponent,
				// canActivate: [CanActivateUserEdit]
			}
		],

	}
];
export const routing = RouterModule.forChild(PublishingTourRoutes);

