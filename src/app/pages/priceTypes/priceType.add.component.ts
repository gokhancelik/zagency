import { Component, OnInit, ViewEncapsulation, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PriceType } from '../../shared/models';
import { PriceTypeService } from '../../shared/services/index';

@Component({
    selector: 'priceType-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'priceType.form.component.html'
})
export class PriceTypeAddComponent implements OnInit {
    constructor(private service: PriceTypeService) { }
    model: PriceType;
    tourScheduleId: number;
    errorMessage: any;
    ngOnInit() {
    }
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();

    open(): void {
        this.model = new PriceType();
        this.formModal.show();
    }
    close(): void {
        this.formModal.hide();
    }
    save() {
        this.service.add(this.model).subscribe(
            data => {
                this.onSaved.emit(this.model);
                this.formModal.hide();
            },
            error => {
                this.errorMessage = <any>error;
            }
        );
    }
}