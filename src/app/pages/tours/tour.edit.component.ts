import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Tour, TourSchedule } from '../../shared/models';
import { TourPhoto } from '../tourPhoto/tourPhoto.model';
import {
    TourSchedulePrice,
    TourSchedulePriceAddComponent,
    TourSchedulePriceEditComponent
} from '../tourSchedulePrice/index';
import { TourType } from '../tourType/tourType.model';
import { ModalDirective } from 'ng2-bootstrap';
import {
    TourTypeService,
    TourService, TourPhotoService, TourScheduleService, TourSchedulePriceService
} from '../../shared/services/index';

@Component({
    selector: 'tour-edit',
    templateUrl: 'tour.form.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TourEditComponent implements OnInit {

    @Input() model: Tour;
    tourTypes: TourType[];
    submitted: boolean;
    errorMessage: string;
    isNew: boolean = true;
    selectedTourScheduleId: number = 0;
    constructor(
        private tourTypeService: TourTypeService,
        private tourService: TourService,
        private tourPhotoService: TourPhotoService,
        private router: Router,
        private activetedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.activetedRoute.params.forEach((params: Params) => {
            let tourId = params['id'];
            this.tourService.getById(tourId)
                .subscribe(
                editTour => {
                    this.model = editTour;
                },
                err => {
                    this.errorMessage = err;
                });
        });
        this.tourTypeService.get().subscribe(
            data => this.tourTypes = data,
            error => this.errorMessage = <any>error);
    }
    saveTour() {
        this.submitted = true;
        this.tourService.update(this.model, this.model.id).subscribe(
            data => {
                this.submitted = false;
                // this.router.navigate(['/tours/list']);
            },
            error => {
                this.errorMessage = <any>error;
                this.submitted = false;
            }
        );
    }
    onTsRowSelectionChanged(data): void {
        let tt: TourSchedule = data as TourSchedule;
        if (tt)
            this.selectedTourScheduleId = tt.tourScheduleId;
    }
}
