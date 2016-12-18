import { Component, ViewChild } from '@angular/core';
import { PhotoLocationAddComponent, PhotoLocationEditComponent } from './index';
import { PhotoLocationService } from '../../shared/services/index';
import { ListComponent } from '../../core/index';
import { PhotoLocation } from '../../shared/models';
@Component({
    selector: 'photoLocation-list',
    templateUrl: 'photoLocation.list.component.html'
})
export class PhotoLocationListComponent extends ListComponent<PhotoLocation> {
    @ViewChild('addModal') addModal: PhotoLocationAddComponent;
    @ViewChild('editModal') editModal: PhotoLocationEditComponent;
    constructor(service: PhotoLocationService) {
        super(service);
        this.setColumns({
            name: {
                title: 'Name',
                type: 'string'
            },
            width: {
                title: 'Width',
                type: 'number'
            },
            height: {
                title: 'Height',
                type: 'number'
            }
        });
    }
}
