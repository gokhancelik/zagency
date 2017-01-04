import {
    DynamicFormControlModel,
    DynamicInputModel,
} from '@ng2-dynamic-forms/core';

export const B2B_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'distributor',
        label: 'Distributor',
        required: true,
        readOnly: true

    }),
    new DynamicInputModel({

        id: 'distributor_name',
        label: 'Distributor Name',
        placeholder: 'Distributor Name',
        required: true,
        readOnly: true
    })
];
