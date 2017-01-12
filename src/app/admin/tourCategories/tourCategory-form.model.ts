import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const TOURCATEGORY_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 50,
        placeholder: 'Name',
        required: true
    }),
    new DynamicInputModel({
        id: 'urlPath',
        label: 'Url Path',
        maxLength: 50,
        placeholder: 'Url Path',
        required: true,
        readOnly: true
    })
];

