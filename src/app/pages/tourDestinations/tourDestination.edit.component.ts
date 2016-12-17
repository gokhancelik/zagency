import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourDestination } from '../../shared/models/tourDestination.model';
import { TourDestinationService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURDESTINATION_FORM_MODEL } from './tourDestination-form.model';

@Component({
    selector: 'tourDestination-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourDestinationEditComponent extends EditComponent<TourDestination> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURDESTINATION_FORM_MODEL;
    constructor(service: TourDestinationService, dynamicFormService: DynamicFormService) {
        super(service, dynamicFormService, TOURDESTINATION_FORM_MODEL);
    }
}
