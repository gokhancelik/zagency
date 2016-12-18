import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/index';
import { PhotoLocation } from '../../shared/models';
import { PhotoLocationService } from '../../shared/services/index';
import { PHOTOLOCATION_FORM_MODEL } from './photoLocation-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'photoLocation-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})

export class PhotoLocationAddComponent extends AddComponent<PhotoLocation>  {
    _service: PhotoLocationService;
    tourId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = PHOTOLOCATION_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: PhotoLocationService, dynamicFormService: DynamicFormService) {
        super(service, PhotoLocation, dynamicFormService, PHOTOLOCATION_FORM_MODEL);
        this._service = service;
    }
}
