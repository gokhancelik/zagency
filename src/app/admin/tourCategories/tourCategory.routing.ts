import { Route, RouterModule } from '@angular/router';

import { TourCategoryListComponent, TourCategoryComponent } from './index';

export const TourCategoryRoutes: Route[] = [
	{
		path: '',
		component: TourCategoryComponent,
		children: [
			{
				path: '',
				component: TourCategoryListComponent
			}
			
		]
	}
];
export const routing = RouterModule.forChild(TourCategoryRoutes);
