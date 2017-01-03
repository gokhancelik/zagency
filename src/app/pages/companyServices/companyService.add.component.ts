import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { CompanyServiceModel, Company } from '../../shared/models';
import { CompanyServiceService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { COMPANYSERVICE_FORM_MODEL } from './companyService-form.model';
@Component({
    selector: 'companyService-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class CompanyServiceAddComponent extends AddComponent<CompanyServiceModel> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: CompanyServiceModel;
    company: Company;
    constructor(private _service: CompanyServiceService, dynamicFormService: DynamicFormService) {
        super(CompanyServiceModel, dynamicFormService, _service, COMPANYSERVICE_FORM_MODEL);
    }
    open(): void {
        this.model = new CompanyServiceModel();
        this.model.company = this.company.id;
        super.open();
    }
    setCompany(tour: Company): void {
        this.company = tour;
    }
    // save(model: CompanyService) {
    //     if (model) {
    //         this._service.add(model);
    //         if (this.onSaved) this.onSaved.emit();
    //         if (this.formModal) this.formModal.hide();
    // //     }
    // }
}
