import { Routes, RouterModule } from '@angular/router';

import { TourScheduleAddComponent,TourScheduleComponent} from './index';

const TourScheduleRoutes: Routes = [
	{
		path: '',
		component: TourScheduleComponent,
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
				component: TourScheduleAddComponent
			}
		]
	}
];
export const routing = RouterModule.forChild(TourScheduleRoutes);

