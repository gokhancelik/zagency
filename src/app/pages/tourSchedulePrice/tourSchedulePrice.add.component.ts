import { FormGroup } from '@angular/forms';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter, Input
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import {
    TourSchedulePriceService, PriceTypeService,
    CurrencyTypeService
} from '../../shared/services';
import { TourSchedule, TourSchedulePrice } from '../../shared/models';
import { AddComponent } from '../../core/add.component';
import { TOURSCHEDULEPRICE_FORM_MODEL } from './tourSchedulePrice-form.model';
import {
    DynamicFormControlModel, DynamicFormService,
    DynamicFormOption, DynamicFormOptionConfig, DynamicSelectModel
} from '@ng2-dynamic-forms/core';
@Component({
    selector: 'tourSchedulePrice-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourSchedulePriceAddComponent extends AddComponent<TourSchedulePrice> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: TourSchedulePrice;
    tourSchedule: TourSchedule;
    constructor(private _service: TourSchedulePriceService, dynamicFormService: DynamicFormService,
        private currencyTypeService: CurrencyTypeService,
        private priceTypeService: PriceTypeService) {
        super(TourSchedulePrice, dynamicFormService, _service, TOURSCHEDULEPRICE_FORM_MODEL);
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
    open(): void {
        this.model = new TourSchedulePrice();
        this.model.tourSchedule = this.tourSchedule.id;
        super.open();
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
    setTourSchedule(tourSchedule: TourSchedule): void {
        this.tourSchedule = tourSchedule;
    }
    // save(form: FormGroup) {
    //     if (form) {
    //         Object.keys(form.value).forEach(fv => {
    //             this.model[fv] = form.value[fv]
    //         });
    //         this._service.add(this.model);
    //         if (this.onSaved) this.onSaved.emit();
    //         if (this.formModal) this.formModal.hide();
    //     }
    // }
}
