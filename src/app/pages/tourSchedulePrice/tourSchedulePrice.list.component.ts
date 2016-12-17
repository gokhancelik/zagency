import {
    Component, OnInit, OnChanges, ViewChild, Input,
    Output, EventEmitter
} from '@angular/core';
import { DatePipe } from '@angular/common';
import {
    TourSchedulePrice, TourSchedulePriceAddComponent,
    TourSchedulePriceEditComponent
} from './index';
import { TourScheduleService, TourSchedulePriceService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { NgProgressService } from "ng2-progressbar";
import { ListComponent } from '../../core/index';

@Component({
    selector: 'tourSchedulePrice-list',
    templateUrl: 'tourSchedulePrice.list.component.html'
})
export class TourSchedulePriceListComponent
    extends ListComponent<TourSchedulePrice>
    implements OnChanges {
    @ViewChild('addModal') addModal: TourSchedulePriceAddComponent;
    @ViewChild('editModal') editModal: TourSchedulePriceEditComponent;
    @Input() tourScheduleId: number = 0;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    loading: boolean = false;
    constructor(
        private datePipe: DatePipe,
        private tourScheduleService: TourScheduleService,
        private tourSchedulePriceService: TourSchedulePriceService,
        private pService: NgProgressService
    ) {
        super(tourSchedulePriceService);
        this.setColumns({
            price: {
                title: 'Price',
                type: 'number'
            },
            discount: {
                title: 'Discount',
                type: 'number'
            },
            priceTypeName: {
                title: 'Price Type',
                type: 'string'
            },
            currencyTypeName: {
                title: 'Currency',
                type: 'string'
            },
        });
    }
    ngOnInit() {
        this.getList();
    }
    ngOnChanges(changes) {
        this.getList();
    }
    getList() {
        this.loading = true;
        this.pService.start();
        if (this.tourScheduleId) {
            this.tourScheduleService.getTourSchedulePrices(this.tourScheduleId)
                .subscribe(schedulePrices => {
                    this.source.load(schedulePrices);
                    this.loading = false;
                    this.pService.done();
                });
        }
        else {
            this.tourSchedulePriceService.getList().subscribe(schedules => {
                this.source.load(schedules);
                this.loading = false;
                this.pService.done();
            });
        }
    }
      openModal(id: number) {
        if (id) {
            this.editModal.setId(id);
            this.editModal.open();
        }
        else {
            this.addModal.setTourScheduleId(this.tourScheduleId);
            this.addModal.open();
        }
    }
    onCreate(event): void {
        this.openModal(null);

    }
    onEdit(event): void {
        let tt: TourSchedulePrice = event.data as TourSchedulePrice;
        this.openModal(tt.tourScheduleId);
    }
}