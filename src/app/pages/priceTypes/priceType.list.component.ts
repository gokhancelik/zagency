import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { PriceTypeEditComponent, PriceTypeAddComponent } from './index';
import { PriceType } from '../../shared/models';
import { PriceTypeService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { NgProgressService } from 'ng2-progressbar';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'priceType-list',
    templateUrl: 'priceType.list.component.html'
})
export class PriceTypeListComponent extends ListComponent<PriceType> {
    @ViewChild('addModal') addModal: PriceTypeAddComponent;
    @ViewChild('editModal') editModal: PriceTypeEditComponent;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
     constructor(service: PriceTypeService) {
        super(service);
        this.setColumns({
            name: {
                title: 'name',
                type: 'string'
            }
        });
    }
}
