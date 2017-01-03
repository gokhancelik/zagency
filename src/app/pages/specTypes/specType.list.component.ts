import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { SpecTypeAddComponent, SpecTypeEditComponent } from './index';
import { SpecType } from '../../shared/models';
import { SpecTypeService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { NgProgressService } from 'ng2-progressbar';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'specType-list',
    templateUrl: 'specType.list.component.html'
})
export class SpecTypeListComponent extends ListComponent<SpecType> {
    @ViewChild('addModal') addModal: SpecTypeAddComponent;
    @ViewChild('editModal') editModal: SpecTypeEditComponent;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
     constructor(service: SpecTypeService) {
        super(service);
        this.setColumns(SpecType.getColumns());
    }
}
