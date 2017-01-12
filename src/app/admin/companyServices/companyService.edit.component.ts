import { FormGroup } from '@angular/forms';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { CompanyServiceModel, Company } from '../../shared/models';
import { CompanyServiceService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { COMPANYSERVICE_FORM_MODEL } from './companyService-form.model';
@Component({
    selector: 'companyService-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class CompanyServiceEditComponent extends EditComponent<CompanyServiceModel> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    company: Company;
    constructor(private _service: CompanyServiceService, dynamicFormService: DynamicFormService) {
        super(CompanyServiceModel, _service, dynamicFormService, COMPANYSERVICE_FORM_MODEL);
    }
    setCompany(tour: Company): void {
        this.company = tour;
    }
}
