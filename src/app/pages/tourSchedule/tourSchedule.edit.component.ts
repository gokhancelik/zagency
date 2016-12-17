import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedule } from '../../shared/models';
import { TourScheduleService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';

@Component({
    selector: 'tourSchedule-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourSchedule.form.component.html'
})
export class TourScheduleEditComponent extends EditComponent<TourSchedule> {
    model: TourSchedule;
    errorMessage: any;
    tourScheduleId: number;

    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(private tourScheduleService: TourScheduleService) {
        super(tourScheduleService);
    }
    ngOnInit() {
    }
}
