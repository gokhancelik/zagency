import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { TourDestinationAddComponent, TourDestinationEditComponent } from './index';
import { TourDestination, Tour } from '../../shared/models';
import { TourDestinationService, TourService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'tourDestination-list',
    templateUrl: 'tourDestination.list.component.html'
})
export class TourDestinationListComponent extends ListComponent<TourDestination> {
    @ViewChild('addModal') addModal: TourDestinationAddComponent;
    @ViewChild('editModal') editModal: TourDestinationEditComponent;
    @Input() tour: Tour;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    source: LocalDataSource = new LocalDataSource();

    constructor(
        private tourDestinationService: TourDestinationService,
        private tourService: TourService
    ) {
        super(tourDestinationService);
        this.setColumns(TourDestination.getColumns());
    }
    getList() {
        if (this.tour) {
            this.tourService.getTourDestinations(this.tour.id).subscribe(
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
        let ts: TourDestination = event.data as TourDestination;
        this.openModal(ts.id);
    }
    onRowSelect(event): void {
        let ts: TourDestination = event.data as TourDestination;
        this.onRowSelectionChanged.emit(ts);
    }
}
