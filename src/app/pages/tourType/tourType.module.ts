import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, TourTypeListComponent, TourTypeComponent, TourTypeAddComponent
} from './index';
import { CarouselModule, ProgressbarModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import * as moment from 'moment';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
    imports: [routing, RouterModule, ModalModule, CommonModule, FormsModule,
        CarouselModule, FileUploadModule, ProgressbarModule, DatepickerModule,
        Ng2SmartTableModule, NgaModule, ReactiveFormsModule, FormsModule],
    exports: [TourTypeListComponent],
    declarations: [TourTypeListComponent, TourTypeComponent, TourTypeAddComponent],
    providers: [],
})
export default class TourTypeModule { }
