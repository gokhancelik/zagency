import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const TOURSCHEDULE_FORM_MODEL: Array<DynamicFormControlModel> = [
    new DynamicInputModel({
        id: 'quota',
        inputType: 'text',
        label: 'Available Seats',
        placeholder: 'Available Seats',
        required: true
    }),
    new DynamicInputModel({
        inputType: 'text',
        id: 'start',
        label: 'Start',
        required: true
    }),
    new DynamicInputModel({
        inputType: 'text',
        id: 'end',
        label: 'End',
        required: true
    })
];