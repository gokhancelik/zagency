import { Routes, RouterModule } from '@angular/router';

import { PublishingTourAddComponent,PublishingTourComponent} from './index';

const PublishingTourRoutes: Routes = [
	{
		path: '',
		component: PublishingTourComponent,
		children: [
			 {
				path: 'list',
			 	component: PublishingTourComponent
			 }
			// {
			// 	path: 'edit/:id',
			// 	component: TourScheduleEditComponent
			// },
			// {
			// 	path: 'new',
			// 	component: TourScheduleAddComponent
			// }
		]
	}
];
export const routing = RouterModule.forChild(PublishingTourRoutes);

