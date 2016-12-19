import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { ProductTypeCategory } from '../../shared/models';
import { ProductTypeCategoryService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { PRODUCTTYPECATEGORY_FORM_MODEL } from './productTypeCategory-form.model';

@Component({
    selector: 'productTypeCategory-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class ProductTypeCategoryEditComponent extends EditComponent<ProductTypeCategory>{
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: ProductTypeCategoryService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, PRODUCTTYPECATEGORY_FORM_MODEL);
    }
}
