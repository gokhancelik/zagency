import { Routes, RouterModule } from '@angular/router';

import { TourPhotoAddComponent, TourPhotoComponent } from './index';

const TourPhotoRoutes: Routes = [
	{
		path: '',
		component: TourPhotoComponent,
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
				component: TourPhotoAddComponent
			}
		]
	}
];
export const routing = RouterModule.forChild(TourPhotoRoutes);

