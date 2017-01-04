import { emailValidator } from './../../theme/validators/email.validator';
import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgaModule } from '../../theme/nga.module';
import {
    routing, UserListComponent, UserComponent,
    UserEditComponent, UserAddComponent
} from './index';
import { CanActivateUserEdit } from '../../security/guards/userEdit.guard';

import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import * as moment from 'moment';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {
    DynamicFormsCoreModule, DynamicFormService, DynamicFormRelationService,

} from '@ng2-dynamic-forms/core';
import {
    DynamicFormsBootstrapUIModule
} from '@ng2-dynamic-forms/ui-bootstrap';
@NgModule({
    imports: [routing, RouterModule, CommonModule, FormsModule, DynamicFormsCoreModule,
        DynamicFormsBootstrapUIModule, FormsModule,
        ReactiveFormsModule,
        Ng2SmartTableModule, NgaModule, ModalModule, DropdownModule],
    exports: [UserListComponent],
    declarations: [UserListComponent, UserComponent,
        UserEditComponent, UserAddComponent
    ],
    providers: [DynamicFormService, CanActivateUserEdit, DynamicFormRelationService,

        {
            provide: NG_VALIDATORS,
            useValue: emailValidator,
            multi: true
        }
    ],
})
export default class UserModule { }
