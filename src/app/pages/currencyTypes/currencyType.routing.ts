import { Routes, RouterModule } from '@angular/router';

import {
	CurrencyTypeEditComponent, CurrencyTypeComponent, CurrencyTypeAddComponent
	, CurrencyTypeListComponent
} from './index';

const CurrencyTypeRoutes: Routes = [
	{
		path: '',
		component: CurrencyTypeComponent,
		children: [
			{
				path: 'list',
				component: CurrencyTypeListComponent
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
export const routing = RouterModule.forChild(CurrencyTypeRoutes);

