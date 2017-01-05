import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedule, PublishingTour } from '../../shared/models';
import { PublishingTourService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { PUBLISHINGTOUR_FORM_MODEL } from './publishingTour-form.model';
@Component({
    selector: 'publishingTour-add',
    encapsulation: ViewEncapsulation.None,
   templateUrl: '../../core/form.component.html'
})
export class PublishingTourAddComponent extends AddComponent<PublishingTour> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: PublishingTour;
    tourschedule: TourSchedule;
    constructor(private _service: PublishingTourService, dynamicFormService: DynamicFormService) {
        super(PublishingTour, dynamicFormService, _service, PUBLISHINGTOUR_FORM_MODEL);
    }
    open(): void {
        this.model = new PublishingTour();
        super.open();
    }
    setTourSchedule(tourschedule: TourSchedule): void {
        this.tourschedule = tourschedule;
    }
    save(model: PublishingTour) {
        if (model) {
            this._service.add(model);
            if (this.onSaved) this.onSaved.emit();
            if (this.formModal) this.formModal.hide();
        }
    }
    
}
