import { Routes, RouterModule } from '@angular/router';

import {
	PriceTypeAddComponent, PriceTypeComponent, PriceTypeEditComponent,
	PriceTypeListComponent
} from './index';

const PriceTypeRoutes: Routes = [
	{
		path: '',
		component: PriceTypeComponent,
		children: [
			{
				path: 'list',
				component: PriceTypeListComponent
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
export const routing = RouterModule.forChild(PriceTypeRoutes);

