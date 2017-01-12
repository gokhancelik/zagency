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
        let that = this;
        if (that.formGroup.controls['imageWidth'])
            that.formGroup.controls['imageWidth'].valueChanges.subscribe(data => {
                if (data) {
                    let d = <string>data;
                    that.formGroup.controls['name'].setValue(
                        that.formGroup.controls['imageHeight'].value + 'x' + d);
                }
            });
        if (that.formGroup.controls['imageHeight'])
            that.formGroup.controls['imageHeight'].valueChanges.subscribe(data => {
                if (data) {
                    let d = <string>data;
                    that.formGroup.controls['name'].setValue(
                        d + 'x' + that.formGroup.controls['imageWidth'].value);
                }
            });
        super.ngOnInit();
    }
}
