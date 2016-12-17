import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { IModel } from './IModel';
import { IService } from './IService.service';
import { FormCreator } from './form-creator.service';
import { DynamicFormService, DynamicFormControlModel } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';

export class AddComponent<T extends IModel> implements OnInit {
    protected model: T;
    errorMessage: any;
    formModal: ModalDirective;
    myForm: FormGroup;
    formCreator: FormCreator;
    @Output() onSaved: EventEmitter<any>;
    constructor(
        private service: IService<T>, private modelType,
        private dynamicFormService: DynamicFormService,
        private formProperties: Array<DynamicFormControlModel>) {
        this.formCreator = new FormCreator(dynamicFormService);
    }
    ngOnInit() {

    }
    open(): void {
        this.model = new this.modelType();
        this.myForm = this.formCreator.createForm(this.formProperties);
        this.formModal.show();
    }
    close(): void {
        this.formModal.hide();
    }
    save() {
        this.service.add(this.model).subscribe(
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
