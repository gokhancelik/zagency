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
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

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
    private sDate: NgbDateStruct;
    private sTime: NgbTimeStruct;
    private sMinDate: NgbDateStruct;
    private eDate: NgbDateStruct;
    private eTime: NgbTimeStruct;
    private today: Date = new Date();
    constructor(private _service: TourScheduleService, dynamicFormService: DynamicFormService) {
        super(TourSchedule, dynamicFormService, _service, TOURSCHEDULE_FORM_MODEL);
    }
    open(): void {
        this.today = new Date();
        this.sMinDate = { day: this.today.getDate(), month: this.today.getMonth() + 1, year: this.today.getFullYear() }
        this.sDate = this.eDate = { day: this.today.getDate(), month: this.today.getMonth() + 1, year: this.today.getFullYear() };
        this.sTime = this.eTime = { hour: this.today.getHours(), minute: this.today.getMinutes(), second: 0 };
        this.formModal.show();
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
            //     .subscribe(d => {
            //         this.tour.tourScheduleObjList.push(d);

            //     }
            // }
        }
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
