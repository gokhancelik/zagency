import { Routes, RouterModule } from '@angular/router';

import { ProductPhotoAddComponent, ProductPhotoComponent } from './index';

const PRODUCT_PHOTO_ROUTES: Routes = [
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
export const routing = RouterModule.forChild(PRODUCT_PHOTO_ROUTES);

