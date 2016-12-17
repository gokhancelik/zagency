import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { EditComponent } from '../../core/index';
import { ModalDirective } from 'ng2-bootstrap';
import { CurrencyTypeService } from '../../shared/services/index';
import { CurrencyType } from '../../shared/models/currencyType.model';
@Component({
    selector: 'currencyType-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'currencyType.form.component.html'
})
export class CurrencyTypeEditComponent extends EditComponent<CurrencyType> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: CurrencyTypeService) {
        super(service);
    }
    ngOnInit() {
    }
}
