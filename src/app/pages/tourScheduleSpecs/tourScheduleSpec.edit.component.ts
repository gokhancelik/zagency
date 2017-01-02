import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import {
   TourScheduleSpecService, SpecTypeService,
    CurrencyTypeService
} from '../../shared/services/index';
import { TourScheduleSpec } from '../../shared/models';
import {
    DynamicFormControlModel, DynamicFormService,
    DynamicFormOption, DynamicFormOptionConfig, DynamicSelectModel
} from '@ng2-dynamic-forms/core';
import { EditComponent } from '../../core/index';
import { TOURSCHEDULESPEC_FORM_MODEL } from './tourScheduleSpec-form.model';

@Component({
    selector: 'tourScheduleSpec-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourScheduleSpecEditComponent extends EditComponent<TourScheduleSpec>  {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourScheduleSpecService, dynamicFormService: DynamicFormService,
    private specTypeService: SpecTypeService){
        // private priceTypeService: PriceTypeService) {
        super(TourScheduleSpec, service, dynamicFormService, TOURSCHEDULESPEC_FORM_MODEL);
        TOURSCHEDULESPEC_FORM_MODEL.forEach(value => {
            if (value.id === 'spectype') {
                let select = value as DynamicSelectModel<any>;
                this.specTypeService.getAll().take(1).subscribe(data => {
                    data.forEach(r => {
                        // if (r.name !== 'superadmin') {
                        let s = new DynamicFormOption<any>(
                            { value: r.$key, label: r.name }
                        );
                        select.options.push(s);
                        // }
                    });
                });
            }
        });
    }
    ngOnInit() {
        this.formGroup.controls['spectype'].valueChanges.subscribe(data => {
            if (data) {
                let d = <string>data;
                this.specTypeService.getByKey(data).take(1).subscribe(ct => {
                    this.formGroup.controls['specTypeName'].setValue(ct.name);
                    // this.formGroup.controls['currencySymbol'].setValue(ct.symbol);
                });
            }
        });
        // this.formGroup.controls['priceType'].valueChanges.subscribe(data => {
        //     if (data) {
        //         let d = <string>data;
        //         this.priceTypeService.getByKey(data).take(1).subscribe(ct => {
        //             this.formGroup.controls['priceTypeName'].setValue(ct.name);
        //         });
        //     }
        // });
        super.ngOnInit();
    }
}
