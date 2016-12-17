import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, TourPhotoAddComponent, TourPhotoEditComponent,
    TourPhotoListComponent
} from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule, ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
<<<<<<< HEAD
=======
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
>>>>>>> 12faa10e5ce2d8e38ba77d581fc5435f4f580406
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
<<<<<<< HEAD
    imports: [routing,DynamicFormsBootstrapUIModule, DynamicFormsCoreModule,RouterModule, ModalModule, CommonModule, FormsModule,
=======
    imports: [routing, RouterModule, ModalModule, CommonModule, FormsModule, ReactiveFormsModule,
>>>>>>> 12faa10e5ce2d8e38ba77d581fc5435f4f580406
        CarouselModule, FileUploadModule, ProgressbarModule,
        Ng2SmartTableModule, NgaModule,ReactiveFormsModule],
    exports: [TourPhotoAddComponent, TourPhotoEditComponent, TourPhotoListComponent],
    declarations: [TourPhotoAddComponent, TourPhotoEditComponent, TourPhotoListComponent],
    providers: [DynamicFormService,DynamicFormRelationService],
})
export default class TourPhotoModule { }
