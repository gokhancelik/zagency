import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const USER_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 40,
        placeholder: 'Name',
        required: true
    }),
    new DynamicInputModel({
        inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL,
        id: 'email',
        label: 'Email ',
        placeholder: 'Email',
        required: true
    }),
    new DynamicInputModel({

        id: 'userName',
        label: 'Username ',
        placeholder: 'Username',
        required: true
    }),
    new DynamicInputModel({

        id: 'userName',
        label: 'Username ',
        placeholder: 'Username',
        required: true
    }),
];