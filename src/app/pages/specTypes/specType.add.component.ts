import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/index';
import { SpecType } from '../../shared/models';
import { SpecTypeService } from '../../shared/services/index';
import { SPECTYPE_FORM_MODEL } from './specType-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'specType-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})

export class SpecTypeAddComponent extends AddComponent<SpecType>  {
    _service: SpecTypeService;
    tourId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = SPECTYPE_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: SpecTypeService, dynamicFormService: DynamicFormService) {
        super(service, SpecType, dynamicFormService, SPECTYPE_FORM_MODEL);
        this._service = service;
    }
}
