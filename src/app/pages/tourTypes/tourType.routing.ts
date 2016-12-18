import { Route, RouterModule } from '@angular/router';

import { TourTypeListComponent, TourTypeComponent } from './index';

export const TourTypeRoutes: Route[] = [
	{
		path: '',
		component: TourTypeComponent,
		children: [
			{
				path: 'list',
				component: TourTypeListComponent
			}
			
		]
	}
];
export const routing = RouterModule.forChild(TourTypeRoutes);
