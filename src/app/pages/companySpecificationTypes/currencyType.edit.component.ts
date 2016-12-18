import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { EditComponent } from '../../core/index';
import { ModalDirective } from 'ng2-bootstrap';
import { CurrencyTypeService } from '../../shared/services/index';
import { CurrencyType } from '../../shared/models/currencyType.model';
import { CURRENCY_FORM_MODEL } from './currencyType-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'currencyType-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class CurrencyTypeEditComponent extends EditComponent<CurrencyType> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = CURRENCY_FORM_MODEL;
    constructor(service: CurrencyTypeService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, CURRENCY_FORM_MODEL);
    }
}
