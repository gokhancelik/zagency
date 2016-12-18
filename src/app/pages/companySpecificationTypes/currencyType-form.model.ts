import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const CURRENCY_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 20,
        placeholder: 'Name',
        required: true
    }),
    new DynamicInputModel({

        id: 'symbol',
        label: 'Symbol',
        maxLength: 5,
        placeholder: 'Symbol',
        required: true
    })
];
