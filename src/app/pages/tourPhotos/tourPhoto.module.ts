import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, TourPhotoAddComponent, TourPhotoEditComponent,
    TourPhotoListComponent
} from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule, ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule } from '@angular/forms';
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
    imports: [routing,DynamicFormsBootstrapUIModule, DynamicFormsCoreModule,RouterModule, ModalModule, CommonModule, FormsModule,
        CarouselModule, FileUploadModule, ProgressbarModule,
        Ng2SmartTableModule, NgaModule],
    exports: [TourPhotoAddComponent, TourPhotoEditComponent, TourPhotoListComponent],
    declarations: [TourPhotoAddComponent, TourPhotoEditComponent, TourPhotoListComponent],
    providers: [DynamicFormService,DynamicFormRelationService],
})
export default class TourPhotoModule { }
