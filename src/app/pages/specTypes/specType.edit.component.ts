import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { EditComponent } from '../../core/index';
import { ModalDirective } from 'ng2-bootstrap';
import { SpecTypeService } from '../../shared/services/index';
import { SpecType } from '../../shared/models';
import { SPECTYPE_FORM_MODEL } from './specType-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'specType-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class SpecTypeEditComponent extends EditComponent<SpecType> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = SPECTYPE_FORM_MODEL;
    constructor(service: SpecTypeService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, SPECTYPE_FORM_MODEL);
    }
}
