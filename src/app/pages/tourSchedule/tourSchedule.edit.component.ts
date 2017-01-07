import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
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
    private sDate: NgbDateStruct;
    private sTime: NgbTimeStruct;
    private sMinDate: NgbDateStruct;
    private eDate: NgbDateStruct;
    private eTime: NgbTimeStruct;
    private today: Date = new Date();
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
    open(): void {
        this.today = new Date();
        this.sMinDate = { day: this.today.getDate(), month: this.today.getMonth() + 1, year: this.today.getFullYear() }
        this.eDate = { day: this.model.end.getDate(), month: this.model.end.getMonth() + 1, year: this.model.end.getFullYear() };
        this.sDate = { day: this.model.start.getDate(), month: this.model.start.getMonth() + 1, year: this.model.start.getFullYear() };
        this.eTime = { hour: this.model.end.getHours(), minute: this.model.end.getMinutes(), second: 0 };
        this.sTime = { hour: this.model.start.getHours(), minute: this.model.start.getMinutes(), second: 0 };
        this.formModal.show();
        super.open();
    }
    startTimeChanged(event: NgbTimeStruct) {
        this.model.start = new Date(this.sDate.year, this.sDate.month, this.sDate.day, event.hour, event.minute, event.second);
    }
    startDateChanged(event: NgbDateStruct) {
        this.model.start = new Date(event.year, event.month - 1, event.day, this.sTime ? this.sTime.hour : 0, this.sTime ? this.sTime.minute : 0, this.sTime ? this.sTime.second : 0);
    }
    endDateChanged(event: NgbDateStruct) {
        this.model.end = new Date(event.year, event.month - 1, event.day, this.eTime ? this.eTime.hour : 0, this.eTime ? this.eTime.minute : 0, this.eTime ? this.eTime.second : 0);
    }
    endTimeChanged(event: NgbTimeStruct) {
        this.model.end = new Date(this.eDate.year, this.eDate.month, this.eDate.day, event.hour, event.minute, event.second);
    }
}
