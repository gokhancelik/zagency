import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedule } from '../../shared/models';
import { TourScheduleService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURSCHEDULE_FORM_MODEL } from './tourSchedule-form.model';
@Component({
    selector: 'tourSchedule-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourSchedule.form.component.html'
})
export class TourScheduleAddComponent extends AddComponent<TourSchedule> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: TourSchedule;
    tourId: number;
    private _service: TourScheduleService;
    constructor(service: TourScheduleService, dynamicFormService: DynamicFormService) {
        super(service, TourSchedule, dynamicFormService, TOURSCHEDULE_FORM_MODEL);
        this._service = service;
    }
    open(): void {
        this.model = new TourSchedule();
        this.model.tourId = this.tourId;
        super.open();
    }
    setTourId(tourId: number): void {
        this.tourId = tourId;
    }
    
}
