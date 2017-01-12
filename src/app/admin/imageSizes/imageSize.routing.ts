import { Routes, RouterModule } from '@angular/router';

import {
	ImageSizeEditComponent, ImageSizeComponent, ImageSizeAddComponent
	, ImageSizeListComponent
} from './index';

const ImageSizeRoutes: Routes = [
	{
		path: '',
		component: ImageSizeComponent,
		children: [
			{
				path: '',
				component: ImageSizeListComponent
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
export const routing = RouterModule.forChild(ImageSizeRoutes);

