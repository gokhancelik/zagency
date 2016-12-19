import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { PRODUCTTYPE_FORM_MODEL } from './productType-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { ProductType } from '../../shared/models/';
import { ProductTypeService } from '../../shared/services';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'productType-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class ProductTypeAddComponent extends AddComponent<ProductType>  {
    _service: ProductTypeService;
    productBaseId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = PRODUCTTYPE_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: ProductTypeService, dynamicFormService: DynamicFormService) {
        super(service, ProductType, dynamicFormService, PRODUCTTYPE_FORM_MODEL);
        this._service = service;
    }
}
