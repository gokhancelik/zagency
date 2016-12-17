import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedule } from '../../shared/models';
import { TourScheduleService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';

@Component({
    selector: 'tourSchedule-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourSchedule.form.component.html'
})
export class TourScheduleAddComponent extends AddComponent<TourSchedule> {
    model: TourSchedule;
    tourId: number;
    errorMessage: any;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(private tourScheduleService: TourScheduleService) {
        super(tourScheduleService, TourSchedule)
    }
    ngOnInit() {
    }
    open(): void {
        this.model = new TourSchedule();
        this.model.tourId = this.tourId;
        this.formModal.show();
    }
    setTourId(tourId: number): void {
        this.tourId = tourId;
    }
    close(): void {
        this.formModal.hide();
    }
    save() {
        this.tourScheduleService.add(this.model).subscribe(
            data => {
                this.onSaved.emit(data);
                this.formModal.hide();
            },
            error => {
                this.errorMessage = <any>error;
            }
        );
    }
}
