import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { AddComponent } from '../../core/add.component';
import { ProductPhoto } from '../../shared/models';
import { ProductPhotoService } from '../../shared/services';
import { ModalDirective } from 'ng2-bootstrap';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import {
    FileSelectDirective,
    FileUploaderOptions, FileDropDirective, FileUploader, Headers
} from 'ng2-file-upload/ng2-file-upload';
@Component({
    selector: 'productPhoto-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'productPhoto.form.component.html'
})
export class ProductPhotoAddComponent extends AddComponent<ProductPhoto>  {
    _service: ProductPhotoService;
    productBaseId: number;
    uploader: FileUploader;
    hasBaseDropZoneOver: boolean = false;
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1';
    uploadedPhotos: Array<any> = new Array<any>();
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: ProductPhotoService) {
        super(service, ProductPhoto, null, null);
        this._service = service;
    }
    open(): void {
        this.model = new ProductPhoto();
        this.model.productBaseId = this.productBaseId;
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
            let tpList: Array<ProductPhoto> = new Array<ProductPhoto>();

            for (let i = 0; i < r.photos.length; i++) {
                this.uploadedPhotos.push(r.photos[i]);
                let tp = new ProductPhoto();
                tp.photoPath = r.photos[i].url;
                tp.name = r.photos[i].name;
                tp.productBaseId = this.model.productBaseId;
                tp.photoLocationTypeId = 1; // TODO: dynamic yap
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
    setproductBaseId(productBaseId: number): void {
        this.productBaseId = productBaseId;
    }
    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }
}
