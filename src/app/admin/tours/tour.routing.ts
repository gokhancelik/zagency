import { Routes, RouterModule } from '@angular/router';
import {
	TourListComponent, TourComponent,
	TourEditComponent, TourAddComponent
} from './index';
const TourRoutes: Routes = [
	{
		path: '',
		component: TourComponent,
		children: [
			{
				path: 'list',
				component: TourListComponent
			},
			{
				path: 'edit/:id',
				component: TourEditComponent
			},
			{
				path: 'newTour',
				component: TourAddComponent
			}
		]
	}
];
export const routing = RouterModule.forChild(TourRoutes);

