import { ZAImageCropperComponent } from './../components/components/imageCropper/imageCropper.component';
import { EditComponent } from './../../core/edit.component';
import { CropperSettings } from 'ng2-img-cropper';
import { TOUR_FORM_MODEL } from './tour-form.model';
import {
    Component, OnInit, Input, ViewEncapsulation,
    ViewChildren, QueryList
} from '@angular/core';
import { DatePipe } from '@angular/common';
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
    selectedTourScheduleId: number = 0;
    uploaderContainer: Array<any>;
    @ViewChildren('cropper') cropperChildren: QueryList<ZAImageCropperComponent>;
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
                            { value: r.$key, label: r.name }
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
        // this.formGroup.controls['name'].valueChanges.subscribe(data => {
        //     console.log('Form changes', data);
        //     if (data) {
        //         let d = <string>data;
        //         this.formGroup.controls['urlPath'].setValue(d.toLowerCase()
        //             .replace(/[^a-zA-Z0-9-_]/g, ''));
        //     }
        // });
        this.prepareImgCropper();
        super.ngOnInit();
    }

    // saveTour() {
    //     this.submitted = true;
    //     this.tourService.update(this.model, this.model.id).subscribe(
    //         data => {
    //             this.submitted = false;
    //             // this.router.navigate(['/tours/list']);
    //         },
    //         error => {
    //             this.errorMessage = <any>error;
    //             this.submitted = false;
    //         }
    //     );
    // }
    onTsRowSelectionChanged(data): void {
        let tt: TourSchedule = data as TourSchedule;
        if (tt)
            this.selectedTourScheduleId = tt.id;
    }
    // publish(): void {
    //     this.tourService.publish(this.model, this.model.productBaseId).subscribe(data => {
    //         this.getTour();
    //     });
    // }
    prepareImgCropper() {
        let _that = this;
        this.imageSizeService.getAll().subscribe(data => {
            _that.uploaderContainer = new Array<any>();
            data.forEach(iSize => {
                let cropperSettings1 = new CropperSettings();
                cropperSettings1.width = iSize.width;
                cropperSettings1.height = iSize.height;
                cropperSettings1.canvasWidth = 400;
                cropperSettings1.canvasHeight = 400;
                cropperSettings1.fileType = 'jpeg';
                cropperSettings1.allowedFilesRegex = /.(jpe?g)$/i;
                cropperSettings1.preserveSize = true;
                cropperSettings1.rounded = false;
                cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
                cropperSettings1.cropperDrawSettings.strokeWidth = 2;
                cropperSettings1.noFileInput = true;
                _that.uploaderContainer.push({ cropperSettings: cropperSettings1, data: {}, imageSize: iSize });
            });
        });
    }
    mainImageChangeListener($event) {
        let image: any = new Image();
        let file: File = $event.target.files[0];
        let myReader: FileReader = new FileReader();
        let that = this;
        myReader.onloadend = function (loadEvent: any) {
            image.src = loadEvent.target.result;
            that.cropperChildren.forEach(uc => {
                uc.setImage(image);
            });
        };
        myReader.readAsDataURL(file);
    }
    uploadMainPhotos() {
        this.uploaderContainer.forEach(uc => {
            let width = uc.imageSize.width;
            let height = uc.imageSize.height;
            let image = uc.data.image.split(',')[1];
            let fullType = uc.data.image.replace(/^data:([^;]*).*/, '$1');
            let byteString = window.atob(image);
            let ab = new ArrayBuffer(byteString.length);
            let ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            let blob = new Blob([ab], { type: fullType });
            let shortType = fullType.split('/')[1];
            let file = new File([blob], `${this.model.urlPath}.${shortType}`, { type: fullType });
            this.storageService.upload(this.model.company, this.model.id, width, height, file).take(1)
                .subscribe(r => {
                    console.log(r);
                });
        });
    }
}
