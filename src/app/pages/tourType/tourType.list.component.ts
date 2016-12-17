import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TourTypeService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { TourType } from '../../shared/models/tourType.model';

@Component({
    selector: 'tourType-list',
    templateUrl: 'tourType.list.component.html'
})
export class TourTypeListComponent extends ListComponent<TourType> {
    // @ViewChild('addModal') addModal: TourTypeAddComponent;
    // @ViewChild('editModal') editModal: TourTypeEditComponent;
    @Input() tourId: number = 0;
    title: string = 'Tour Programs';
    _service: TourTypeService;
    constructor(
        service: TourTypeService
        // private tourService: TourService
    ) {
        super(service);
        this.setColumns({
            name: {
                title: 'Name',
                type: 'string'
            },
            companyid: {
                title: 'CompanyId',
                type: 'number'
            }
        });
        this._service = service;
    }
}