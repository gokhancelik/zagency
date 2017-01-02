import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const COMPANYSPEC_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'description',
        label: 'Description',
        placeholder: 'Description',
        required: true
    }),
    new DynamicInputModel({
        id: 'name',
        label: 'name',
        placeholder: 'name',
        inputType: 'string',
        required: true
    }),
];