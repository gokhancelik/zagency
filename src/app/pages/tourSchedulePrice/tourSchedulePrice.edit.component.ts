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

@Component({
    selector: 'tourSchedulePrice-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourSchedulePrice.form.component.html'
})
export class TourSchedulePriceEditComponent implements OnInit {

    model: TourSchedulePrice;
    errorMessage: any;
    tourSchedulePriceId: number;
    priceTypes: Array<PriceType> = new Array<PriceType>();
    currencyTypes: Array<CurrencyType> = new Array<CurrencyType>();
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(
        private tourSchedulePriceService: TourSchedulePriceService,
        private priceTypeService: PriceTypeService,
        private currencyTypeService: CurrencyTypeService
    ) { }
    ngOnInit() {
        this.priceTypeService.get().subscribe(data => this.priceTypes = data);
        this.currencyTypeService.getList().subscribe(data => this.currencyTypes = data);
    }
    open(): void {
        this.tourSchedulePriceService.getById(this.tourSchedulePriceId).subscribe(
            data => {
                this.model = data;
            }
        );
        this.formModal.show();
    }
    setTourSchedulePriceId(tourSchedulePriceId: number): void {
        this.tourSchedulePriceId = tourSchedulePriceId;
    }
    close(): void {
        this.formModal.hide();
    }
    save() {
        this.tourSchedulePriceService.update(this.model, this.model.tourSchedulePriceId).subscribe(
            data => {
                this.onSaved.emit(data);
                this.formModal.hide();
            },
            error => {
                this.errorMessage = <any>error;
            }
        );
    }
}
