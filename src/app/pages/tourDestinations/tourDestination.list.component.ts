import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TourDestinationAddComponent, TourDestinationEditComponent } from './index';
import { TourDestinationService, TourService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { TourDestination } from '../../shared/models/tourDestination.model';

@Component({
    selector: 'tourDestination-list',
    templateUrl: 'tourDestination.list.component.html'
})
export class TourDestinationListComponent extends ListComponent<TourDestination> {
    @ViewChild('addModal') addModal: TourDestinationAddComponent;
    @ViewChild('editModal') editModal: TourDestinationEditComponent;
    @Input() tourId: number = 0;
    title: string = 'Tour Destinations';
    _service: TourDestinationService;
    constructor(
        service: TourDestinationService,
        private tourService: TourService
    ) {
        super(service);
        this.setColumns({
            name: {
                title: 'Name',
                type: 'string'
            },
            latitude: {
                title: 'Latitude',
                type: 'number'
            },
            longitude: {
                title: 'Longitude',
                type: 'number'
            }
        });
        this._service = service;
    }

    getList() {
        if (this.tourId) {
            this.tourService.getTourDestinations(this.tourId).subscribe(schedules => {
                this.source.load(schedules);
            });
        }
        else {
            this._service.getList().subscribe(schedules => {
                this.source.load(schedules);
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