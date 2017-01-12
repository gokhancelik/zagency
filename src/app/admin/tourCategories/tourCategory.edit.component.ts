import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourCategory } from '../../shared/models';
import { TourCategoryService } from '../../shared/services/index';
import { EditComponent } from '../../core/index';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURCATEGORY_FORM_MODEL } from './tourCategory-form.model';

@Component({
    selector: 'tourCategory-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourCategoryEditComponent extends EditComponent<TourCategory> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURCATEGORY_FORM_MODEL;
    constructor(service: TourCategoryService, dynamicFormService: DynamicFormService) {
        super(TourCategory, service, dynamicFormService, TOURCATEGORY_FORM_MODEL);
    }
    ngOnInit() {
        this.formGroup.controls['name'].valueChanges.subscribe(data => {
            console.log('Form changes', data);
            if (data) {
                let d = <string>data;
                this.formGroup.controls['urlPath'].setValue(d.toLowerCase()
                    .replace('ç', 'c')
                    .replace('Ç', 'c')
                    .replace('ğ', 'g')
                    .replace('Ğ', 'g')
                    .replace('İ', 'i')
                    .replace('ı', 'i')
                    .replace('ü', 'u')
                    .replace('Ü', 'U')
                    .replace('Ö', 'O')
                    .replace('ö', 'o')
                    .replace('Ş', 'S')
                    .replace('ş', 's')
                    .replace(/[^a-zA-Z0-9-_]/g, ''));
            }
        });
        super.ngOnInit();
    }
}
