import { Routes, RouterModule } from '@angular/router';

import {
	SpecTypeEditComponent, SpecTypeComponent, SpecTypeAddComponent
	, SpecTypeListComponent
} from './index';

const SpecTypeRoutes: Routes = [
	{
		path: '',
		component: SpecTypeComponent,
		children: [
			{
				path: 'list',
				component: SpecTypeListComponent
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
export const routing = RouterModule.forChild(SpecTypeRoutes);

