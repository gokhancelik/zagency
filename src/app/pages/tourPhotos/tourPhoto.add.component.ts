import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { AddComponent } from '../../core/add.component';
import { TourPhoto } from '../../shared/models';
import { TourPhotoService } from '../../shared/services';
import { ModalDirective } from 'ng2-bootstrap';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import {
    FileSelectDirective,
    FileUploaderOptions, FileDropDirective, FileUploader, Headers
} from 'ng2-file-upload/ng2-file-upload';
@Component({
    selector: 'tourPhoto-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourPhoto.form.component.html'
})
export class TourPhotoAddComponent extends AddComponent<TourPhoto>  {
    _service: TourPhotoService;
    tourId: number;
    uploader: FileUploader;
    hasBaseDropZoneOver: boolean = false;
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1';
    uploadedPhotos: Array<any> = new Array<any>();
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourPhotoService) {
        super(service, TourPhoto, null, null);
        this._service = service;
    }
    open(): void {
        this.model = new TourPhoto();
        this.model.tourId = this.tourId;
        let _url: string = this.API_URL + '/File/';
        // let header = [{ name: 'Authorization', value: '' },
        // {name:'Access-Control-Allow-Credentials', value:'true'}]
        this.uploader = new FileUploader({
            url: _url,
            isHTML5: true,
            allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
        });
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            let r = JSON.parse(response);
            let pCount = r.photos.length;
            let savedCount = 0;
            let tpList: Array<TourPhoto> = new Array<TourPhoto>();

            for (let i = 0; i < r.photos.length; i++) {
                this.uploadedPhotos.push(r.photos[i]);
                let tp = new TourPhoto();
                tp.photoPath = r.photos[i].url;
                tp.name = r.photos[i].name;
                tp.tourId = this.model.tourId;
                tp.photoLocationTypeId = 3; // TODO: dynamic yap
                this._service.add(tp).subscribe(data => {
                    savedCount++;
                    tpList.push(data);
                    if (savedCount === pCount) {
                        this.onSaved.emit(tpList);
                        this.formModal.hide();
                    }
                });
            }
        };
        super.open();
    }
    setTourId(tourId: number): void {
        this.tourId = tourId;
    }
    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }
}
