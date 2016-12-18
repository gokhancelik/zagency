import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PriceType } from '../../shared/models';
import { PriceTypeService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { PRICETYPE_FORM_MODEL } from './priceType-form.model';

@Component({
    selector: 'priceType-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class PriceTypeEditComponent extends EditComponent<PriceType>{
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: PriceTypeService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, PRICETYPE_FORM_MODEL);
    }
}
