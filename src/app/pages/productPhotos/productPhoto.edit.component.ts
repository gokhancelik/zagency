import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { ProductPhoto } from '../../shared/models';
import { ProductPhotoService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';

@Component({
    selector: 'productPhoto-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'productPhoto.form.component.html'
})
export class ProductPhotoEditComponent extends EditComponent<ProductPhoto> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: ProductPhotoService) {
        super(service, null, null);
    }
    ngOnInit() {
    }
}
