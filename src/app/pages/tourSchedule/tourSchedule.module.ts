import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, TourScheduleAddComponent,
    TourScheduleEditComponent, TourScheduleListComponent
} from './index';
import { CarouselModule, ProgressbarModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        routing, RouterModule, ModalModule, CommonModule, FormsModule, CarouselModule,
        FileUploadModule, DynamicFormsCoreModule, DynamicFormsBootstrapUIModule,
        ProgressbarModule, DatepickerModule, Ng2SmartTableModule, NgaModule, NgbModule],
    exports: [TourScheduleAddComponent, TourScheduleEditComponent, TourScheduleListComponent],
    declarations: [TourScheduleAddComponent, TourScheduleEditComponent, TourScheduleListComponent],
    providers: [DynamicFormService, DynamicFormRelationService],
})
export default class TourScheduleModule { }
