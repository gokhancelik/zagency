import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ProductTypeService } from '../../shared/services/index';
import { ProductType } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { ProductTypeEditComponent, ProductTypeAddComponent } from './index';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'productType-list',
    templateUrl: 'productType.list.component.html'
})
export class ProductTypeListComponent extends ListComponent<ProductType> {
    @ViewChild('addModal') addModal: ProductTypeAddComponent;
    @ViewChild('editModal') editModal: ProductTypeEditComponent;
    title: string = 'Tour Type List';
    _service: ProductTypeService;
    constructor(service: ProductTypeService) {
        super(service);
        this.setColumns({
            productTypeId: {
                title: 'productTypeId',
                type: 'number'
            },
            name: {
                title: 'name',
                type: 'string'
            },
            companyName: {
                title: 'companyName',
                type: 'string'
            },
            companyId: {
                title: 'companyId',
                type: 'number'
            }
        });
        this._service = service;
    }
}
