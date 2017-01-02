import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { IService } from './IService.service';
import { FormCreator } from './form-creator.service';
import { DynamicFormService, DynamicFormControlModel } from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { BaseModel } from '../shared/models/base.model';
import { BaseFirebaseService } from '../shared/services/base.firebase.service';

export class AddComponent<T extends BaseModel> implements OnInit {
    protected errorMessage: any;
    protected formModal: ModalDirective;
    protected formGroup: FormGroup;
    protected formCreator: FormCreator;
    protected model: T;
    dynamicFormModel: Array<DynamicFormControlModel>;
    @Output() onSaved: EventEmitter<any>;
    constructor(private modelType,
        private dynamicFormService: DynamicFormService,
        private service: BaseFirebaseService<T>,
        private formProperties: Array<DynamicFormControlModel>) {
        this.formCreator = new FormCreator(dynamicFormService);
        if (this.formProperties) {
            this.formGroup = this.formCreator.createForm(this.formProperties);
            this.dynamicFormModel = this.formCreator.createFormModel(this.formProperties);
        }
    }
    ngOnInit() {

    }
    open(): void {
        if (!this.model)
            this.model = new this.modelType();
        if (this.formGroup)
            this.formGroup.patchValue(this.model);
        if (this.formModal) this.formModal.show();
    }
    close(): void {
        if (this.formModal) this.formModal.hide();
    }
    save(form) {
        if (form) {
            if (form.value) {
                if (!form.valid) {
                    return;
                }
                Object.keys(form.value).forEach(fv => {
                    this.model[fv] = form.value[fv]
                });
                this.service.add(this.model);
                if (this.onSaved) this.onSaved.emit(this.model);
                if (this.formModal) this.formModal.hide();
            }
        }
    }
}
