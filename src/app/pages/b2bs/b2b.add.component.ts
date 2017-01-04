import { Observable } from 'rxjs/Rx';
import { Company } from './../../shared/models/company.model';
import { CompanyService } from './../../shared/services/company.service';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/index';
import { B2B } from '../../shared/models/b2b.model';
import { B2BService } from '../../shared/services/index';
import { B2B_FORM_MODEL } from './b2b-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TypeaheadMatch } from 'ng2-bootstrap';
@Component({
    selector: 'b2b-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'form.component.html'
})

export class B2BAddComponent extends AddComponent<B2B>  {
    _service: B2BService;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    public typeaheadLoading: boolean = false;
    public typeaheadNoResults: boolean = false;
    public companyDataSource: Observable<Company[]>;
    constructor(service: B2BService, dynamicFormService: DynamicFormService,
        private companyService: CompanyService) {
        super(B2B, dynamicFormService, service, B2B_FORM_MODEL);
        this._service = service;
        this.companyDataSource = companyService.getAll().take(1);
    }
    companyOnSelect($event: TypeaheadMatch) {
        this.formGroup.controls["distributor"].setValue($event.item.id);
        this.formGroup.controls["distributor_name"].setValue($event.item.name);
    }
    public changeTypeaheadLoading(e: boolean): void {
        this.typeaheadLoading = e;
    }

    public changeTypeaheadNoResults(e: boolean): void {
        this.typeaheadNoResults = e;
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
