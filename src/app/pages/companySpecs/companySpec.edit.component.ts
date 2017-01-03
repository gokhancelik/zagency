import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter, Input
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
    templateUrl: 'form.component.html'

})
export class CompanySpecEditComponent extends EditComponent<CompanySpec> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    @Input() company: Company;
    @Input() key: string;
    constructor(private _service: CompanySpecService, dynamicFormService: DynamicFormService,
        private activatedRoute: ActivatedRoute) {
        super(CompanySpec, _service, dynamicFormService, COMPANYSPEC_FORM_MODEL);
    }
    ngOnInit() {
        if (this.key)
            super.setKey(this.key);
        super.open();
        //this.prepareImgCropper();
        super.ngOnInit();
    }
    setCompany(company: Company): void {
        this.company = company;
    }
}
