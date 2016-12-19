import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ProductPhotoAddComponent, ProductPhotoEditComponent } from './index';
import { ProductPhotoService, TourService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { ProductPhoto } from '../../shared/models/productPhoto.model';

@Component({
    selector: 'productPhoto-list',
    templateUrl: 'productPhoto.list.component.html'
})
export class ProductPhotoListComponent extends ListComponent<ProductPhoto> {
    @ViewChild('addModal') addModal: ProductPhotoAddComponent;
    @ViewChild('editModal') editModal: ProductPhotoEditComponent;
    @Input() productBaseId: number = 0;
    title: string = 'Tour Photos';
    _service: ProductPhotoService;
    constructor(
        service: ProductPhotoService,
        private tourService: TourService
    ) {
        super(service);
        this.setColumns({
            name: {
                title: 'Name',
                type: 'string'
            },
            photoPath: {
                title: 'Path',
                type: 'string'
            },
            photoLocationTypeName: {
                title: 'Location',
                type: 'string'
            }
        });
        this._service = service;
    }

    getList() {
        if (this.productBaseId) {
            this.tourService.getProductPhotos(this.productBaseId).subscribe(data => {
                this.source.load(data);
            });
        }
        else {
            this._service.getList().subscribe(data => {
                this.source.load(data);
            });
        }
    }
    openModal(id: number) {
        if (id) {
            this.editModal.setId(id);
            this.editModal.open();
        }
        else {
            this.addModal.setproductBaseId(this.productBaseId);
            this.addModal.open();
        }
    }
    onCreate(event): void {
        this.openModal(null);

    }
    onSaved(event) {
        this.getList();
    }


}
