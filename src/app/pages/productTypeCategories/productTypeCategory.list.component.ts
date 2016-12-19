import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ProductTypeCategoryEditComponent, ProductTypeCategoryAddComponent } from './index';
import { ProductTypeCategory } from '../../shared/models';
import { ProductTypeCategoryService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { NgProgressService } from 'ng2-progressbar';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'productTypeCategory-list',
    templateUrl: 'productTypeCategory.list.component.html'
})
export class ProductTypeCategoryListComponent extends ListComponent<ProductTypeCategory> {
    @ViewChild('addModal') addModal: ProductTypeCategoryAddComponent;
    @ViewChild('editModal') editModal: ProductTypeCategoryEditComponent;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
     constructor(service: ProductTypeCategoryService) {
        super(service);
        this.setColumns({
            name: {
                title: 'name',
                type: 'string'
            },
            code: {
                title: 'code',
                type: 'string'
            }
        });
    }
}
