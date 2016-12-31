import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const ROLE_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 40,
        placeholder: 'Name',
        required: true
    })
];