import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgaModule } from '../../theme/nga.module';
import {
    routing, CompanyListComponent, CompanyComponent,
    CompanyEditComponent, CompanyAddComponent
} from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import * as moment from 'moment';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import CompanySpecModule from '../companySpecs/companySpec.module';
import CompanyServiceModule from '../companyServices/companyService.module';
import { CanActivateCompanyEdit } from '../../security/guards/companyEdit.guard';
import {
    DynamicFormsCoreModule, DynamicFormService, DynamicFormRelationService
} from '@ng2-dynamic-forms/core';
import {
    DynamicFormsBootstrapUIModule
} from '@ng2-dynamic-forms/ui-bootstrap';
@NgModule({
    imports: [routing, RouterModule, CommonModule, FormsModule, DynamicFormsCoreModule,
        DynamicFormsBootstrapUIModule, FormsModule,MomentModule,
        ReactiveFormsModule, CompanySpecModule,CompanyServiceModule,
        Ng2SmartTableModule, NgaModule, ModalModule, DropdownModule],
    exports: [],
    declarations: [CompanyListComponent, CompanyComponent,
        CompanyEditComponent, CompanyAddComponent
    ],
    providers: [DynamicFormService, DynamicFormRelationService,CanActivateCompanyEdit],
})
export default class CompanyModule { }
