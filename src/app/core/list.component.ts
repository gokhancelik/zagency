import {
    Component, OnInit, ViewChild, Input, Output,
    EventEmitter, ViewEncapsulation,
} from '@angular/core';
import { CurrencyTypeService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { AddComponent, EditComponent } from './index';
import { IModel } from './IModel';
import { IService } from './IService.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BaseFirebaseService } from '../shared/services/base.firebase.service';

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
    constructor(private service: BaseFirebaseService<T>
    ) {
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.loading = true;
        this.service.getAll()
            .subscribe(snapshots => {
                this.source.load(snapshots);
                this.loading = false;
            });
    }
    openFormModal(data: any) {
        if (data) {
            this.editModal.setKey(data);
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
    }
    onEdit(event): void {
        this.openFormModal(event.data.$key);
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            let tt: T = event.data as T;
            this.service.delete(event.data.$key);
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
