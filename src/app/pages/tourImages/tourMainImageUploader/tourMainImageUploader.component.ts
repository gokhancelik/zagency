import { UploaderContainerList, UploaderContainer } from './../../components/components/imageCropper/uploaderContainer';
import { ImageSize } from './../../../shared/models/imageSize.model';
import { StorageService } from './../../../shared/services/storage.service';
import { ZAImageCropperComponent } from './../../components/components/imageCropper/imageCropper.component';
import { ResizeOptions, ImageResult } from './../../components/components/imageCropper/interfaces';
import { createImage, resizeImage } from './../../components/components/imageCropper/utils';
import { Tour } from './../../../shared/models';
import { ImageSizeService } from './../../../shared/services';
import { CropperSettings } from 'ng2-img-cropper';
import {
    Component, OnInit, ViewEncapsulation,
    Input, ViewChildren, QueryList, EventEmitter, Output
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'tour-main-image-uploader',
    templateUrl: 'tourMainImageUploader.component.html'
})
export class TourMainImageUploaderComponent implements OnInit {
    @Output() imageSelected = new EventEmitter<ImageResult>();
    container: UploaderContainerList;
    imageSizes: ImageSize[];
    maxImageSize: ImageSize;
    image: any;
    tourMainImage: '';
    allowedExtensions: 'image/jpeg';
    @Input() tour: Tour;
    @Output() onCompleted: EventEmitter<any> = new EventEmitter<any>();
    @ViewChildren('zacropper') cropperChildren: QueryList<ZAImageCropperComponent>;
    constructor(private imageSizeService: ImageSizeService,
        private storageService: StorageService) { }
    ngOnInit() {
        let _that = this;
        this.imageSizeService.getAll().take(1).subscribe(data => {
            _that.imageSizes = data;
            _that.maxImageSize = _that.imageSizes[_that.imageSizes.length - 1];
            _that.storageService.getDownloadUrl(
                _that.tour.company,
                _that.tour.id,
                _that.maxImageSize.width,
                _that.maxImageSize.height, _that.tour.imageUrl).then(d => {
                    _that.tourMainImage = d;
                });

        });
    }
    prepareImgCropper() {
        let _that = this;
        let i = 0;
        this.imageSizes.forEach(iSize => {
            i++;
            let cropperSettings1 = new CropperSettings();
            cropperSettings1.width = iSize.width;
            cropperSettings1.height = iSize.height;
            cropperSettings1.croppedWidth = iSize.width;
            cropperSettings1.croppedHeight = iSize.height;
            cropperSettings1.canvasWidth = 300;
            cropperSettings1.canvasHeight = 300;
            cropperSettings1.fileType = 'jpeg';
            cropperSettings1.allowedFilesRegex = new RegExp(/.(jpe?g)$/i);
            cropperSettings1.preserveSize = false;
            cropperSettings1.rounded = false;
            cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
            cropperSettings1.cropperDrawSettings.strokeWidth = 2;
            cropperSettings1.noFileInput = true;
            let container = new UploaderContainer(
                cropperSettings1, {}, null,
                _that.tour.urlPath, 0, iSize, _that.storageService
            );
            // container.cropperSetting = cropperSettings1;
            // container.data = {};
            // container.fileName = _that.tour.urlPath;
            // container.imageSize = iSize;
            _that.container.containers.push(container);

        });
        console.log(this.container);
    }
    imageChangeListener($event) {
        if (!$event.target.files.length)
            return;
        this.container = new UploaderContainerList();
        this.prepareImgCropper();
        let image: any = new Image();
        let file: File = $event.target.files[0];
        let myReader: FileReader = new FileReader();
        let that = this;
        myReader.onloadend = function (loadEvent: any) {
            image.src = loadEvent.target.result;
            // that.cropperChildren.forEach(uc => {
            //     uc.setImage(image);
            // });
            that.image = image;
            // that.container.containers.forEach(c => {
            //     c.data = image;
            // });
        };
        myReader.readAsDataURL(file);

    }
    uploadMainPhotos() {
        let that = this;
        that.container.containers.forEach(uc => {
            uc.upload(that.tour);
        });
    }
}
