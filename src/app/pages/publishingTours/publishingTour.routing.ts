import { Routes, RouterModule } from '@angular/router';

import { PublishingTourComponent,PublishingTourListComponent} from './index';

const PublishingTourRoutes: Routes = [
	{
		path: '',
		component: PublishingTourComponent,
		children: [
			 {
				path: '',
			 	component: PublishingTourListComponent
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

