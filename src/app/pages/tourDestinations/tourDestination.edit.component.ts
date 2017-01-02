import { FormGroup } from '@angular/forms';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourDestination, Tour } from '../../shared/models';
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
    tour: Tour;
    constructor(private _service: TourDestinationService, dynamicFormService: DynamicFormService) {
        super(TourDestination, _service, dynamicFormService, TOURDESTINATION_FORM_MODEL);
    }
    setTour(tour: Tour): void {
        this.tour = tour;
    }
    save(model: any) {
        if (model) {
            this._service.update(this.model.id, model);
        }
        this.close();
    }
}
