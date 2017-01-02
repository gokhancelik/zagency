import { Component, ViewChild } from '@angular/core';
import { ImageSizeAddComponent, ImageSizeEditComponent } from './index';
import { ImageSizeService } from '../../shared/services/index';
import { ListComponent } from '../../core/index';
import { ImageSize } from '../../shared/models';
@Component({
    selector: 'imageSize-list',
    templateUrl: 'imageSize.list.component.html'
})
export class ImageSizeListComponent extends ListComponent<ImageSize> {
    @ViewChild('addModal') addModal: ImageSizeAddComponent;
    @ViewChild('editModal') editModal: ImageSizeEditComponent;
    constructor(service: ImageSizeService) {
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
