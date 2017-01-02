import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { SpecType } from '../../shared/models';
import { SpecTypeService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { SPECTYPE_FORM_MODEL } from './specType-form.model';

@Component({
    selector: 'specType-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class SpecTypeAddComponent extends AddComponent<SpecType> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: SpecTypeService, dynamicFormService: DynamicFormService) {
        super(SpecType, dynamicFormService, service, SPECTYPE_FORM_MODEL);
    }
}
