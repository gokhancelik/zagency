import { Routes, RouterModule } from '@angular/router';

import {
	ProductTypeCategoryAddComponent, ProductTypeCategoryComponent, ProductTypeCategoryEditComponent,
	ProductTypeCategoryListComponent
} from './index';

const ProductTypeCategoryRoutes: Routes = [
	{
		path: '',
		component: ProductTypeCategoryComponent,
		children: [
			{
				path: 'list',
				component: ProductTypeCategoryListComponent
			},
			// {
			// 	path: 'edit/:id',
			// 	component: TourScheduleEditComponent
			// },
			// {
			// 	path: 'new',
			// 	component: ProductTypeCategoryAddComponent
			// }
		]
	}
];
export const routing = RouterModule.forChild(ProductTypeCategoryRoutes);

