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
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
    selector: 'company-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'form.component.html'

})
export class CompanyAddComponent extends AddComponent<Company>  {
    myDynamicFormModel: Array<DynamicFormControlModel> = COMPANY_FORM_MODEL;
    title: string = "Company Info";
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(dynamicFormService: DynamicFormService,
        private _service: CompanyService) {
        super(Company, dynamicFormService, _service, COMPANY_FORM_MODEL);
    }
}
