import { IModel } from '../../core/index';
export class CurrencyType implements IModel {
    id: number;
    name: string;
    symbol: string;
    currencyTypeId: number;
    constructor() {
    }
}
