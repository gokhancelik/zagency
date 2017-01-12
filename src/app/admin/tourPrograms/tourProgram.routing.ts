import { Routes, RouterModule } from '@angular/router';

import { TourProgramAddComponent, TourProgramComponent } from './index';

const TourProgramRoutes: Routes = [
	{
		path: '',
		component: TourProgramComponent,
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
				component: TourProgramAddComponent
			}
		]
	}
];
export const routing = RouterModule.forChild(TourProgramRoutes);

