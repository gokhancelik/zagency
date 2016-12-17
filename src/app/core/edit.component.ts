import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { IModel } from './IModel';
import { IService } from './IService.service';
import { FormGroup } from '@angular/forms';
import { FormCreator } from './form-creator.service';
import { DynamicFormService, DynamicFormControlModel } from '@ng2-dynamic-forms/core';
export abstract class EditComponent<T extends IModel> implements OnInit {
    model: T;
    public errorMessage: any;
    myForm: FormGroup;
    formCreator: FormCreator;
    id: number;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() abstract onSaved: EventEmitter<any>;
    constructor(private service: IService<T>,
        private dynamicFormService: DynamicFormService,
        private formProperties: Array<DynamicFormControlModel>) {
        if (dynamicFormService)
            this.formCreator = new FormCreator(dynamicFormService);
    }
    ngOnInit() {
    }
    open(): void {
        this.model = null;
        this.service.getById(this.id).subscribe(
            data => {
                this.model = data;
            }
        );
        if (this.formProperties)
            this.myForm = this.formCreator.createForm(this.formProperties);
        this.formModal.show();
    }
    setId(id: number): void {
        this.id = id;
    }
    close(): void {
        this.formModal.hide();
    }
    save() {
        this.service.update(this.model, this.model.id).subscribe(
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
