import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, ProductPhotoAddComponent, ProductPhotoEditComponent,
    ProductPhotoListComponent
} from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule, ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import * as moment from 'moment';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {
    DynamicFormsCoreModule, DynamicFormService, DynamicFormRelationService
} from '@ng2-dynamic-forms/core';
import {
    DynamicFormsBootstrapUIModule
} from '@ng2-dynamic-forms/ui-bootstrap';
@NgModule({
    imports: [routing, RouterModule, ModalModule, CommonModule, FormsModule,ReactiveFormsModule,
        CarouselModule, FileUploadModule, ProgressbarModule,
        Ng2SmartTableModule, NgaModule,ReactiveFormsModule],
    exports: [ProductPhotoAddComponent, ProductPhotoEditComponent, ProductPhotoListComponent],
    declarations: [ProductPhotoAddComponent, ProductPhotoEditComponent, ProductPhotoListComponent],
    providers: [DynamicFormService,DynamicFormRelationService],
})
export default class ProductPhotoModule { }
