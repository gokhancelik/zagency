import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { TOURCATEGORY_FORM_MODEL } from './tourCategory-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { TourCategory } from '../../shared/models/';
import { TourCategoryService } from '../../shared/services';
import {
    DynamicFormControlModel, DynamicFormService,
    DynamicFormOption, DynamicFormOptionConfig, DynamicInputModel
} from '@ng2-dynamic-forms/core';
@Component({
    selector: 'tourCategory-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'

})
export class TourCategoryAddComponent extends AddComponent<TourCategory>  {
    _service: TourCategoryService;
    productBaseId: number;
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURCATEGORY_FORM_MODEL;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourCategoryService, dynamicFormService: DynamicFormService) {
        super(TourCategory, dynamicFormService, service, TOURCATEGORY_FORM_MODEL);
        this._service = service;

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
