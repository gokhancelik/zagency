import { Component, ViewChild } from '@angular/core';
import { CurrencyTypeAddComponent, CurrencyTypeEditComponent } from './index';
import { CurrencyTypeService } from '../../shared/services/index';
import { ListComponent } from '../../core/index';
import { CurrencyType } from '../../shared/models/currencyType.model';
@Component({
    selector: 'currencyType-list',
    templateUrl: 'currencyType.list.component.html'
})
export class CurrencyTypeListComponent extends ListComponent<CurrencyType> {
    @ViewChild('addModal') addModal: CurrencyTypeAddComponent;
    @ViewChild('editModal') editModal: CurrencyTypeEditComponent;
    constructor(service: CurrencyTypeService) {
        super(service);
        this.setColumns(CurrencyType.getColumns());
    }
}
