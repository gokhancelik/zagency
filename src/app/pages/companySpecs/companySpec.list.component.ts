import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { CompanySpecService } from '../../shared/services/index';
import { CompanySpec } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { CompanySpecEditComponent, CompanySpecAddComponent } from './index';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'companySpec-list',
    templateUrl: 'companySpec.list.component.html'
})
export class CompanySpecListComponent extends ListComponent<CompanySpec> {
    @ViewChild('addModal') addModal: CompanySpecAddComponent;
    @ViewChild('editModal') editModal: CompanySpecEditComponent;
    title: string = 'Company Specifications';
    _service: CompanySpecService;
    constructor(service: CompanySpecService) {
        super(service);
        this.setColumns({
            companySpecId: {
                title: 'companySpecId',
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
