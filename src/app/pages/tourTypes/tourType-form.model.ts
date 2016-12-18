import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const TOURTYPE_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 50,
        placeholder: 'Name',
        required: true
    }),
    new DynamicInputModel({

        id: 'companyName',
        label: 'Company Name',
        maxLength: 150,
        placeholder: 'Company Name',
        required: true
    }),
    
];