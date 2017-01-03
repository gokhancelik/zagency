import { StorageService } from './../../../../shared/services/storage.service';
import { Tour } from './../../../../shared/models/tour.model';
import { CropperSettings } from 'ng2-img-cropper';
import { ResizeOptions } from './../components/components/imageCropper/interfaces';

export class UploaderContainer {
    public get status(): UploaderStatus {
        if (this.progress === 100) {
            return UploaderStatus.Completed;
        }
        else if (this.progress < 100 && this.progress > 0) {
            return UploaderStatus.Uploading;
        }
        else if (this.data)
            return UploaderStatus.Pending;
        else
            return UploaderStatus.FileNotLoaded;
    }
    public upload(tour: Tour) {
        let that = this;
        let width = that.imageSize.width;
        let height = that.imageSize.height;
        let image = that.data.image.split(',')[1];
        let fullType = that.data.image.split(',')[0].replace(/^data:([^;]*).*/, '$1');
        let byteString = window.atob(image);
        let ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        let blob = new Blob([ab], { type: fullType });
        let shortType = fullType.split('/')[1];
        let file = new File([blob], `${that.fileName}_${width}x${height}.${shortType}`, { type: fullType });
        // that.fileName = `${that.fileName}.${shortType}`;
        this.storageService.upload(tour.company,
            tour.id, that.imageSize.width, that.imageSize.height, `${that.fileName}_${width}x${height}.${shortType}`, file)
            .on('state_changed', r => {
                that.progress = (r.bytesTransferred / r.totalBytes) * 100;
                // console.log(`${that.progress} => ${that.fileName} ${that.imageSize.name}`);
            }, e => {
                console.log(e);
            }, () => {

            });
    }
    constructor(
        public cropperSetting: CropperSettings = new CropperSettings(),
        public data: any = null,
        public resultImage: any = null,
        public fileName: string = '',
        public progress: number = 0,
        public imageSize: any = null,
        private storageService: StorageService
    ) {
    }
}
export class UploaderContainerList {
    public get overallStatus(): UploaderStatus {
        this.containers.forEach(c => {
            if (c.status === UploaderStatus.Uploading)
                return UploaderStatus.Uploading;
            if (c.status === UploaderStatus.Pending) {
                return UploaderStatus.Pending;
            }
            if (c.status === UploaderStatus.FileNotLoaded) {
                return UploaderStatus.FileNotLoaded;
            }
        });
        return UploaderStatus.Completed;
    }
    get overallProgress() {
        let totalOverall = this.containers.length * 100;
        let totalProgress = 0;
        this.containers.forEach(c => {
            totalProgress += c.progress;
        });
        return totalOverall !== 0 ? (totalProgress / totalOverall) * 100 : 0;
    }
    constructor(
        public containers: Array<UploaderContainer> = new Array<UploaderContainer>()
    ) {

    }
}
export enum UploaderStatus {
    Completed = 1,
    Pending = 2,
    Uploading = 3,
    FileNotLoaded = 4,
}
