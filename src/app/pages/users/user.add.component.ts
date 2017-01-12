import { CompanyAddComponent } from './../company/company.add.component';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { USER_FORM_MODEL } from './user-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { User, Role, Company } from '../../shared/models/';
import { UserService, RoleService, CompanyService } from '../../shared/services/';
import {
    DynamicFormControlModel, DynamicFormService,
    DynamicFormOption, DynamicFormOptionConfig, DynamicSelectModel
} from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'user-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class UserAddComponent extends AddComponent<User>  {
    productBaseId: number;
    _af: AngularFire;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    companies: Company[];
    constructor(dynamicFormService: DynamicFormService,
        private _service: UserService,
        private _companyService: CompanyService,
        private _roleService: RoleService) {
        super(User, dynamicFormService, _service, USER_FORM_MODEL);
        USER_FORM_MODEL.forEach(value => {
            if (value.id === 'role') {
                let select = value as DynamicSelectModel<any>;
                _roleService.getAll().subscribe(data => {
                    data.forEach(r => {
                        let s = new DynamicFormOption<any>(
                            { value: r.id, label: r.name }
                        );
                        select.options.push(s);
                    });
                });

            }
            if (value.id === 'company') {
                let that = this;
                let select = value as DynamicSelectModel<any>;
                _companyService.getByRole().take(1).subscribe(data => {
                    that.companies = data;
                    data.forEach(r => {
                        // if (r.name !== 'superadmin') {
                        let s = new DynamicFormOption<any>(
                            { value: r.id, label: r.name }
                        );
                        select.options.push(s);
                        //  }
                    });


                });

            }
        });
    }
    ngOnInit() {
    }
}
