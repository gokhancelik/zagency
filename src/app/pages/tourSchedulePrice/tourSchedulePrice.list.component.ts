import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TourSchedulePrice, TourSchedulePriceAddComponent, TourSchedulePriceEditComponent } from './index';
import { TourScheduleService, TourSchedulePriceService } from '../../shared/services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { NgProgressService } from "ng2-progressbar";
@Component({
    selector: 'tourSchedulePrice-list',
    templateUrl: 'tourSchedulePrice.list.component.html'
})
export class TourSchedulePriceListComponent implements OnInit, OnChanges {
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
    ) { }
    settings = {
        add: {
            confirmCreate: true,
        },
        edit: {
            confirmSave: true,

        },
        delete: {
            confirmDelete: true
        },
        columns: {
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
        },
        mode: 'external'

    };
    source: LocalDataSource = new LocalDataSource();

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
            this.tourSchedulePriceService.get().subscribe(schedules => {
                this.source.load(schedules);
                this.loading = false;
                this.pService.done();
            });
        }
    }
    openFormModal(id: number) {
        if (id) {
            this.editModal.setTourSchedulePriceId(id);
            this.editModal.open();
        }
        else {
            this.addModal.setTourScheduleId(this.tourScheduleId);
            this.addModal.open();
        }
    }
    onCreate(event): void {
        this.openFormModal(null);
    }
    onSaved(event) {
        this.getList();
    }
    onEdit(event): void {
        let tt: TourSchedulePrice = event.data as TourSchedulePrice;
        this.openFormModal(tt.tourSchedulePriceId);
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            let tt: TourSchedulePrice = event.data as TourSchedulePrice;
            this.tourSchedulePriceService.delete(tt.tourSchedulePriceId).subscribe(
                data => this.getList(),
                error => alert(error));
        } else {

        }
    }
    onRowSelect(event): void {
        let tt: TourSchedulePrice = event.data as TourSchedulePrice;
        this.onRowSelectionChanged.emit(tt);
    }
}