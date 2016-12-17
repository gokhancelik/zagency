import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { TourDestination } from '../../shared/models';
import { TourDestinationService } from '../../shared/services';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURDESTINATION_FORM_MODEL } from './tourDestination-form.model';

@Component({
    selector: 'tourDestination-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourDestinationAddComponent extends AddComponent<TourDestination>  {
    _service: TourDestinationService;
    tourId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURDESTINATION_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourDestinationService, dynamicFormService: DynamicFormService) {
        super(service, TourDestination, dynamicFormService, TOURDESTINATION_FORM_MODEL);
        this._service = service;
    }
    open(): void {
        this.model = new TourDestination();
        this.model.tourId = this.tourId;
        this.formModal.show();
    }
    setTourId(tourId: number): void {
        this.tourId = tourId;
    }
}
