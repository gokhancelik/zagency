import {
    DynamicFormControlModel,
    DynamicTextAreaModel
} from '@ng2-dynamic-forms/core';

export const COMPANYSPEC_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicTextAreaModel({
        id: 'aboutUs',
        label: 'About Us',
        placeholder: 'Description',
        required: true
    }),
    new DynamicTextAreaModel({
        id: 'whyUs',
        label: 'Why Us',
        placeholder: 'Why Us'
    }),
];