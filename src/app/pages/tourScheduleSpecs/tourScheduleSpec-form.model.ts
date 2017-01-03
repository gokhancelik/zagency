import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicSelectModel,
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
        id: 'name',
        label: 'name',
        placeholder: 'name',
        inputType: 'string',
        required: true
    }),
    new DynamicSelectModel(
        {
            id: 'spectype',
            label: 'Spectype',
            required: true,
            errorMessages: {
                required: '{{spectype}} is required.',
            }
        }
    ),
    new DynamicInputModel({
        id: 'spectypeName',
        inputType: 'string',
        label: 'spec Type Name',
        readOnly: true
    })
];