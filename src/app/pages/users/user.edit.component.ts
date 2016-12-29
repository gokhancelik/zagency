import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { User } from '../../shared/models';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { USER_FORM_MODEL } from './user-form.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../../shared/services/';

@Component({
    selector: 'user-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class UserEditComponent extends EditComponent<User> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(dynamicFormService: DynamicFormService, private _service: UserService) {
        super(User, _service, dynamicFormService, USER_FORM_MODEL);
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
    //             this._af.database.object('/users/' + this.data.$key).set(this.model);
    //             this._af.database.object('/companies/' + this.model.company + '/users/' + this.data.$key).set(true);
    //         }
    //     }
    //     this.close();
    // }
}
