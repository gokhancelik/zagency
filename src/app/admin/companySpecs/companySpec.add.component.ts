import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter, Input
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { Company, CompanySpec } from '../../shared/models';
import { CompanySpecService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { COMPANYSPEC_FORM_MODEL } from './companySpec-form.model';
@Component({
    selector: 'companySpec-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'form.component.html'
})
export class CompanySpecAddComponent extends AddComponent<CompanySpec> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: CompanySpec;
    @Input() company: Company;
    constructor(private _service: CompanySpecService, dynamicFormService: DynamicFormService) {
        super(CompanySpec, dynamicFormService, _service, COMPANYSPEC_FORM_MODEL);
    }
    ngOnInit() {
        if (this.company)
            this.open();
    }
    open(): void {
        this.model = new CompanySpec();
        this.model.company = this.company.id;
        super.open();
    }
    setCompany(company: Company): void {
        this.company = company;
    }

}
