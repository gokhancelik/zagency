import { Routes, RouterModule } from '@angular/router';

import { CompanyServiceAddComponent, CompanyServiceComponent } from './index';

const CompanyServiceRoutes: Routes = [
	{
		path: '',
		component: CompanyServiceComponent,
		children: [
			// {
			// 	path: 'list',
			// 	component: TourScheduleListComponent
			// },
			// {
			// 	path: 'edit/:id',
			// 	component: TourScheduleEditComponent
			// },
			// {
			// 	path: 'new',
			// 	component: CompanyServiceAddComponent
			// }
		]
	}
];
export const routing = RouterModule.forChild(CompanyServiceRoutes);

