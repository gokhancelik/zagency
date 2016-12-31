import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/index';
import { CurrencyType } from '../../shared/models/currencyType.model';
import { CurrencyTypeService } from '../../shared/services/index';
import { CURRENCY_FORM_MODEL } from './currencyType-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'currencyType-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})

export class CurrencyTypeAddComponent extends AddComponent<CurrencyType>  {
    _service: CurrencyTypeService;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: CurrencyTypeService, dynamicFormService: DynamicFormService) {
        super(CurrencyType, dynamicFormService, service, CURRENCY_FORM_MODEL);
        this._service = service;
    }
}
