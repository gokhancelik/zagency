import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { BaseModel } from '../shared/models/base.model';
import { BaseFirebaseService } from '../shared/services/base.firebase.service';
import { FormGroup } from '@angular/forms';
import { FormCreator } from './form-creator.service';
import { DynamicFormService, DynamicFormControlModel } from '@ng2-dynamic-forms/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export abstract class EditComponent<T extends BaseModel> implements OnInit {
    public errorMessage: any;
    formGroup: FormGroup;
    formCreator: FormCreator;
    objectKey: any;
    protected model: T;
    dynamicFormModel: Array<DynamicFormControlModel>;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any>;
    constructor(
        private modelType,
        private service: BaseFirebaseService<T>,
        private dynamicFormService: DynamicFormService,
        private formProperties: Array<DynamicFormControlModel>) {
        if (dynamicFormService)
            this.formCreator = new FormCreator(dynamicFormService);
        if (this.formProperties) {
            this.formGroup = this.formCreator.createForm(this.formProperties);
            this.dynamicFormModel = this.formCreator.createFormModel(this.formProperties);
        }
    }
    ngOnInit() {

    }
    open(): void {
        this.service.getByKey(this.objectKey).subscribe(data => {
            this.model = data;
            // if (this.formGroup) {
            //     this.formGroup.reset();
            // }
            Object.keys(this.model).forEach(prop => {
                if (this.formGroup.controls[prop])
                    this.formGroup.controls[prop].setValue(this.model[prop]);
            });
            if (this.formModal) this.formModal.show();
        });
    }
    setKey(key: any): void {
        this.objectKey = key;
    }
    close(): void {
        if (this.formModal)
            this.formModal.hide();
    }
    save(form: any) {
        if (form) {
            if (form.value) {
                if (!form.valid) {
                    return;
                }
                this.service.update(this.model.id, form.value);
            }
        }
        this.close();
    }
}
