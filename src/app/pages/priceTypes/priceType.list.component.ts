import { Component, OnInit,  ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { PriceTypeEditComponent, PriceTypeAddComponent } from './index';
import { PriceType } from '../../shared/models';
import { PriceTypeService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { NgProgressService } from "ng2-progressbar";
@Component({
    selector: 'priceType-list',
    templateUrl: 'priceType.list.component.html'
})
export class PriceTypeListComponent implements OnInit {
    @ViewChild('addModal') addModal: PriceTypeAddComponent;
    @ViewChild('editModal') editModal: PriceTypeEditComponent;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    loading: boolean = false;
    constructor(
        private service: PriceTypeService
    ) { }
    settings = {
        add: {
            confirmCreate: true,
        },
        edit: {
            confirmSave: true,

        },
        delete: {
            confirmDelete: true
        },
        columns: {
            name: {
                title: 'Name',
                type: 'string'
            }
        },
        mode: 'external'

    };
    source: LocalDataSource = new LocalDataSource();

    ngOnInit() {
        this.getList();
    }
    getList() {
        this.loading = true;
        this.service.get().subscribe(data => {
            this.source.load(data);
            this.loading = false;
        });
    }
    openFormModal(id: number) {
        if (id) {
            this.editModal.setPriceTypeId(id);
            this.editModal.open();
        }
        else {
            this.addModal.open();
        }
    }
    onCreate(event): void {
        this.openFormModal(null);

    }
    onSaved(event) {
        this.getList();
    }
    onEdit(event): void {
        let tt: PriceType = event.data as PriceType;
        this.openFormModal(tt.priceTypeId);
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            let tt: PriceType = event.data as PriceType;
            this.service.delete(tt.id).subscribe(
                data => this.getList(),
                error => alert(error));
        } else {

        }
    }
    onRowSelect(event): void {
        let tt: PriceType = event.data as PriceType;
        this.onRowSelectionChanged.emit(tt);
    }
}