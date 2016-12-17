import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/index';
import { CurrencyType } from '../../shared/models/currencyType.model';
import { CurrencyTypeService } from '../../shared/services/index';

@Component({
    selector: 'currencyType-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'currencyType.form.component.html'
})
export class CurrencyTypeAddComponent extends AddComponent<CurrencyType> {
    _service: CurrencyTypeService;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    @ViewChild('formModal') formModal;
    constructor(service: CurrencyTypeService) {
        super(service, CurrencyType);
        this._service = service;
    }
}
