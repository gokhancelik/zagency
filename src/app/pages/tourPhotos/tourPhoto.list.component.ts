import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TourPhotoAddComponent, TourPhotoEditComponent } from './index';
import { TourPhotoService, TourService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { TourPhoto } from '../../shared/models/tourPhoto.model';

@Component({
    selector: 'tourPhoto-list',
    templateUrl: 'tourPhoto.list.component.html'
})
export class TourPhotoListComponent extends ListComponent<TourPhoto> {
    @ViewChild('addModal') addModal: TourPhotoAddComponent;
    @ViewChild('editModal') editModal: TourPhotoEditComponent;
    @Input() tourId: number = 0;
    title: string = 'Tour Photos';
    _service: TourPhotoService;
    constructor(
        service: TourPhotoService,
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
        if (this.tourId) {
            this.tourService.getTourPhotos(this.tourId).subscribe(data => {
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
            this.addModal.setTourId(this.tourId);
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
