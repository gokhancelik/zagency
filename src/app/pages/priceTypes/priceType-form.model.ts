import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const PRICETYPE_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 50,
        placeholder: 'Name',
        required: true
    })
];
