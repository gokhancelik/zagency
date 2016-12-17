import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourPhoto } from '../../shared/models';
import { TourPhotoService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';

@Component({
    selector: 'tourPhoto-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourPhoto.form.component.html'
})
export class TourPhotoEditComponent extends EditComponent<TourPhoto> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourPhotoService) {
        super(service, null, null);
    }
    ngOnInit() {
    }
}
