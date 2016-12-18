import { Routes, RouterModule } from '@angular/router';

import {
	PhotoLocationEditComponent, PhotoLocationComponent, PhotoLocationAddComponent
	, PhotoLocationListComponent
} from './index';

const PhotoLocationRoutes: Routes = [
	{
		path: '',
		component: PhotoLocationComponent,
		children: [
			{
				path: 'list',
				component: PhotoLocationListComponent
			},
			// {
			// 	path: 'edit/:id',
			// 	component: TourScheduleEditComponent
			// },
			// {
			// 	path: 'new',
			// 	component: PriceTypeAddComponent
			// }
		]
	}
];
export const routing = RouterModule.forChild(PhotoLocationRoutes);

