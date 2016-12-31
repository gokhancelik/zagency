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
				path: '',
				component: PriceTypeListComponent
			},
		]
	}
];
export const routing = RouterModule.forChild(PriceTypeRoutes);

