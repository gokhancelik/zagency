import { Route, RouterModule, Routes } from '@angular/router';
import { CanActivateCompanyEdit } from '../../security/guards/companyEdit.guard';
import {
	CompanyListComponent, CompanyComponent,
	CompanyEditComponent, CompanyAddComponent
} from './index';
export const COMPANY_ROUTES: Routes = [
	{
		path: '',
		component: CompanyComponent,
		children: [
			{
				path: '',
				component: CompanyListComponent
			},
			{
				path: 'edit/:id',
				component: CompanyEditComponent,
				canActivate: [CanActivateCompanyEdit]
			},
			{
				path: 'newCompany',
				component: CompanyAddComponent,
			}

		]
	}
];
export const routing = RouterModule.forChild(COMPANY_ROUTES);
