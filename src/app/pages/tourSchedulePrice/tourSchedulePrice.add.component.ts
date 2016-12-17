import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedulePrice } from './index';
import {
    TourSchedulePriceService, PriceTypeService,
    CurrencyTypeService
} from '../../shared/services';
import { PriceType, CurrencyType } from '../../shared/models';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURSCHEDULEPRICE_FORM_MODEL } from './tourSchedulePrice-form.model';

@Component({
    selector: 'tourSchedulePrice-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourSchedulePrice.form.component.html'
})
export class TourSchedulePriceAddComponent extends AddComponent<TourSchedulePrice> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: TourSchedulePrice;
    tourScheduleId: number;
    currencyTypes: Array<CurrencyType>;
    priceTypes: Array<PriceType>;
    private _service: TourSchedulePriceService;
    constructor(service: TourSchedulePriceService, dynamicFormService: DynamicFormService,
        private currencyTypeService: CurrencyTypeService,
        private priceTypeService: PriceTypeService) {
        super(service, TourSchedulePrice, dynamicFormService, TOURSCHEDULEPRICE_FORM_MODEL);
        this._service = service;
    }
    open(): void {
        this.model = new TourSchedulePrice();
        this.model.tourScheduleId = this.tourScheduleId;
        this.formModal.show();
    }
    setTourScheduleId(tourScheduleId: number): void {
        this.tourScheduleId = tourScheduleId;
    }
    close(): void {
        this.formModal.hide();
    }
    ngOnInit() {
        this.currencyTypeService.getList().subscribe(
            data => this.currencyTypes = data
        );
        this.priceTypeService.getList().subscribe(
            data => this.priceTypes = data
        );
        super.ngOnInit();
    }
}
