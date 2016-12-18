import { Component, ViewChild } from '@angular/core';
import { SpecTypeAddComponent, SpecTypeEditComponent } from './index';
import { SpecTypeService } from '../../shared/services/index';
import { ListComponent } from '../../core/index';
import { SpecType } from '../../shared/models';
@Component({
    selector: 'specType-list',
    templateUrl: 'specType.list.component.html'
})
export class SpecTypeListComponent extends ListComponent<SpecType> {
    @ViewChild('addModal') addModal: SpecTypeAddComponent;
    @ViewChild('editModal') editModal: SpecTypeEditComponent;
    constructor(service: SpecTypeService) {
        super(service);
        this.setColumns({
            name: {
                title: 'Name',
                type: 'string'
            },
            code: {
                title: 'Code',
                type: 'string'
            },
            group: {
                title: 'Group',
                type: 'string'
            }
        });
    }
}
