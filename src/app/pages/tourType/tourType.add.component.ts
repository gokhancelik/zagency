import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { TOURTYPE_FORM_MODEL } from './tourType-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { TourType } from '../../shared/models/';
import { TourTypeService } from '../../shared/services';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'tourType-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class TourTypeAddComponent extends AddComponent<TourType>  {
    _service: TourTypeService;
    tourId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURTYPE_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourTypeService, dynamicFormService: DynamicFormService) {
        super(service, TourType, dynamicFormService, TOURTYPE_FORM_MODEL);
        this._service = service;
    }
}
