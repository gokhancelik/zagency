import { CropperSettings } from 'ng2-img-cropper';
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
    constructor(
        public cropperSetting: CropperSettings = new CropperSettings(),
        public data: any = null,
        public fileName: string = '',
        public progress: number = 0,
        public size: string = null,
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
        return totalOverall !== 0 ? totalProgress / totalOverall : 0;
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
