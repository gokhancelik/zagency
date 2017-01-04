import { Routes, RouterModule } from '@angular/router';

import {
	B2BEditComponent, B2BComponent, B2BAddComponent
	, B2BListComponent
} from './index';

const B2BRoutes: Routes = [
	{
		path: '',
		component: B2BComponent,
		children: [
			{
				path: '',
				component: B2BListComponent
			},
		]
	}
];
export const routing = RouterModule.forChild(B2BRoutes);

