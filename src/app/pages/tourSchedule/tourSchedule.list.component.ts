import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TourScheduleAddComponent, TourScheduleEditComponent } from './index';
import { TourSchedule } from '../../shared/models';
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
    @Input() tourId: number = 0;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    source: LocalDataSource = new LocalDataSource();

    constructor(
        private datePipe: DatePipe,
        private tourScheduleService: TourScheduleService,
        private tourService: TourService
    ) {
        super(tourScheduleService);
        this.setColumns({
            start: {
                title: 'Start',
                type: 'Date',
                valuePrepareFunction: (value) => {
                    let raw = new Date(value);
                    let formatted = this.datePipe.transform(raw, 'dd.MM.yyyy');
                    return formatted;
                }
            },
            end: {
                title: 'End',
                type: 'Date',
                valuePrepareFunction: (value) => {
                    let raw = new Date(value);
                    let formatted = this.datePipe.transform(raw, 'dd.MM.yyyy');
                    return formatted;
                }
            },
            quota: {
                title: 'Quota',
                type: 'number'
            }
        });
    }
    getList() {
        if (this.tourId) {
            this.tourService.getTourSchedules(this.tourId).subscribe(schedules => {
                this.source.load(schedules);
            });
        }
        else {
            this.tourScheduleService.getList().subscribe(schedules => {
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
    onEdit(event): void {
        let tt: TourSchedule = event.data as TourSchedule;
        this.openModal(tt.tourScheduleId);
    }
    onRowSelect(event): void {
        let tt: TourSchedule = event.data as TourSchedule;
        this.onRowSelectionChanged.emit(tt);
    }
}