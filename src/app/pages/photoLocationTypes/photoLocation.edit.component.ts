import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { EditComponent } from '../../core/index';
import { ModalDirective } from 'ng2-bootstrap';
import { PhotoLocationService } from '../../shared/services/index';
import { PhotoLocation } from '../../shared/models';
import { PHOTOLOCATION_FORM_MODEL } from './photoLocation-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'photoLocation-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class PhotoLocationEditComponent extends EditComponent<PhotoLocation> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = PHOTOLOCATION_FORM_MODEL;
    constructor(service: PhotoLocationService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, PHOTOLOCATION_FORM_MODEL);
    }
}
