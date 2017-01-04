import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, B2BAddComponent,
    B2BEditComponent, B2BComponent, B2BListComponent
} from './index';
import { CarouselModule, ProgressbarModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import * as moment from 'moment';
import { DropdownModule, ModalModule, TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';
// import { TypeaheadModule } from 'ng2-bootstrap/typeahead';
import { NgProgressModule } from 'ng2-progressbar';
import {
    DynamicFormsCoreModule, DynamicFormService, DynamicFormRelationService
} from '@ng2-dynamic-forms/core';
import {
    DynamicFormsBootstrapUIModule
} from '@ng2-dynamic-forms/ui-bootstrap';
@NgModule({
    imports: [routing, RouterModule, ModalModule, CommonModule, FormsModule,
        CarouselModule, ReactiveFormsModule, DynamicFormsBootstrapUIModule,
        FileUploadModule, ProgressbarModule, DatepickerModule, DynamicFormsCoreModule,
        Ng2SmartTableModule, NgProgressModule, NgaModule, TypeaheadModule],
    exports: [B2BAddComponent, B2BEditComponent, B2BListComponent],
    declarations: [B2BAddComponent, B2BEditComponent, B2BListComponent],
    providers: [DynamicFormService, DynamicFormRelationService],
})
export default class B2BModule { }
