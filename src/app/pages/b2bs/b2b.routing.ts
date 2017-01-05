import { PublishingTourListComponent } from './publishingTours/publishingTour.list.component';
import { B2BComponent } from './b2b.component';
import { DistributorListComponent } from './stakeholders/distributor.list.component';
import { Routes, RouterModule } from '@angular/router';

const B2BRoutes: Routes = [
	{
		path: '',
		component: B2BComponent,
		children: [
			{
				path: 'distributors',
				component: DistributorListComponent
			},
			{
				path: 'publishingTours',
				component: PublishingTourListComponent
			},
		]
	}
];
export const routing = RouterModule.forChild(B2BRoutes);

