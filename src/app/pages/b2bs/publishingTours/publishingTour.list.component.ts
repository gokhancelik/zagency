import { PublishingTourService } from './../../../shared/services/publishingTour.service';
import {
    Component, OnInit, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'publishingTour-list',
    templateUrl: 'publishingTour.list.component.html'
})
export class PublishingTourListComponent implements OnInit {
    constructor(
        private publishingTourService: PublishingTourService
    ) {
    }
    ngOnInit() {
    }
}
