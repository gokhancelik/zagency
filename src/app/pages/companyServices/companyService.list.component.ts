import { CompanyService } from './../../shared/services';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { CompanyServiceAddComponent, CompanyServiceEditComponent } from './index';
import { CompanyServiceModel, Company } from '../../shared/models';
import { CompanyServiceService, TourService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'companyService-list',
    templateUrl: 'companyService.list.component.html'
})
export class CompanyServiceListComponent extends ListComponent<CompanyServiceModel> {
    @ViewChild('addModal') addModal: CompanyServiceAddComponent;
    @ViewChild('editModal') editModal: CompanyServiceEditComponent;
    @Input() company: Company;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    source: LocalDataSource = new LocalDataSource();
    title: string = 'Services';
    constructor(
        private compServService: CompanyServiceService,
        private companyService: CompanyService
    ) {
        super(compServService);
        this.setColumns(CompanyServiceModel.getColumns());
    }
    getList() {
        if (this.company) {
            this.companyService.getServices(this.company.id).subscribe(
                data => this.source.load(data)
            );
        }
    }
    openModal(key: string) {
        if (key) {
            this.editModal.setCompany(this.company);
            this.editModal.setKey(key);
            this.editModal.open();
        }
        else {
            this.addModal.setCompany(this.company);
            this.addModal.open();
        }
    }
    onCreate(event): void {
        this.openModal(null);
    }
    onEdit(event): void {
        let ts: CompanyServiceModel = event.data as CompanyServiceModel;
        this.openModal(ts.id);
    }
    onRowSelect(event): void {
        let ts: CompanyServiceModel = event.data as CompanyServiceModel;
        this.onRowSelectionChanged.emit(ts);
    }
}
