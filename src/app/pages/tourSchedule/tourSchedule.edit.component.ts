import { FormGroup } from '@angular/forms';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedule, Tour } from '../../shared/models';
import { TourScheduleService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURSCHEDULE_FORM_MODEL } from './tourSchedule-form.model';
@Component({
    selector: 'tourSchedule-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourSchedule.form.component.html'

})
export class TourScheduleEditComponent extends EditComponent<TourSchedule> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    tour: Tour;
    constructor(private _service: TourScheduleService, dynamicFormService: DynamicFormService) {
        super(TourSchedule, _service, dynamicFormService, TOURSCHEDULE_FORM_MODEL);
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
