import { Routes, RouterModule } from '@angular/router';

import { TourDestinationAddComponent, TourDestinationComponent } from './index';

const TourDestinationRoutes: Routes = [
		{
			path: '',
			component: TourDestinationComponent,
			children: [
				// {
				// 	path: 'list',
				// 	component: TourScheduleListComponent
				// },
				// {
				// 	path: 'edit/:id',
				// 	component: TourScheduleEditComponent
				// },
				{
					path: 'new',
					component: TourDestinationAddComponent
				}
			]
		}
];
export const routing = RouterModule.forChild(TourDestinationRoutes);

