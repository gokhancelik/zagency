import { UploaderContainer } from './uploaderContainer';
import { CropperSettings, ImageCropper, ImageCropperComponent } from 'ng2-img-cropper';
import { Exif } from './exif';
import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, OnChanges } from '@angular/core';
@Component({
    selector: 'za-image-cropper',
    encapsulation: ViewEncapsulation.None,
    template: `<img-cropper #cropper [image]="uploader.data" [settings]="uploader.cropperSetting">
</img-cropper>
<div>
  <span class="result" *ngIf="uploader.data.image"  [ngStyle]="{display:showCropped?'block':'none'}">
                        <img [src]="uploader.data.image" 
                        [width]="uploader.cropperSetting.width" 
                        [height]="uploader.cropperSetting.height">
                     </span>
</div>`
})
//[ngStyle]="{display:hideCropper?'none':'block'}" 
export class ZAImageCropperComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() uploader: UploaderContainer;
    @Input() hideCropper: boolean;
    @Input() showCropped: boolean = true;
    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
    constructor() {

    }

    ngOnInit() {
        // if (!this.cropper) {
        //     this.cropper = new ImageCropper(this.cropperSettings);
        // }
        // let canvas: HTMLCanvasElement = this.cropcanvas.nativeElement;

        // this.cropper.prepare(canvas);
    }
    ngOnChanges() {
        if (this.data) {
            this.uploader.data = this.data;
            this.setImage(this.uploader.data);
            console.log(this.uploader);
        }
    }
    public setImage(image: HTMLImageElement) {
        let self = this;
        this.cropper.setImage(image);
        // window.setInterval(function () {
        //     if (image.naturalHeight > 0) {

        //         image.height = image.naturalHeight;
        //         image.width = image.naturalWidth;
        //         self.getOrientedImage(image, (img: HTMLImageElement) => {
        //             self.cropper.setImage(img);
        //             let bounds = self.cropper.getCropBounds();
        //         });
        //     }
        // }, 10);

    }

    // private getOrientedImage(image: HTMLImageElement, callback: Function) {
    //     let img: any;

    //     Exif.getData(image, function () {
    //         let orientation = Exif.getTag(image, "Orientation");

    //         if ([3, 6, 8].indexOf(orientation) > -1) {
    //             let canvas: HTMLCanvasElement = document.createElement("canvas"),
    //                 ctx: CanvasRenderingContext2D = canvas.getContext("2d"),
    //                 cw: number = image.width,
    //                 ch: number = image.height,
    //                 cx: number = 0,
    //                 cy: number = 0,
    //                 deg: number = 0;

    //             switch (orientation) {
    //                 case 3:
    //                     cx = -image.width;
    //                     cy = -image.height;
    //                     deg = 180;
    //                     break;
    //                 case 6:
    //                     cw = image.height;
    //                     ch = image.width;
    //                     cy = -image.height;
    //                     deg = 90;
    //                     break;
    //                 case 8:
    //                     cw = image.height;
    //                     ch = image.width;
    //                     cx = -image.width;
    //                     deg = 270;
    //                     break;
    //                 default:
    //                     break;
    //             }

    //             canvas.width = cw;
    //             canvas.height = ch;
    //             ctx.rotate(deg * Math.PI / 180);
    //             ctx.drawImage(image, cx, cy);
    //             img = document.createElement("img");
    //             img.width = cw;
    //             img.height = ch;
    //             img.src = canvas.toDataURL("image/png");
    //         } else {
    //             img = image;
    //         }

    //         callback(img);
    //     });
    // }
}
