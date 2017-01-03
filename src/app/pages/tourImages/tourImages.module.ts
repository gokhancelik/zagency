import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TourMainImageUploaderComponent } from './tourMainImageUploader/tourMainImageUploader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ComponentsModule from '../components/components.module';
import { NgaModule } from '../../theme/nga.module';
@NgModule({
    imports: [ComponentsModule, CommonModule, NgaModule, ProgressbarModule],
    exports: [TourMainImageUploaderComponent],
    declarations: [TourMainImageUploaderComponent],
    providers: [],
})
export default class TourImagesModule { }
