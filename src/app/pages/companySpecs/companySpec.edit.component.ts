import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { CompanySpec } from '../../shared/models';
import { CompanySpecService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { COMPANY_FORM_MODEL } from './companySpec-form.model';

@Component({
    selector: 'companySpec-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class CompanySpecEditComponent extends EditComponent<CompanySpec> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: CompanySpecService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, COMPANY_FORM_MODEL);
    }
}
