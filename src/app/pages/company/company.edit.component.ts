import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { Company } from '../../shared/models';
import { CompanyService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { COMPANY_FORM_MODEL } from './company-form.model';

@Component({
    selector: 'company-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class CompanyEditComponent extends EditComponent<Company> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = COMPANY_FORM_MODEL;
    constructor(service: CompanyService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, COMPANY_FORM_MODEL);
    }
}
