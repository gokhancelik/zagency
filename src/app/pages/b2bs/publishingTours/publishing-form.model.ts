import { EmailValidator } from './../../theme/validators/email.validator';
import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicSelectModel,
    DynamicOptionControlModel,
    DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL,
    DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEL,
    DynamicRadioGroupModel
} from '@ng2-dynamic-forms/core';

export const PUBLISHINGTOUR_FORM_MODEL: Array<DynamicFormControlModel> = [

    new DynamicInputModel({
        id: 'quota',
        label: 'quota',
        maxLength: 40,
        placeholder: 'quota',
        required: true,
        errorMessages: {
            required: '{{label}} is required.',
        }
    }),
     new DynamicInputModel({
        id: 'ratio',
        label: 'ratio',
        maxLength: 40,
        placeholder: 'Ratio',
        required: true,
        errorMessages: {
            required: '{{label}} is required.',
        }
    }),
     new DynamicSelectModel(
        {
            id: 'distributor',
            label: 'distributorName',
            required: true,
            errorMessages: {
                required: '{{label}} is required.',
            }
        }
    )
];