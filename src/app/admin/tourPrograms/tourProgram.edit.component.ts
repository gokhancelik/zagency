import { FormGroup } from '@angular/forms';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourProgram, Tour } from '../../shared/models';
import { TourProgramService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURPROGRAM_FORM_MODEL } from './tourProgram-form.model';
@Component({
    selector: 'tourProgram-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class TourProgramEditComponent extends EditComponent<TourProgram> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    tour: Tour;
    constructor(private _service: TourProgramService, dynamicFormService: DynamicFormService) {
        super(TourProgram, _service, dynamicFormService, TOURPROGRAM_FORM_MODEL);
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
