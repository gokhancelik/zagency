import { CropperSettings } from 'ng2-img-cropper';
import { TOUR_FORM_MODEL } from './tour-form.model';
import { AddComponent } from './../../core/add.component';
import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tour, TourSchedule } from '../../shared/models';
import {
    TourCategoryService,
    TourService, ImageSizeService
} from '../../shared/services';
import {
    DynamicFormControlModel, DynamicFormService,
    DynamicFormOption, DynamicFormOptionConfig, DynamicSelectModel
} from '@ng2-dynamic-forms/core';
@Component({
    selector: 'tour-add',
    templateUrl: 'tour.form.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TourAddComponent extends AddComponent<Tour> {
    selectedTourScheduleId: number = 0;
    uploaderContainer: Array<any>;
    constructor(
        private tourService: TourService, dynamicFormService: DynamicFormService,
        private _tourCategoryService: TourCategoryService,
        private imageSizeService: ImageSizeService
    ) {
        super(Tour, dynamicFormService, tourService, TOUR_FORM_MODEL);
        TOUR_FORM_MODEL.forEach(value => {
            if (value.id === 'tourCategory') {
                let select = value as DynamicSelectModel<any>;
                _tourCategoryService.getAll().take(1).subscribe(data => {
                    data.forEach(r => {
                        // if (r.name !== 'superadmin') {
                        let s = new DynamicFormOption<any>(
                            { value: r.$key, label: r.name, disabled: r.name === 'superadmin' }
                        );
                        select.options.push(s);
                        // }
                    });
                });

            }
        });
    }
    ngOnInit() {
        this.formGroup.controls['name'].valueChanges.subscribe(data => {
            console.log('Form changes', data);
            if (data) {
                let d = <string>data;
                this.formGroup.controls['urlPath'].setValue(d.toLowerCase()
                    .replace(/[^a-zA-Z0-9-_]/g, ''));
            }
        });
        this.prepareImgCropper();
        super.ngOnInit();
    }
    onTsRowSelectionChanged(data): void {
        let tt: TourSchedule = data as TourSchedule;
        if (tt)
            this.selectedTourScheduleId = tt.id;
    }
    prepareImgCropper() {
       let _that = this;
        this.imageSizeService.getAll().subscribe(data => {
            console.log(data);
            _that.uploaderContainer = new Array<any>();
            data.forEach(iSize => {
                let cropperSettings1 = new CropperSettings();
                cropperSettings1.width = iSize.width;
                cropperSettings1.height = iSize.height;
                cropperSettings1.canvasWidth = 200;
                cropperSettings1.canvasHeight = 200;
                cropperSettings1.fileType = 'png';
                cropperSettings1.preserveSize = true;
                cropperSettings1.rounded = false;
                cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
                cropperSettings1.cropperDrawSettings.strokeWidth = 2;
                cropperSettings1.noFileInput = true;
                _that.uploaderContainer.push({ cropperSettings: cropperSettings1, data: {} });
            });
            console.log(_that.uploaderContainer);
        });
    }
}
