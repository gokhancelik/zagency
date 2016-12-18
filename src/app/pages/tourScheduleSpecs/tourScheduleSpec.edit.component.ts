import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourScheduleSpec } from '../../shared/models';
import { TourScheduleSpecService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { TOURSCHEDULESPEC_FORM_MODEL } from './tourScheduleSpec-form.model';

@Component({
    selector: 'tourScheduleSpec-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourScheduleSpecEditComponent extends EditComponent<TourScheduleSpec> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourScheduleSpecService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, TOURSCHEDULESPEC_FORM_MODEL);
    }
}
