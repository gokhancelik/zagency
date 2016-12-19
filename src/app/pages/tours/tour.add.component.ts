import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tour, TourSchedule, ProductType } from '../../shared/models';
import { ProductPhoto } from '../productPhoto/productPhoto.model';
import {
    TourSchedulePrice,
    TourSchedulePriceAddComponent,
    TourSchedulePriceEditComponent
} from '../tourSchedulePrice/index';
import { ModalDirective } from 'ng2-bootstrap';
import {
    ProductTypeService,
    TourService
} from '../../shared/services';

@Component({
    selector: 'tour-add',
    templateUrl: 'tour.form.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TourAddComponent implements OnInit {
    model: Tour = new Tour();
    productTypes: ProductType[];
    submitted: boolean;
    errorMessage: string;
    isNew: boolean = true;
    selectedTourScheduleId: number = 0;
    constructor(
        private productTypeService: ProductTypeService,
        private tourService: TourService
    ) {
    }
    ngOnInit() {
        this.productTypeService.getList().subscribe(
            data => this.productTypes = data,
            error => this.errorMessage = <any>error);
    }
    saveTour() {
        this.submitted = true;
        this.tourService.add(this.model).subscribe(
            data => {
                this.submitted = false;
                this.model = data;
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
