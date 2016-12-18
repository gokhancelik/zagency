import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const TOURSCHEDULESPEC_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'description',
        label: 'Description',
        placeholder: 'Description',
        required: true
    }),
    new DynamicInputModel({
        id: 'specTypeId',
        label: 'Spec Type',
        placeholder: 'Spec Type',
        inputType: 'number',
        required: true
    }),
];