import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { COMPANY_FORM_MODEL } from './company-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { Company } from '../../shared/models/';
import { CompanyService } from '../../shared/services';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'company-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class CompanyAddComponent extends AddComponent<Company>  {
    _service: CompanyService;
    tourId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = COMPANY_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: CompanyService, dynamicFormService: DynamicFormService) {
        super(service, Company, dynamicFormService, COMPANY_FORM_MODEL);
        this._service = service;
    }
}
