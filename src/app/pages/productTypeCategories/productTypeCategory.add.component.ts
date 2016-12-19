import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { ProductTypeCategory } from '../../shared/models';
import { ProductTypeCategoryService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { PRODUCTTYPECATEGORY_FORM_MODEL } from './productTypeCategory-form.model';

@Component({
    selector: 'productTypeCategory-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class ProductTypeCategoryAddComponent extends AddComponent<ProductTypeCategory> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: ProductTypeCategoryService, dynamicFormService: DynamicFormService) {
        super(service, ProductTypeCategory, dynamicFormService, PRODUCTTYPECATEGORY_FORM_MODEL);
    }
}
