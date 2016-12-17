import { Routes, RouterModule } from '@angular/router';

import { TourSchedulePriceAddComponent,TourSchedulePriceComponent} from './index';

const TourScheduleRoutes: Routes = [
	{
		path: '',
		component: TourSchedulePriceComponent,
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
				component: TourSchedulePriceAddComponent
			}
		]
	}
];
export const routing = RouterModule.forChild(TourScheduleRoutes);

