import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { IModel } from './IModel';
import { IService } from './IService.service';
import { FormCreator } from './form-creator.service';
import { DynamicFormService, DynamicFormControlModel } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export class AddComponent<T extends IModel> implements OnInit {
    protected errorMessage: any;
    protected formModal: ModalDirective;
    protected myForm: FormGroup;
    protected formCreator: FormCreator;
    protected model: T;
    dynamicFormModel: Array<DynamicFormControlModel>;
    @Output() onSaved: EventEmitter<any>;
    constructor(private modelType,
        private dynamicFormService: DynamicFormService,
        private resource: FirebaseListObservable<any[]>,
        private formProperties: Array<DynamicFormControlModel>) {
        this.formCreator = new FormCreator(dynamicFormService);
        if (this.formProperties) {
            this.myForm = this.formCreator.createForm(this.formProperties);
            this.dynamicFormModel = this.formCreator.createFormModel(this.formProperties);
        }
    }
    ngOnInit() {

    }
    open(): void {
        if (!this.model)
            this.model = new this.modelType();
        if (this.myForm)
            this.myForm.patchValue(this.model);
        this.formModal.show();
    }
    close(): void {
        this.formModal.hide();
    }
    save(form) {
        if (form) {
            if (form.value) {
                if (!form.valid) {
                    return;
                }
                this.model = new this.modelType(form.value);
            }
        }
        this.resource.push(this.model);
        this.onSaved.emit(this.model);
        this.formModal.hide();
    }
}
