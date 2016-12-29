import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { IModel } from './IModel';
import { IService } from './IService.service';
import { FormGroup } from '@angular/forms';
import { FormCreator } from './form-creator.service';
import { DynamicFormService, DynamicFormControlModel } from '@ng2-dynamic-forms/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export abstract class EditComponent<T extends IModel> implements OnInit {
    public errorMessage: any;
    myForm: FormGroup;
    formCreator: FormCreator;
    data: any;
    protected model: T;
    dynamicFormModel: Array<DynamicFormControlModel>;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() abstract onSaved: EventEmitter<any>;
    constructor(
        private modelType,
        private af: AngularFire,
        private sourceName: string,
        private dynamicFormService: DynamicFormService,
        private formProperties: Array<DynamicFormControlModel>) {
        if (dynamicFormService)
            this.formCreator = new FormCreator(dynamicFormService);
    }
    ngOnInit() {
    }
    open(): void {
        if (this.myForm) {
            this.myForm.reset();
        }
        if (this.formProperties) {
            this.myForm = this.formCreator.createForm(this.formProperties);
            this.dynamicFormModel = this.formCreator.createFormModel(this.formProperties);
        }
        this.model = new this.modelType(this.data);
        if (this.myForm)
            this.myForm.patchValue(this.model);
        this.formModal.show();
    }
    setData(data: any): void {
        this.data = data;
    }
    close(): void {
        this.formModal.hide();
    }
    save(form: FormGroup) {
        if (form) {
            if (form.value) {
                if (!form.valid) {
                    return;
                }
                Object.keys(this.model).forEach(key => {
                    this.model[key] = form.value[key] || this.model[key];
                })
                this.af.database.object(this.sourceName + this.data.$key).set(this.model);
            }
        }
        this.close();
    }
}
