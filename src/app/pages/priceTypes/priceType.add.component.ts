import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PriceType } from '../../shared/models';
import { PriceTypeService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { PRICETYPE_FORM_MODEL } from './priceType-form.model';

@Component({
    selector: 'priceType-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class PriceTypeAddComponent extends AddComponent<PriceType> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: PriceTypeService, dynamicFormService: DynamicFormService) {
        super(PriceType, dynamicFormService, service, PRICETYPE_FORM_MODEL);
    }
}
