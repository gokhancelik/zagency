import { IModel } from '../../core/index';
export class CurrencyType implements IModel {
    id: number;
    name: string;
    symbol: string;
    currencyTypeId: number;
    constructor(data: any = null) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.symbol = data.symbol;
            this.currencyTypeId = data.currencyTypeId;
        }
        else {
            this.id = 0;
            this.name = '';
            this.symbol = '';
            this.currencyTypeId = 0;
        }
    }
}
