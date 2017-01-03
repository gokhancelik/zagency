import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel, DynamicTextAreaModel
} from '@ng2-dynamic-forms/core';

export const COMPANYSERVICE_FORM_MODEL: Array<DynamicFormControlModel> = [
    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 20,
        placeholder: 'Name',
        required: true
    }),
    new DynamicTextAreaModel({
        id: 'description',
        label: 'Description',
        required: true
    })
];