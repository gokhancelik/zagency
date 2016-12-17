import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourType } from '../tourType/tourType.model';
import { TourTypeService } from '../../shared/services/index';

@Component({
    selector: 'tour-type-add',
    templateUrl: 'tourType.add.component.html'
})
export class TourTypeAddComponent implements OnInit {
    model: TourType = new TourType();
    submitted: boolean;
    errorMessage: string;
    constructor(
        private tourTypeService: TourTypeService,
        private router: Router) {

    }
    active = true;
    ngOnInit() {
    }
    newTourType() {
        this.model = new TourType();
        this.active = false;
        setTimeout(() => this.active = true, 0);

    }
    onSubmit() {
        this.submitted = true;
        this.model.companyId = 1;
        this.tourTypeService.add(this.model).subscribe(
            data => {
                this.router.navigate(['/tourTypes/list']);
            },
            error => {
                this.errorMessage = <any>error;
                this.submitted = false;
            }
        );
    }

}
