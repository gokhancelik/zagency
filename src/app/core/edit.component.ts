import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { IModel } from './IModel';
import { IService } from './IService.service';
import { FormGroup } from '@angular/forms';
import { FormCreator } from './form-creator.service';
import { DynamicFormService, DynamicFormControlModel } from '@ng2-dynamic-forms/core';
export abstract class EditComponent<T extends IModel> implements OnInit {
    public errorMessage: any;
    myForm: FormGroup;
    formCreator: FormCreator;
    id: number;
    protected model: T;
    dynamicFormModel: Array<DynamicFormControlModel>;
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
        if (this.myForm) {
            this.myForm.reset();
        }
        if (this.formProperties) {
            this.myForm = this.formCreator.createForm(this.formProperties);
            this.dynamicFormModel = this.formCreator.createFormModel(this.formProperties);
        }
        this.service.getById(this.id).subscribe(
            data => {
                this.model = data;
                if (this.myForm)
                    this.myForm.patchValue(data, true);
            }
        );
        this.formModal.show();
    }
    setId(id: number): void {
        this.id = id;
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
                Object.keys(form.value).forEach(name => {
                    this.model[name] = form.value[name];
                });
            }
        }
        this.service.update(this.model, this.model.id).subscribe(
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
