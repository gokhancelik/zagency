import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/index';
import { ImageSize } from '../../shared/models';
import { ImageSizeService } from '../../shared/services/index';
import { IMAGESIZE_FORM_MODEL } from './imageSize-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'imageSize-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})

export class ImageSizeAddComponent extends AddComponent<ImageSize>  {
    productBaseId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = IMAGESIZE_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(private _service: ImageSizeService, dynamicFormService: DynamicFormService) {
        super(ImageSize, dynamicFormService, _service, IMAGESIZE_FORM_MODEL);
    }
    ngOnInit() {
        this.formGroup.controls['width'].valueChanges.subscribe(data => {
            if (data) {
                let d = <string>data;
                this.formGroup.controls['name'].setValue(
                    this.formGroup.controls['height'].value + 'x' + d);
            }
        });
        this.formGroup.controls['height'].valueChanges.subscribe(data => {
            if (data) {
                let d = <string>data;
                this.formGroup.controls['urlPath'].setValue(
                    d + 'x' + this.formGroup.controls['width'].value);
            }
        });
        super.ngOnInit();
    }
}
