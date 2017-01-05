import { UploaderContainerList } from './../components/components/imageCropper/uploaderContainer';
import { EditComponent } from './../../core/edit.component';
import { CropperSettings } from 'ng2-img-cropper';
import { TOUR_FORM_MODEL } from './tour-form.model';
import {
    Component, OnInit, Input, ViewEncapsulation,
    ViewChildren, QueryList
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Tour, TourSchedule } from '../../shared/models';
import {
    DynamicFormControlModel, DynamicFormService, DynamicInputModel,
    DynamicFormOption, DynamicFormOptionConfig, DynamicSelectModel
} from '@ng2-dynamic-forms/core';
import {
    TourService, StorageService,
    TourCategoryService, ImageSizeService
} from '../../shared/services/index';

@Component({
    selector: 'tour-edit',
    templateUrl: 'tour.form.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TourEditComponent extends EditComponent<Tour> {
    selectedTourSchedule: TourSchedule;
    uploaderContainer: Array<any>;
    constructor(
        private tourService: TourService, dynamicFormService: DynamicFormService,
        private _tourCategoryService: TourCategoryService,
        private storageService: StorageService,
        private imageSizeService: ImageSizeService,
        private activatedRoute: ActivatedRoute
    ) {
        super(Tour, tourService, dynamicFormService, TOUR_FORM_MODEL);
        TOUR_FORM_MODEL.forEach(value => {
            if (value.id === 'tourCategory') {
                let select = value as DynamicSelectModel<any>;
                _tourCategoryService.getAll().take(1).subscribe(data => {
                    data.forEach(r => {
                        // if (r.name !== 'superadmin') {
                        let s = new DynamicFormOption<any>(
                            { value: r.id, label: r.name }
                        );
                        select.options.push(s);
                        // }
                    });
                });

            }
            if (value.id === 'urlPath') {
                let input = value as DynamicInputModel;
                input.readOnly = true;
            }
        });
    }
    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            super.setKey(params['id']);
        });
        super.open();
        //this.prepareImgCropper();
        super.ngOnInit();
    }
    onTsRowSelectionChanged(data): void {
        let tt: TourSchedule = data as TourSchedule;
        if (tt)
            this.selectedTourSchedule = tt;
    }
    onMainUploadCompleted(data: UploaderContainerList) {
        this.formGroup.controls['imageUrl'].setValue(data.containers[0].fileName);
        this.save(this.formGroup);
        console.log('completed');
    }
}
