import { ActivatedRoute, Params } from '@angular/router';
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
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'company-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'form.component.html'
})
export class CompanyEditComponent extends EditComponent<Company> {
    @ViewChild('formModal') formModal: ModalDirective;
    title: string = "Company Info";
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(dynamicFormService: DynamicFormService, private _service: CompanyService,
        private activatedRoute: ActivatedRoute) {
        super(Company, _service, dynamicFormService, COMPANY_FORM_MODEL);
    }
    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            super.setKey(params['id']);
        });
        super.open();
        //this.prepareImgCropper();
        super.ngOnInit();
    }
}
