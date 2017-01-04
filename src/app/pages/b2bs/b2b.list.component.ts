import { Component, ViewChild } from '@angular/core';
import { B2BAddComponent, B2BEditComponent } from './index';
import { B2BService } from '../../shared/services/index';
import { ListComponent } from '../../core/index';
import { B2B } from '../../shared/models/b2b.model';
@Component({
    selector: 'b2b-list',
    templateUrl: 'b2b.list.component.html'
})
export class B2BListComponent extends ListComponent<B2B> {
    @ViewChild('addModal') addModal: B2BAddComponent;
    @ViewChild('editModal') editModal: B2BEditComponent;
    constructor(service: B2BService) {
        super(service);
        this.setColumns(B2B.getColumns());
    }
}
