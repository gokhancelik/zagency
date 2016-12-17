import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourType } from '../../shared/models';
import { TourTypeService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { TOURTYPE_FORM_MODEL } from './tourType-form.model';

@Component({
    selector: 'tourType-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourTypeEditComponent extends EditComponent<TourType> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURTYPE_FORM_MODEL;
    constructor(service: TourTypeService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, TOURTYPE_FORM_MODEL);
    }
}
