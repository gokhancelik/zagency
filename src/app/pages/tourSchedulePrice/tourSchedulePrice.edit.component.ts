import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import {
    TourSchedulePriceService, PriceTypeService,
    CurrencyTypeService
} from '../../shared/services/index';
import { TourSchedulePrice } from '../../shared/models';
import {
    DynamicFormControlModel, DynamicFormService,
    DynamicFormOption, DynamicFormOptionConfig, DynamicSelectModel
} from '@ng2-dynamic-forms/core';
import { EditComponent } from '../../core/index';
import { TOURSCHEDULEPRICE_FORM_MODEL } from './tourSchedulePrice-form.model';

@Component({
    selector: 'tourSchedulePrice-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourSchedulePriceEditComponent extends EditComponent<TourSchedulePrice>  {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourSchedulePriceService, dynamicFormService: DynamicFormService,
        private currencyTypeService: CurrencyTypeService,
        private priceTypeService: PriceTypeService) {
        super(TourSchedulePrice, service, dynamicFormService, TOURSCHEDULEPRICE_FORM_MODEL);
        TOURSCHEDULEPRICE_FORM_MODEL.forEach(value => {
            if (value.id === 'currency') {
                let select = value as DynamicSelectModel<any>;
                this.currencyTypeService.getAll().take(1).subscribe(data => {
                    data.forEach(r => {
                        // if (r.name !== 'superadmin') {
                        let s = new DynamicFormOption<any>(
                            { value: r.id, label: r.name }
                        );
                        select.options.push(s);
                        // }
                    });
                });
            }
            if (value.id === 'priceType') {
                let select = value as DynamicSelectModel<any>;
                this.priceTypeService.getAll().take(1).subscribe(data => {
                    data.forEach(r => {
                        let s = new DynamicFormOption<any>(
                            { value: r.id, label: r.name }
                        );
                        select.options.push(s);
                    });
                });

            }
        });
    }
    ngOnInit() {
        this.formGroup.controls['currency'].valueChanges.subscribe(data => {
            if (data) {
                let d = <string>data;
                this.currencyTypeService.getByKey(data).take(1).subscribe(ct => {
                    this.formGroup.controls['currencyName'].setValue(ct.name);
                    this.formGroup.controls['currencySymbol'].setValue(ct.symbol);
                });
            }
        });
        this.formGroup.controls['priceType'].valueChanges.subscribe(data => {
            if (data) {
                let d = <string>data;
                this.priceTypeService.getByKey(data).take(1).subscribe(ct => {
                    this.formGroup.controls['priceTypeName'].setValue(ct.name);
                });
            }
        });
        super.ngOnInit();
    }
}
