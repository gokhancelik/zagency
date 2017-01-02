import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourDestination, Tour } from '../../shared/models';
import { TourDestinationService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURDESTINATION_FORM_MODEL } from './tourDestination-form.model';
@Component({
    selector: 'tourDestination-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourDestinationAddComponent extends AddComponent<TourDestination> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: TourDestination;
    tour: Tour;
    constructor(private _service: TourDestinationService, dynamicFormService: DynamicFormService) {
        super(TourDestination, dynamicFormService, _service, TOURDESTINATION_FORM_MODEL);
    }
    open(): void {
        this.model = new TourDestination();
        this.model.tour = this.tour.id;
        super.open();
    }
    setTour(tour: Tour): void {
        this.tour = tour;
    }

}
