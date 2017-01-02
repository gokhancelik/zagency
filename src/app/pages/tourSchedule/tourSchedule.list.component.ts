import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TourScheduleAddComponent, TourScheduleEditComponent } from './index';
import { TourSchedule, Tour } from '../../shared/models';
import { TourScheduleService, TourService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'tourSchedule-list',
    templateUrl: 'tourSchedule.list.component.html'
})
export class TourScheduleListComponent extends ListComponent<TourSchedule> {
    @ViewChild('addModal') addModal: TourScheduleAddComponent;
    @ViewChild('editModal') editModal: TourScheduleEditComponent;
    @Input() tour: Tour;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    source: LocalDataSource = new LocalDataSource();

    constructor(
        private datePipe: DatePipe,
        private tourScheduleService: TourScheduleService,
        private tourService: TourService
    ) {
        super(tourScheduleService);
        this.setColumns(TourSchedule.getColumns(this.datePipe));
    }
    getList() {
        if (this.tour) {
            this.tourService.getTourSchedules(this.tour.id).subscribe(
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
        let ts: TourSchedule = event.data as TourSchedule;
        this.openModal(ts.id);
    }
    onRowSelect(event): void {
        let ts: TourSchedule = event.data as TourSchedule;
        this.onRowSelectionChanged.emit(ts);
    }
}
