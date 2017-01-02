import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedule, Tour } from '../../shared/models';
import { TourScheduleService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURSCHEDULE_FORM_MODEL } from './tourSchedule-form.model';
@Component({
    selector: 'tourSchedule-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourSchedule.form.component.html'
})
export class TourScheduleAddComponent extends AddComponent<TourSchedule> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: TourSchedule;
    tour: Tour;
    constructor(private _service: TourScheduleService, dynamicFormService: DynamicFormService) {
        super(TourSchedule, dynamicFormService, _service, TOURSCHEDULE_FORM_MODEL);
    }
    open(): void {
        this.model = new TourSchedule(null, new Date(),
            new Date(), 0, this.tour.id);
        super.open();
    }
    setTour(tour: Tour): void {
        this.tour = tour;
    }
    save(model: TourSchedule) {
        if (model) {
            this._service.add(model);
            if (this.onSaved) this.onSaved.emit();
            if (this.formModal) this.formModal.hide();
        }
    }
    
}
