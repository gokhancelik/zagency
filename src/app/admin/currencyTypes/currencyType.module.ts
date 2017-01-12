import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, CurrencyTypeAddComponent,
    CurrencyTypeEditComponent, CurrencyTypeComponent, CurrencyTypeListComponent
} from './index';
import { CarouselModule, ProgressbarModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import * as moment from 'moment';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
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
        Ng2SmartTableModule, NgProgressModule, NgaModule],
    exports: [CurrencyTypeAddComponent, CurrencyTypeEditComponent, CurrencyTypeListComponent],
    declarations: [CurrencyTypeAddComponent, CurrencyTypeEditComponent, CurrencyTypeListComponent],
    providers: [DynamicFormService, DynamicFormRelationService],
})
export default class CurrencyTypeModule { }
