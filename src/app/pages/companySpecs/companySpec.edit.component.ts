import { FormGroup } from '@angular/forms';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { CompanySpec, Company } from '../../shared/models';
import { CompanySpecService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { COMPANYSPEC_FORM_MODEL } from './companySpec-form.model';
@Component({
    selector: 'companySpec-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class CompanySpecEditComponent extends EditComponent<CompanySpec> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    company: Company;
    constructor(private _service: CompanySpecService, dynamicFormService: DynamicFormService) {
        super(CompanySpec, _service, dynamicFormService, COMPANYSPEC_FORM_MODEL);
    }
    setCompany(company: Company): void {
        this.company = company;
    }
    save(model: any) {
        if (model) {
            this._service.update(this.model.id, model);
        }
        this.close();
    }
}
