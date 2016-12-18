import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourSchedulePrice } from './index';
import {
    TourSchedulePriceService, PriceTypeService,
    CurrencyTypeService
} from '../../shared/services/index';
import { PriceType, CurrencyType } from '../../shared/models';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { EditComponent } from '../../core/index';
import { TOURSCHEDULEPRICE_FORM_MODEL } from './tourSchedulePrice-form.model';

@Component({
    selector: 'tourSchedulePrice-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourSchedulePrice.form.component.html'
})
export class TourSchedulePriceEditComponent extends EditComponent<TourSchedulePrice>  {
    model: TourSchedulePrice;
    currencyTypes: Array<CurrencyType>;
    priceTypes: Array<PriceType>;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    myDynamicFormModel: Array<DynamicFormControlModel> = TOURSCHEDULEPRICE_FORM_MODEL;
    constructor(service: TourSchedulePriceService, dynamicFormService: DynamicFormService,
        private currencyTypeService: CurrencyTypeService,
        private priceTypeService: PriceTypeService) {
        super(service, dynamicFormService, TOURSCHEDULEPRICE_FORM_MODEL);
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
