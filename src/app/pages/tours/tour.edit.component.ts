import { UploaderContainerList } from './../tourImages/uploaderContainer';
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
        //this.prepareImgCropper();
        super.ngOnInit();
    }
    onTsRowSelectionChanged(data): void {
        let tt: TourSchedule = data as TourSchedule;
        if (tt)
            this.selectedTourSchedule = tt;
    }
    // prepareImgCropper() {
    //     let _that = this;
    //     this.imageSizeService.getAll().subscribe(data => {
    //         _that.uploaderContainer = new Array<any>();
    //         data.forEach(iSize => {
    //             let cropperSettings1 = new CropperSettings();
    //             cropperSettings1.width = iSize.width;
    //             cropperSettings1.height = iSize.height;
    //             cropperSettings1.canvasWidth = 400;
    //             cropperSettings1.canvasHeight = 400;
    //             cropperSettings1.fileType = 'jpeg';
    //             cropperSettings1.allowedFilesRegex = /.(jpe?g)$/i;
    //             cropperSettings1.preserveSize = true;
    //             cropperSettings1.rounded = false;
    //             cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    //             cropperSettings1.cropperDrawSettings.strokeWidth = 2;
    //             cropperSettings1.noFileInput = true;
    //             _that.uploaderContainer.push({
    //                 cropperSettings: cropperSettings1,
    //                 data: {},
    //                 imageSize: iSize
    //             });
    //         });
    //     });
    // }
    // mainImageChangeListener($event) {
    //     let image: any = new Image();
    //     let file: File = $event.target.files[0];
    //     let myReader: FileReader = new FileReader();
    //     let that = this;
    //     myReader.onloadend = function (loadEvent: any) {
    //         image.src = loadEvent.target.result;
    //         that.cropperChildren.forEach(uc => {
    //             uc.setImage(image);
    //         });
    //     };
    //     myReader.readAsDataURL(file);
    // }
    // allImagesUploaded: boolean;
    // uploadMainPhotos() {
    //     let that = this;
    //     that.uploaderContainer.forEach(uc => {
    //         let width = uc.imageSize.width;
    //         let height = uc.imageSize.height;
    //         let image = uc.data.image.split(',')[1];
    //         let fullType = uc.data.image.replace(/^data:([^;]*).*/, '$1');
    //         let byteString = window.atob(image);
    //         let ab = new ArrayBuffer(byteString.length);
    //         let ia = new Uint8Array(ab);
    //         for (let i = 0; i < byteString.length; i++) {
    //             ia[i] = byteString.charCodeAt(i);
    //         }
    //         let blob = new Blob([ab], { type: fullType });
    //         let shortType = fullType.split('/')[1];
    //         uc.fileName = `${that.model.urlPath}.${shortType}`;
    //         let file = new File([blob], uc.fileName, { type: fullType });
    //         that.storageService.upload(that.model.company,
    //             that.model.id, width, height, file)
    //             .on('state_changed', r => {
    //                 uc.progress = (r.bytesTransferred / r.totalBytes) * 100;
    //                 console.log(`${uc.progress} => ${uc.fileName} ${uc.imageSize.name}`);
    //             }, e => {
    //                 console.log(e);
    //             }, () => {
    //                 that.allImagesUploaded = true;
    //                 if (that.uploaderContainer)
    //                     that.uploaderContainer.forEach(
    //                         uc => {
    //                             if (!uc.progress || uc.progress < 100) {
    //                                 that.allImagesUploaded = false;
    //                             }
    //                         }
    //                     );
    //                 if (that.allImagesUploaded) {
    //                     that.formGroup.controls['imageUrl'].setValue(uc.fileName);
    //                     that.save(that.formGroup);
    //                     console.log("all completed");
    //                 }
    //             }
    //             );
    //     });
    // }
    onMainUploadCompleted(data: UploaderContainerList) {
        this.formGroup.controls['imageUrl'].setValue(data.containers[0].fileName);
        this.save(this.formGroup);
        console.log('completed');
    }
}
