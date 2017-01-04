import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { EditComponent } from '../../core/index';
import { ModalDirective } from 'ng2-bootstrap';
import { B2BService } from '../../shared/services/index';
import { B2B } from '../../shared/models/b2b.model';
import { B2B_FORM_MODEL } from './b2b-form.model';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
@Component({
    selector: 'b2b-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class B2BEditComponent extends EditComponent<B2B> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = B2B_FORM_MODEL;
    constructor(service: B2BService, dynamicFormService: DynamicFormService) {
        super(B2B, service, dynamicFormService, B2B_FORM_MODEL);
    }
}
