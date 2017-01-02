import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {CompanySpecAddComponent, CompanySpecEditComponent } from './index';
import { CompanySpec, Company } from '../../shared/models';
import { CompanySpecService, CompanyService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'companySpec-list',
    templateUrl: 'companySpec.list.component.html'
})
export class CompanySpecListComponent extends ListComponent<CompanySpec> {
    @ViewChild('addModal') addModal: CompanySpecAddComponent;
    @ViewChild('editModal') editModal: CompanySpecEditComponent;
    @Input() company: Company;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    source: LocalDataSource = new LocalDataSource();

    constructor(
        private datePipe: DatePipe,
        private companySpecService: CompanySpecService,
        private companyService: CompanyService
    ) {
        super(companySpecService);
        this.setColumns(CompanySpec.getColumns(this.datePipe));
    }
    getList() {
        if (this.company) {
            this.companyService.getCompanySpec(this.company.id).subscribe(
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
        let ts: CompanySpec = event.data as CompanySpec;
        this.openModal(ts.id);
    }
    onRowSelect(event): void {
        let ts: CompanySpec = event.data as CompanySpec;
        this.onRowSelectionChanged.emit(ts);
    }
}
