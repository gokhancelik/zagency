import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel
} from '@ng2-dynamic-forms/core';

export const TOURSCHEDULEPRICE_FORM_MODEL: Array<DynamicFormControlModel> = [
    new DynamicInputModel({
        id: 'price',
        inputType: 'number',
        label: 'Price',
        placeholder: 'Price',
        required: true
    }),
    new DynamicInputModel({
        id: 'discount',
        inputType: 'number',
        label: 'Discount',
        placeholder: 'Discount',
    }),
    new DynamicSelectModel(
        {
            id: 'currency',
            label: 'Currency',
            required: true,
            errorMessages: {
                required: '{{label}} is required.',
            }
        }
    ),
    new DynamicSelectModel(
        {
            id: 'priceType',
            label: 'Price Type',
            required: true,
            errorMessages: {
                required: '{{label}} is required.',
            }
        }
    ),
];