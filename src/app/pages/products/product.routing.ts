import { Routes, RouterModule } from '@angular/router';
import {
	ProductListComponent, ProductComponent,
	ProductEditComponent, ProductAddComponent
} from './index';
const ProductRoutes: Routes = [
	{
		path: '',
		component: ProductComponent,
		children: [
			{
				path: 'list',
				component: ProductListComponent
			},
			{
				path: 'edit/:id',
				component: ProductEditComponent
			},
			{
				path: 'newProduct',
				component: ProductAddComponent
			}
		]
	}
];
export const routing = RouterModule.forChild(ProductRoutes);

