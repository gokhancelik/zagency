import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { SpecType } from '../../shared/models';
import { SpecTypeService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { SPECTYPE_FORM_MODEL } from './specType-form.model';

@Component({
    selector: 'specType-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class SpecTypeEditComponent extends EditComponent<SpecType>{
     _service: SpecTypeService;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: SpecTypeService, dynamicFormService: DynamicFormService) {
        super(SpecType, service, dynamicFormService, SPECTYPE_FORM_MODEL);
        this._service=service;
    }
}
