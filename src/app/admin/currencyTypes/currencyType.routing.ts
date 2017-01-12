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
				path: '',
				component: CurrencyTypeListComponent
			},
		]
	}
];
export const routing = RouterModule.forChild(CurrencyTypeRoutes);

