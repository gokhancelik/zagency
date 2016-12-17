import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { TourProgram } from '../../shared/models/tourProgram.model';
import { TourProgramService } from '../../shared/services/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import {TOURPROGRAM_FORM_MODEL} from './tour-form.model'


@Component({
    selector: 'tourProgram-add',
   encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourProgramAddComponent extends AddComponent<TourProgram>  {
   
    _service: TourProgramService;
    tourId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURPROGRAM_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourProgramService, dynamicFormService: DynamicFormService) {
        super(service, TourProgram, dynamicFormService, TOURPROGRAM_FORM_MODEL);
        this._service = service;
    }
    open(): void {
        this.model = new TourProgram();
        this.model.tourId = this.tourId;
        this.formModal.show();
    }
    setTourId(tourId: number): void {
        this.tourId = tourId;
    }
}
