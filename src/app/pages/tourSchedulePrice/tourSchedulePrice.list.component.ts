import {
    Component, OnInit, OnChanges, ViewChild, Input,
    Output, EventEmitter
} from '@angular/core';
import {
    TourSchedulePriceAddComponent,
    TourSchedulePriceEditComponent
} from './index';
import { TourScheduleService, TourSchedulePriceService } from '../../shared/services/index';
import { TourSchedulePrice, TourSchedule } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
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
    @Input() tourSchedule: TourSchedule;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    loading: boolean = false;
    constructor(
        private tourScheduleService: TourScheduleService,
        private tourSchedulePriceService: TourSchedulePriceService
    ) {
        super(tourSchedulePriceService);
        this.setColumns(TourSchedulePrice.getColumns());
    }
    ngOnInit() {

    }
    ngOnChanges(changes) {
        this.getList();
    }
    getList() {
        this.loading = true;
        let that = this;
        if (this.tourSchedule) {
            this.tourScheduleService.getTourSchedulePrices(this.tourSchedule.id)
                .subscribe(schedulePrices => {
                    that.source.load(schedulePrices);
                    that.loading = false;
                });
        }
    }
    openModal(data: TourSchedulePrice) {
        if (data) {
            this.editModal.setKey(data.id);
            this.editModal.open();
        }
        else {
            this.addModal.setTourSchedule(this.tourSchedule);
            this.addModal.open();
        }
    }
    onCreate(event): void {
        this.openModal(null);

    }
    onEdit(event): void {
        let tt: TourSchedulePrice = event.data as TourSchedulePrice;
        this.openModal(tt);
    }
}