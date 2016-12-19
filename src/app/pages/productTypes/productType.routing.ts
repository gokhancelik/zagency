import { Route, RouterModule } from '@angular/router';

import { ProductTypeListComponent, ProductTypeComponent } from './index';

export const ProductTypeRoutes: Route[] = [
	{
		path: '',
		component: ProductTypeComponent,
		children: [
			{
				path: 'list',
				component: ProductTypeListComponent
			}
			
		]
	}
];
export const routing = RouterModule.forChild(ProductTypeRoutes);
