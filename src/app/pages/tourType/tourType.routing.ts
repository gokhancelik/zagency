import { Route, RouterModule } from '@angular/router';

import { TourTypeListComponent, TourTypeComponent, TourTypeAddComponent } from './index';

export const TourTypeRoutes: Route[] = [
	{
		path: '',
		component: TourTypeComponent,
		children: [
			{
				path: 'list',
				component: TourTypeListComponent
			},
			{
				path: 'new',
				component: TourTypeAddComponent
			}
		]
	}
];
export const routing = RouterModule.forChild(TourTypeRoutes);
