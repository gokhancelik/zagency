import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, TourPhotoAddComponent, TourPhotoEditComponent,
    TourPhotoListComponent
} from './index';
import { CarouselModule, ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import * as moment from 'moment';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
    imports: [routing, RouterModule, ModalModule, CommonModule, FormsModule, ReactiveFormsModule,
        CarouselModule, FileUploadModule, ProgressbarModule,
        Ng2SmartTableModule, NgaModule],
    exports: [TourPhotoAddComponent, TourPhotoEditComponent, TourPhotoListComponent],
    declarations: [TourPhotoAddComponent, TourPhotoEditComponent, TourPhotoListComponent],
    providers: [],
})
export default class TourPhotoModule { }
