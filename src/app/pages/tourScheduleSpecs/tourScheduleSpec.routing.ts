import { Route, RouterModule } from '@angular/router';

import { TourScheduleSpecListComponent, TourScheduleSpecComponent } from './index';

export const TourScheduleSpecRoutes: Route[] = [
	{
		path: '',
		component: TourScheduleSpecComponent,
		children: [
			{
				path: 'list',
				component: TourScheduleSpecListComponent
			}
			
		]
	}
];
export const routing = RouterModule.forChild(TourScheduleSpecRoutes);
