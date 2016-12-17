import { Component, OnInit, ViewEncapsulation, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { PriceType } from '../../shared/models';
import { PriceTypeService } from '../../shared/services/index';

@Component({
    selector: 'priceType-edit',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'priceType.form.component.html'
})
export class PriceTypeEditComponent implements OnInit {
    constructor(private service: PriceTypeService) { }
    model: PriceType;
    errorMessage: any;
    priceTypeId: number;
    ngOnInit() {
    }
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();

    open(): void {
        this.service.getById(this.priceTypeId).subscribe(
            data => {
                this.model = data;
            }
        );
        this.formModal.show();
    }
    setPriceTypeId(priceTypeId: number): void {
        this.priceTypeId = priceTypeId;
    }
    close(): void {
        this.formModal.hide();
    }
    save() {
        this.service.update(this.model, this.model.priceTypeId).subscribe(
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