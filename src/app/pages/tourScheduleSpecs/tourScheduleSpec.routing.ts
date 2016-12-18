import { Route, RouterModule } from '@angular/router';

import { TourScheduleSpecListComponent, TourScheduleSpecComponent } from './index';

export const TourScheduleSpecRoutes: Route[] = [
	{
		path: '',
		component: TourScheduleSpecComponent,
		
	}
];
export const routing = RouterModule.forChild(TourScheduleSpecRoutes);
