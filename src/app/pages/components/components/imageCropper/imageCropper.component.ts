import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { CropperSettings, ImageCropperComponent, Bounds } from 'ng2-img-cropper';
@Component({
    selector: 'za-image-cropper',
    encapsulation: ViewEncapsulation.None,
    template: `
                <div>
                    <img-cropper #cropper 
                    [image]="data" 
                    [settings]="cropperSettings">
                    </img-cropper>
                </div>`
})
export class ZAImageCropperComponent implements OnInit {
    @Input() data: any;
    @Input() cropperSettings: CropperSettings;
    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
    constructor() {

        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth = 100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;

        this.data = {};

    }

    ngOnInit() { }
    setImage(image: HTMLImageElement) {
        this.cropper.setImage(image);
    }
}
