import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TourProgramAddComponent, TourProgramEditComponent } from './index';
import { TourProgramService, TourService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { TourProgram } from '../../shared/models/tourProgram.model';

@Component({
    selector: 'tourProgram-list',
    templateUrl: 'tourProgram.list.component.html'
})
export class TourProgramListComponent extends ListComponent<TourProgram> {
    @ViewChild('addModal') addModal: TourProgramAddComponent;
    @ViewChild('editModal') editModal: TourProgramEditComponent;
    @Input() tourId: number = 0;
    title: string = 'Tour Programs';
    _service: TourProgramService;
    constructor(
        service: TourProgramService,
        private tourService: TourService
    ) {
        super(service);
        this.setColumns({
            day: {
                title: 'Day',
                type: 'string'
            },
            description: {
                title: 'Description',
                type: 'string'
            }
        });
        this._service = service;
    }

    getList() {
        if (this.tourId) {
            this.tourService.getTourPrograms(this.tourId).subscribe(schedules => {
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