import { FormGroup } from '@angular/forms';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedule, PublishingTour } from '../../shared/models';
import { PublishingTourService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { PUBLISHINGTOUR_FORM_MODEL } from './publishingTour-form.model';
@Component({
    selector: 'publishingTour-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class PublishingTourEditComponent extends EditComponent< PublishingTour> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    tourschedule: TourSchedule;
    constructor(private _service: PublishingTourService, dynamicFormService: DynamicFormService) {
        super(PublishingTour, _service, dynamicFormService, PUBLISHINGTOUR_FORM_MODEL);
    }
    setTourSchedule(tourschedule: TourSchedule): void {
        this.tourschedule = tourschedule;
    }
    save(model: any) {
        if (model) {
            this._service.update(this.model.id, model);
        }
        this.close();
    }
}
