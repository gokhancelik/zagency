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

export const USER_FORM_MODEL: Array<DynamicFormControlModel> = [

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
        inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_EMAIL,
        id: 'email',
        label: 'Email ',
        placeholder: 'Email',
        validators: {
            required: null,
            minLength: 3,
            emailValidator: null
        },
        errorMessages: {
            required: '{{label}} is required.',
            emailValidator: 'not a valid email'
        }
    }),
    new DynamicInputModel({

        id: 'userName',
        label: 'Username ',
        placeholder: 'Username',
        required: true,
        errorMessages: {
            required: '{{label}} is required.',
        }
    }),
    new DynamicInputModel({

        inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEL,
        id: 'phone',
        label: 'Phone ',
        placeholder: 'Phone',
        required: true,
        errorMessages: {
            required: '{{label}} is required.',
        }
    }),
    new DynamicSelectModel(
        {
            id: 'role',
            label: 'Role',
            required: true,
            errorMessages: {
                required: '{{label}} is required.',
            }
        }
    ),
     new DynamicSelectModel(
        {
            id: 'company',
            label: 'Company',
            required: true,
            errorMessages: {
                required: '{{label}} is required.',
            }
        }
    )
];