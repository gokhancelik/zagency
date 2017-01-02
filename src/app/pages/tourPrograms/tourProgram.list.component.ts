import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TourProgramAddComponent, TourProgramEditComponent } from './index';
import { TourProgram, Tour } from '../../shared/models';
import { TourProgramService, TourService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'tourProgram-list',
    templateUrl: 'tourProgram.list.component.html'
})
export class TourProgramListComponent extends ListComponent<TourProgram> {
    @ViewChild('addModal') addModal: TourProgramAddComponent;
    @ViewChild('editModal') editModal: TourProgramEditComponent;
    @Input() tour: Tour;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    source: LocalDataSource = new LocalDataSource();

    constructor(
        private datePipe: DatePipe,
        private touProgramService: TourProgramService,
        private tourService: TourService
    ) {
        super(touProgramService);
        this.setColumns(TourProgram.getColumns(this.datePipe));
    }
    getList() {
        if (this.tour) {
            this.tourService.getTourPrograms(this.tour.id).subscribe(
                data => this.source.load(data)
            );
        }
    }
    openModal(key: string) {
        if (key) {
            this.editModal.setTour(this.tour);
            this.editModal.setKey(key);
            this.editModal.open();
        }
        else {
            this.addModal.setTour(this.tour);
            this.addModal.open();
        }
    }
    onCreate(event): void {
        this.openModal(null);
    }
    onEdit(event): void {
        let ts: TourProgram = event.data as TourProgram;
        this.openModal(ts.id);
    }
    onRowSelect(event): void {
        let ts: TourProgram = event.data as TourProgram;
        this.onRowSelectionChanged.emit(ts);
    }
}
