import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { EditComponent } from '../../core/index';
import { ModalDirective } from 'ng2-bootstrap';
import { ImageSizeService } from '../../shared/services/index';
import { ImageSize } from '../../shared/models';
import { IMAGESIZE_FORM_MODEL } from './imageSize-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'imageSize-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class ImageSizeEditComponent extends EditComponent<ImageSize> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = IMAGESIZE_FORM_MODEL;
    constructor(service: ImageSizeService, dynamicFormService: DynamicFormService) {
        super(ImageSize, service, dynamicFormService, IMAGESIZE_FORM_MODEL);
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
                this.formGroup.controls['name'].setValue(
                    d + 'x' + this.formGroup.controls['width'].value);
            }
        });
        super.ngOnInit();
    }
}
