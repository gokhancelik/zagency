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
    title: string = 'Tour Destinations';
    _service: CompanySpecService;
    constructor(service: CompanySpecService) {
        super(service);
        this.setColumns({
            companySpecId: {
                title: 'companySpecId',
                type: 'number'
            },
            name: {
                title: 'name',
                type: 'string'
            },
            longName: {
                title: 'longName',
                type: 'string'
            },
            phone1: {
                title: 'phone1',
                type: 'string'
            },
            phone2: {
                title: 'phone2',
                type: 'string'
            },
            fax: {
                title: 'fax',
                type: 'string'
            },
            webSiteUrl: {
                title: 'webSiteUrl',
                type: 'string'
            },
            email: {
                title: 'email',
                type: 'string'
            }


        });
        this._service = service;
    }
}
