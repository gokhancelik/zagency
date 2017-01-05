import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const PUBLISHINGTOUR_FORM_MODEL: Array<DynamicFormControlModel> = [
    new DynamicInputModel({
        id: 'publisher_name',
        inputType: 'text',
        label: 'Tour Holder',
        placeholder: 'Tur Holder',
        required: true
    }),
        new DynamicInputModel({
        id: 'distributer_name',
        inputType: 'text',
        label: 'Tour Distirubitor',
        placeholder: 'Tour Distirubitor',
        required: true
    }),
      new DynamicInputModel({
        id: 'ratio',
        inputType: 'number',
        label: 'ratio',
        placeholder: 'ratio',
        required: true
    }),
    new DynamicInputModel({
        inputType: 'number',
        id: 'quota',
        label: 'quota',
        required: true
    })
];