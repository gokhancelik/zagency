import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TourScheduleSpecService } from '../../shared/services/index';
import { TourScheduleSpec } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { TourScheduleSpecEditComponent, TourScheduleSpecAddComponent } from './index';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'tourScheduleSpec-list',
    templateUrl: 'tourScheduleSpec.list.component.html'
})
export class TourScheduleSpecListComponent extends ListComponent<TourScheduleSpec> {
    @ViewChild('addModal') addModal: TourScheduleSpecAddComponent;
    @ViewChild('editModal') editModal: TourScheduleSpecEditComponent;
    title: string = 'Tour Destinations';
    _service: TourScheduleSpecService;
    constructor(service: TourScheduleSpecService) {
        super(service);
        this.setColumns({
            tourScheduleSpecId: {
                title: 'tourScheduleSpecId',
                type: 'number'
            },
            description: {
                title: 'Description',
                type: 'string'
            },
            companyName: {
                title: 'Company',
                type: 'string'
            },
        });
        this._service = service;
    }
}
