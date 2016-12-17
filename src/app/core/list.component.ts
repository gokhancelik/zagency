import {
    Component, OnInit, ViewChild, Input, Output,
    EventEmitter, ViewEncapsulation
} from '@angular/core';
import { CurrencyTypeService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { AddComponent, EditComponent } from './index';
import { IModel } from './IModel';
import { IService } from './IService.service';
export class ListComponent<T extends IModel> implements OnInit {
    addModal: AddComponent<T>;
    editModal: EditComponent<T>;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    public loading: boolean = false;
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
        columns: {},
        mode: 'external'

    };
    source: LocalDataSource = new LocalDataSource();
    constructor(private service: IService<T>
    ) { }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.loading = true;
        this.service.getList().subscribe(data => {
            this.source.load(data);
            this.loading = false;
        });
    }
    openFormModal(id: number) {
        if (id) {
            this.editModal.setId(id);
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
        let tt: T = event.data as T;
        this.openFormModal(tt.id);
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            let tt: T = event.data as T;
            this.service.delete(tt.id).subscribe(
                data => this.getList(),
                error => alert(error));
        } else {

        }
    }
    onRowSelect(event): void {
        let tt: T = event.data as T;
        this.onRowSelectionChanged.emit(tt);
    }
    setColumns(columns: any) {
        this.settings.columns = columns;
    }
}
