import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, OnChanges, Input, Output, EventEmitter
} from '@angular/core';
import { TourScheduleSpecService, TourScheduleService } from '../../shared/services/index';
import { TourScheduleSpec } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { TourScheduleSpecEditComponent, TourScheduleSpecAddComponent } from './index';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'tourScheduleSpec-list',
    templateUrl: 'tourScheduleSpec.list.component.html'
})
export class TourScheduleSpecListComponent extends ListComponent<TourScheduleSpec>
    implements OnChanges {
    @ViewChild('addModal') addModal: TourScheduleSpecAddComponent;
    @ViewChild('editModal') editModal: TourScheduleSpecEditComponent;
    title: string = 'Tour Schedule Specs';
    _service: TourScheduleSpecService;
    @Input() tourScheduleId: number = 0;
    @Output() onRowSelectionChanged: EventEmitter<any> = new EventEmitter();
    loading: boolean = false;
    constructor(service: TourScheduleSpecService,
        private tourScheduleService: TourScheduleService) {
        super(service);
        this.setColumns({
            tourScheduleSpecId: {
                title: 'tourScheduleSpecId',
                type: 'number'
            },
            description: {
                title: 'Description',
                type: 'string'
            }
        });
        this._service = service;
    }
    ngOnInit() {
        this.getList();
    }
    ngOnChanges(changes) {
        this.getList();
    }
    getList() {
        this.loading = true;
        if (this.tourScheduleId) {
            this.tourScheduleService.getTourScheduleSpecs(this.tourScheduleId)
                .subscribe(data => {
                    this.source.load(data);
                    this.loading = false;
                });
        }
        else {
            this._service.getList().subscribe(schedules => {
                this.source.load(schedules);
                this.loading = false;
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
        let tt: TourScheduleSpec = event.data as TourScheduleSpec;
        this.openModal(tt.id);
    }
}
