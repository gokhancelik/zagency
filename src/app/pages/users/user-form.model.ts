import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
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

        id: 'surname',
        label: 'Surname',
        maxLength: 40,
        placeholder: 'Surname',
        required: true
    }),
     new DynamicInputModel({

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
];