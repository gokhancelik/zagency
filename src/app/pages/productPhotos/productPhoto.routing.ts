import { Routes, RouterModule } from '@angular/router';

import { ProductPhotoAddComponent, ProductPhotoComponent } from './index';

const ProductPhotoRoutes: Routes = [
	{
		path: '',
		component: ProductPhotoComponent,
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
				component: ProductPhotoAddComponent
			}
		]
	}
];
export const routing = RouterModule.forChild(ProductPhotoRoutes);

