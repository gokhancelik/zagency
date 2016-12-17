import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const TOURPROGRAM_FORM_MODEL: Array<DynamicFormControlModel> = [
    new DynamicInputModel({
        id: 'day',
        label: 'Day',
        maxLength: 20,
        placeholder: 'Day',
        required: true
    }),
    new DynamicInputModel({

        id: 'description',
        label: 'Description'
    })
];