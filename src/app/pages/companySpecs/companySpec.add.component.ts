import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { COMPANYSPEC_FORM_MODEL } from './companySpec-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { CompanySpec } from '../../shared/models/';
import { CompanySpecService } from '../../shared/services';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'companySpec-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class CompanySpecAddComponent extends AddComponent<CompanySpec>  {
    _service: CompanySpecService;
    productBaseId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = COMPANYSPEC_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: CompanySpecService, dynamicFormService: DynamicFormService) {
        super(service, CompanySpec, dynamicFormService, COMPANYSPEC_FORM_MODEL);
        this._service = service;
    }
}
