import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TourTypeService } from '../../shared/services/index';
import { TourType } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { TourTypeEditComponent, TourTypeAddComponent } from './index';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'tourType-list',
    templateUrl: 'tourType.list.component.html'
})
export class TourTypeListComponent extends ListComponent<TourType> {
    @ViewChild('addModal') addModal: TourTypeAddComponent;
    @ViewChild('editModal') editModal: TourTypeEditComponent;
    title: string = 'Tour Type';
    _service: TourTypeService;
    constructor(service: TourTypeService) {
        super(service);
        this.setColumns({
            name: {
                title: 'name',
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
