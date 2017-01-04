import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PublishingTourAddComponent, PublishingTourEditComponent } from './index';
import { TourSchedule, PublishingTour } from '../../shared/models';
import { TourScheduleService, PublishingTourService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'tourSchedule-list',
    templateUrl: 'tourSchedule.list.component.html'
})
export class PublishingTourListComponent extends ListComponent<PublishingTour> {
    @ViewChild('addModal') addModal: PublishingTourAddComponent;
    @ViewChild('editModal') editModal: PublishingTourEditComponent;
    @Input() tourschedule: TourSchedule;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    source: LocalDataSource = new LocalDataSource();

    constructor(
        private datePipe: DatePipe,
        private tourScheduleService: TourScheduleService,
        private publishingTourService: PublishingTourService
    ) {
        super(publishingTourService);
        this.setColumns(PublishingTour.getColumns(this.datePipe));
    }
    getList() {
        if (this.tourschedule) {
            this.tourScheduleService.getPublishingTours(this.tourschedule.id).subscribe(
                data => this.source.load(data)
            );
        }
    }
    openModal(key: string) {
        if (key) {
            this.editModal.setTourSchedule(this.tourschedule);
            this.editModal.setKey(key);
            this.editModal.open();
        }
        else {
            this.addModal.setTourSchedule(this.tourschedule);
            this.addModal.open();
        }
    }
    onCreate(event): void {
        this.openModal(null);
    }
    onEdit(event): void {
        let ts: PublishingTour = event.data as PublishingTour;
        this.openModal(ts.id);
    }
    onRowSelect(event): void {
        let ts: PublishingTour = event.data as PublishingTour;
        this.onRowSelectionChanged.emit(ts);
    }
}
