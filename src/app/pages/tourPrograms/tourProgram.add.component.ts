import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourProgram, Tour } from '../../shared/models';
import { TourProgramService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURPROGRAM_FORM_MODEL } from './tourProgram-form.model';
@Component({
    selector: 'tourProgram-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourProgramAddComponent extends AddComponent<TourProgram> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: TourProgram;
    tour: Tour;
    constructor(private _service: TourProgramService, dynamicFormService: DynamicFormService) {
        super(TourProgram, dynamicFormService, _service, TOURPROGRAM_FORM_MODEL);
    }
    open(): void {
        this.model = new TourProgram(null,null,
            null ,this.tour.id);
        super.open();
    }
    setTour(tour: Tour): void {
        this.tour = tour;
    }
    // save(model: TourProgram) {
    //     if (model) {
    //         this._service.add(model);
    //         if (this.onSaved) this.onSaved.emit();
    //         if (this.formModal) this.formModal.hide();
    // //     }
    // }
}
