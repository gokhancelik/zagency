import { StorageService } from './../../../shared/services/storage.service';
import { ZAImageCropperComponent } from './../../components/components/imageCropper/imageCropper.component';
import { Tour } from './../../../shared/models';
import { ImageSizeService } from './../../../shared/services';
import { CropperSettings } from 'ng2-img-cropper';
import { UploaderContainerList, UploaderContainer, UploaderStatus } from './../uploaderContainer';
import {
    Component, OnInit, ViewEncapsulation,
    Input, ViewChildren, QueryList, EventEmitter, Output
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'tour-main-image-uploader',
    template: ` <ba-card title="Tour Photo" baCardClass="with-scroll">
            <div class="alert alert-info">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;
              </button>
              <strong>Bilgi!</strong> Bu resim uygulamanın çeşitli 
              yerlerinde kullanılmak üzere kaydedilecek. 
              Aşağıdaki boyutu referans alarak yükleme yapınız. Performans sebebiyle
              sadece JPEG formatındaki resimler kabul edilmektedir.
            </div>
            <div class="file-upload">
              <input type="file" accept="image/jpg,image/jpeg" 
              (change)="imageChangeListener($event)">
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" 
              *ngFor="let cs of container; let i=index;">
                <span>File: {{cs.fileName}} Size:{{cs.size}} 
                Upload Progress: {{cs.progress}} %</span>
                <za-image-cropper #cropper [cropperSettings]="cs.cropperSettings" 
                [ngStyle]="{display:i===(uploaderContainer.length-1)?'block':'none'}" 
                [data]="cs.data">
                </za-image-cropper>
              </div>
            </div>
            <button class="btn btn-default" 
            (click)="uploadMainPhotos()" 
            [disabled]="!uploaderContainer?.status===4">
            Upload</button>
          </ba-card>`
})
export class TourMainImageUploaderComponent implements OnInit {
    container: UploaderContainerList;
    @Input() tour: Tour;
    @Output() onCompleted: EventEmitter<any>;
    @ViewChildren('cropper') cropperChildren: QueryList<ZAImageCropperComponent>;
    constructor(private imageSizeService: ImageSizeService, private storageService: StorageService) { }
    ngOnInit() {
        this.container = new UploaderContainerList();
        this.prepareImgCropper();
    }
    prepareImgCropper() {
        let _that = this;
        this.imageSizeService.getAll().subscribe(data => {
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
                let container = new UploaderContainer();
                container.cropperSetting = cropperSettings1;
                container.data = {};
                container.fileName = this.tour.urlPath;
                container.imageSize = iSize;
                _that.container.containers.push(container);
            });
        });
    }
    imageChangeListener($event) {
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
        let that = this;
        that.container.containers.forEach(uc => {
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
            uc.fileName = `${uc.fileName}.${shortType}`;
            let file = new File([blob], uc.fileName, { type: fullType });
            that.storageService.upload(that.tour.company,
                that.tour.id, width, height, file)
                .on('state_changed', r => {
                    uc.progress = (r.bytesTransferred / r.totalBytes) * 100;
                    console.log(`${uc.progress} => ${uc.fileName} ${uc.imageSize.name}`);
                }, e => {
                    console.log(e);
                }, () => {
                    if (that.container.overallStatus === UploaderStatus.Completed) {
                        this.onCompleted.emit(that.container);
                    }
                }
                );
        });
    }
}
