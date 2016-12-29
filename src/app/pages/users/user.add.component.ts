import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { USER_FORM_MODEL } from './user-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { User } from '../../shared/models/';
import { UserService } from '../../shared/services/';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
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
    myDynamicFormModel: Array<DynamicFormControlModel> = USER_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(dynamicFormService: DynamicFormService, private _service: UserService) {
        super(User, dynamicFormService, _service, USER_FORM_MODEL);
    }
}
