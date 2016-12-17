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

@Component({
    selector: 'tourSchedulePrice-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourSchedulePrice.form.component.html'
})
export class TourSchedulePriceAddComponent implements OnInit {
    model: TourSchedulePrice;
    tourScheduleId: number;
    errorMessage: any;
    priceTypes: Array<PriceType> = new Array<PriceType>();
    currencyTypes: Array<CurrencyType> = new Array<CurrencyType>();
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();

    constructor(private tourScheduleService: TourSchedulePriceService,
        private priceTypeService: PriceTypeService,
        private currencyTypeService: CurrencyTypeService
    ) { }
    ngOnInit() {
        this.currencyTypeService.getList().subscribe(data => this.currencyTypes = data);
        this.priceTypeService.get().subscribe(data => this.priceTypes = data);
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
    save() {
        this.tourScheduleService.add(this.model).subscribe(
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
