import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const PHOTOLOCATION_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        placeholder: 'Name',
        required: true
    }),
    new DynamicInputModel({
        id: 'height',
        label: 'Height',
        placeholder: 'Height',
        inputType: 'number',
        required: true
    }),
    new DynamicInputModel({
        id: 'width',
        label: 'Width',
        placeholder: 'Width',
        inputType: 'number',
        required: true
    })
];
