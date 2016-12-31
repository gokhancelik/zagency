import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { CompanyService } from '../../shared/services/index';
import { Company } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { CompanyEditComponent, CompanyAddComponent } from './index';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'company-list',
    templateUrl: 'company.list.component.html'
})
export class CompanyListComponent extends ListComponent<Company> {
    @ViewChild('addModal') addModal: CompanyAddComponent;
    @ViewChild('editModal') editModal: CompanyEditComponent;
    title: string = 'Companies';
    constructor(private _service: CompanyService) {
        super(_service);
        this.setColumns({
            id: {
                title: 'id',
                type: 'string'
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
    }
}

