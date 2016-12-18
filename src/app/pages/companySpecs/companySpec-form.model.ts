import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const COMPANY_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 20,
        placeholder: 'Name',
        required: true
    }),
    new DynamicInputModel({

        id: 'longName',
        label: 'Long Name',
        maxLength: 150,
        placeholder: 'Long Name',
        required: true
    }),
    new DynamicInputModel({

        id: 'phone1',
        label: 'Phone1',
        maxLength: 15,
        placeholder: 'Phone',
        required: true
    }),
    new DynamicInputModel({

        id: 'phone2',
        label: 'Phone 2',
        maxLength: 12,
        placeholder: 'Phone 2',
    }),
    new DynamicInputModel({

        id: 'webSiteUrl',
        label: 'Web Site',
        placeholder: 'Web Site',
        required: true
    }),
     new DynamicInputModel({

        id: 'email',
        label: 'Email ',
        placeholder: 'Email Site',
        required: true
    }),
];