import {
    Component, OnInit, OnChanges, ViewChild, Input,
    Output, EventEmitter
} from '@angular/core';
import { DatePipe } from '@angular/common';
import {
    TourScheduleSpecEditComponent,
    TourScheduleSpecAddComponent
} from './index';
import { TourScheduleService, TourScheduleSpecService } from '../../shared/services/index';
import { TourScheduleSpec, TourSchedule } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'tourScheduleSpec-list',
    templateUrl: 'tourScheduleSpec.list.component.html'
})
export class TourScheduleSpecListComponent
    extends ListComponent<TourScheduleSpec>
    implements OnChanges {
    @ViewChild('addModal') addModal: TourScheduleSpecAddComponent;
    @ViewChild('editModal') editModal: TourScheduleSpecEditComponent;
    @Input() tourSchedule: TourSchedule;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    loading: boolean = false;
    constructor(
        private datePipe: DatePipe,
        private tourScheduleService: TourScheduleService,
        private tourScheduleSpecService: TourScheduleSpecService
    ) {
        super(tourScheduleSpecService);
        this.setColumns(TourScheduleSpec.getColumns());
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
            this.tourScheduleService.getTourScheduleSpecs(this.tourSchedule.id)
                .subscribe(schedulePrices => {
                    that.source.load(schedulePrices);
                    that.loading = false;
                });
        }
    }
    openModal(data: TourScheduleSpec) {
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
        let tt: TourScheduleSpec = event.data as TourScheduleSpec;
        this.openModal(tt);
    }
}