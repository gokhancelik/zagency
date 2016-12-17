import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourProgram } from '../../shared/models/tourProgram.model';
import { TourProgramService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURPROGRAM_FORM_MODEL } from './tourProgram-form.model';

@Component({
    selector: 'tourProgram-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourProgramEditComponent extends EditComponent<TourProgram>{
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURPROGRAM_FORM_MODEL;
    constructor(service: TourProgramService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, TOURPROGRAM_FORM_MODEL);
    }
}
