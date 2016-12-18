import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { TOURSCHEDULESPEC_FORM_MODEL } from './tourScheduleSpec-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { TourScheduleSpec } from '../../shared/models/';
import { TourScheduleSpecService } from '../../shared/services';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'tourScheduleSpec-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class TourScheduleSpecAddComponent extends AddComponent<TourScheduleSpec>  {
    _service: TourScheduleSpecService;
    tourId: number;
    tourScheduleId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURSCHEDULESPEC_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourScheduleSpecService, dynamicFormService: DynamicFormService) {
        super(service, TourScheduleSpec, dynamicFormService, TOURSCHEDULESPEC_FORM_MODEL);
        this._service = service;
    }
    open(): void {
        this.model = new TourScheduleSpec();
        this.model.tourScheduleId = this.tourScheduleId;
        super.open();
    }
    setTourScheduleId(tourScheduleId: number): void {
        this.tourScheduleId = tourScheduleId;
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
