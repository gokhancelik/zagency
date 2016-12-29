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
    templateUrl: '../../core/form.component.html'

})
export class CompanyAddComponent extends AddComponent<Company>  {
    _service: CompanyService;
    productBaseId: number;
    _af: AngularFire;
    myDynamicFormModel: Array<DynamicFormControlModel> = COMPANY_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(dynamicFormService: DynamicFormService,
        af: AngularFire) {
        super(Company, dynamicFormService, 
        af.database.list('/companies'), COMPANY_FORM_MODEL);
        this._af = af;
    }
}
