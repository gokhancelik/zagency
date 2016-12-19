import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Tour, TourSchedule, ProductType } from '../../shared/models';
import {
    TourSchedulePrice,
    TourSchedulePriceAddComponent,
    TourSchedulePriceEditComponent
} from '../tourSchedulePrice/index';
import { ModalDirective } from 'ng2-bootstrap';
import {
    ProductTypeService,
    TourService
} from '../../shared/services/index';

@Component({
    selector: 'tour-edit',
    templateUrl: 'tour.form.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TourEditComponent implements OnInit {

    @Input() model: Tour;
    productTypes: ProductType[];
    submitted: boolean;
    errorMessage: string;
    isNew: boolean = true;
    selectedTourScheduleId: number = 0;
    constructor(
        private productTypeService: ProductTypeService,
        private tourService: TourService,
        private router: Router,
        private activetedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.getTour();
        this.productTypeService.getList().subscribe(
            data => this.productTypes = data,
            error => this.errorMessage = <any>error);
    }
    getTour() {
        this.activetedRoute.params.forEach((params: Params) => {
            let productBaseId = params['id'];
            this.tourService.getById(productBaseId)
                .subscribe(
                editTour => {
                    this.model = editTour;
                },
                err => {
                    this.errorMessage = err;
                });
        });
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
    publish(): void {
        this.tourService.publish(this.model, this.model.productBaseId).subscribe(data => {
            this.getTour();
        });
    }
}
