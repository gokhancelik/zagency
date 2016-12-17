import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    routing, TourListComponent, DraftsComponent,
    TourAddComponent, TourComponent, TourEditComponent
} from './index';
import { CarouselModule, ProgressbarModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import TourScheduleModule from '../tourSchedule/tourSchedule.module';
import TourProgramModule from '../tourPrograms/tourProgram.module';
import TourPhotoModule from '../tourPhotos/tourPhoto.module';
import TourSchedulePriceModule from '../tourSchedulePrice/tourSchedulePrice.module';
import TourDestinationModule from '../tourDestinations/tourDestination.module';
import EditorsModule from '../editors/editors.module';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import * as moment from 'moment';
@NgModule({
    imports: [routing, RouterModule, TourScheduleModule, TourSchedulePriceModule,
        TourProgramModule, TourPhotoModule, TourDestinationModule,
        CommonModule, EditorsModule,
        FormsModule, CarouselModule, FileUploadModule,
        ProgressbarModule, DatepickerModule, Ng2SmartTableModule, NgaModule],
    exports: [],
    declarations: [TourListComponent, DraftsComponent,
        TourComponent, TourEditComponent, TourAddComponent],
    providers: [DatePipe],
})
export default class TourModule { }
