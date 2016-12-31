import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { Role } from '../../shared/models';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { ROLE_FORM_MODEL } from './role-form.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RoleService } from '../../shared/services/';

@Component({
    selector: 'role-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class RoleEditComponent extends EditComponent<Role> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(dynamicFormService: DynamicFormService, private _service: RoleService) {
        super(Role, _service, dynamicFormService, ROLE_FORM_MODEL);
    }

    // save(form: FormGroup) {
    //     if (form) {
    //         if (form.value) {
    //             if (!form.valid) {
    //                 return;
    //             }
    //             Object.keys(this.model).forEach(key => {
    //                 this.model[key] = form.value[key] || this.model[key];
    //             });
    //             this.model.company = 'Z-Elektronik';
    //             this._af.database.object('/roles/' + this.data.$key).set(this.model);
    //             this._af.database.object('/companies/' + this.model.company + '/roles/' + this.data.$key).set(true);
    //         }
    //     }
    //     this.close();
    // }
}
