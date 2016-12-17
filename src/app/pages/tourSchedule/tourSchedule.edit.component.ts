import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedule } from '../../shared/models';
import { TourScheduleService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURSCHEDULE_FORM_MODEL } from './tourSchedule-form.model';
@Component({
    selector: 'tourSchedule-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class TourScheduleEditComponent extends EditComponent<TourSchedule> {
    model: TourSchedule;
    tourScheduleId: number;

    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURSCHEDULE_FORM_MODEL;
    constructor(service: TourScheduleService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, TOURSCHEDULE_FORM_MODEL);
    }
}
