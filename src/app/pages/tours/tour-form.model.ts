import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicSelectModel,
    DynamicOptionControlModel,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const TOUR_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        maxLength: 40,
        placeholder: 'Name',
        required: true,
        errorMessages: {
            required: '{{label}} is required.',
        }
    }),
    new DynamicInputModel({
        id: 'urlPath',
        label: 'Url Path',
        maxLength: 40,
        placeholder: 'Url Path',
        required: true,
        errorMessages: {
            required: '{{label}} is required.',
        }
    }),
    new DynamicInputModel({
        id: 'imageUrl',
        label: 'image Url',
        maxLength: 100,
        readOnly: true,
        placeholder: 'image Url',
    }),
    new DynamicSelectModel(
        {
            id: 'tourCategory',
            label: 'Category',
            required: true,
            errorMessages: {
                required: '{{label}} is required.',
            }
        }
    ),
    new DynamicInputModel({

        id: 'description',
        label: 'Description'
    })
];