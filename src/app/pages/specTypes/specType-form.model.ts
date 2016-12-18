import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const SPECTYPE_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        placeholder: 'Name',
        required: true
    }),
    new DynamicInputModel({

        id: 'code',
        label: 'Code',
        placeholder: 'Code',
        required: true
    }),
    new DynamicInputModel({

        id: 'group',
        label: 'Group',
        placeholder: 'Group',
        required: true
    })
];
