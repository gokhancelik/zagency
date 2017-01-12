import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TourCategoryService } from '../../shared/services/index';
import { TourCategory } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { TourCategoryEditComponent, TourCategoryAddComponent } from './index';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'tourCategory-list',
    templateUrl: 'tourCategory.list.component.html'
})
export class TourCategoryListComponent extends ListComponent<TourCategory> {
    @ViewChild('addModal') addModal: TourCategoryAddComponent;
    @ViewChild('editModal') editModal: TourCategoryEditComponent;
    title: string = 'Tour Type List';
    _service: TourCategoryService;
    constructor(service: TourCategoryService) {
        super(service);
        this.setColumns(TourCategory.getColumns());
        this._service = service;
    }
}
