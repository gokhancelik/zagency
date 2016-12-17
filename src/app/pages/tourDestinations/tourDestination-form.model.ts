import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const TOURDESTINATION_FORM_MODEL: Array<DynamicFormControlModel> = [
 new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 20,
        placeholder: 'Name',
        required: true
    }),
    new DynamicInputModel({

        id: 'latitude',
        label: 'Location',
        maxLength: 150,
        placeholder: 'Latitude',
        required: true
    }),
    new DynamicInputModel({

        id: 'longitude',
        label: 'Longitude',
        maxLength: 12,
        placeholder: 'Longitude',
        required: true
    })
];