import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { ProductType } from '../../shared/models';
import { ProductTypeService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { PRODUCTTYPE_FORM_MODEL } from './productType-form.model';

@Component({
    selector: 'productType-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class ProductTypeEditComponent extends EditComponent<ProductType> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = PRODUCTTYPE_FORM_MODEL;
    constructor(service: ProductTypeService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, PRODUCTTYPE_FORM_MODEL);
    }
}
