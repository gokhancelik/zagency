import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, TourListComponent, DraftsComponent,
    TourAddComponent, TourComponent, TourEditComponent
} from './index';
import { CarouselModule, ProgressbarModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import TourScheduleModule from '../tourSchedule/tourSchedule.module';
import TourProgramModule from '../tourPrograms/tourProgram.module';
import TourPhotoModule from '../tourPhotos/tourPhoto.module';
import TourSchedulePriceModule from '../tourSchedulePrice/tourSchedulePrice.module';
import TourScheduleSpecModule from '../tourScheduleSpecs/tourScheduleSpec.module';
import TourDestinationModule from '../tourDestinations/tourDestination.module';
import EditorsModule from '../editors/editors.module';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import * as moment from 'moment';
import {
    DynamicFormsCoreModule, DynamicFormService, DynamicFormRelationService
} from '@ng2-dynamic-forms/core';
import {
    DynamicFormsBootstrapUIModule
} from '@ng2-dynamic-forms/ui-bootstrap';
@NgModule({
    imports: [routing, DynamicFormsCoreModule, ReactiveFormsModule,
        DynamicFormsBootstrapUIModule, RouterModule, TourScheduleModule, TourSchedulePriceModule,
        TourProgramModule, TourPhotoModule, TourDestinationModule,
        CommonModule, EditorsModule, TourScheduleSpecModule,
        FormsModule, CarouselModule, FileUploadModule,
        ProgressbarModule, DatepickerModule, Ng2SmartTableModule, NgaModule],
    exports: [],
    declarations: [TourListComponent, DraftsComponent,
        TourComponent, TourEditComponent, TourAddComponent],
    providers: [DatePipe, DynamicFormService, DynamicFormRelationService],
})
export default class TourModule { }
