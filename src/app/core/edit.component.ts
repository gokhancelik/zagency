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
    myForm: FormGroup;
    formCreator: FormCreator;
    data: any;
    protected model: T;
    dynamicFormModel: Array<DynamicFormControlModel>;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() abstract onSaved: EventEmitter<any>;
    constructor(
        private modelType,
        private service: BaseFirebaseService<T>,
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
        if (this.myForm)
            this.myForm.patchValue(this.model);
        this.formModal.show();
    }
    setKey(data: any): void {
        this.service.getByKey(data).subscribe(data => {
            this.model = data;
        });
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
                this.service.update(this.model.id, form.value);
            }
        }
        this.close();
    }
}
