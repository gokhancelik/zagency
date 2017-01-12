import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ROLE_FORM_MODEL } from './role-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { Role } from '../../shared/models/';
import { RoleService } from '../../shared/services/';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
    selector: 'role-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class RoleAddComponent extends AddComponent<Role>  {
    productBaseId: number;
    _af: AngularFire;
    myDynamicFormModel: Array<DynamicFormControlModel> = ROLE_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(dynamicFormService: DynamicFormService, private _service: RoleService) {
        super(Role, dynamicFormService, _service, ROLE_FORM_MODEL);
    }
}
