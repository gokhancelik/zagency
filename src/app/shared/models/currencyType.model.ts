import { BaseModel } from './base.model';
export class CurrencyType extends BaseModel {
    static fromJsonList(array): CurrencyType[] {
        return array.map(CurrencyType.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            symbol: {
                title: 'symbol',
                type: 'string'
            }
        };
    }
    get id() {
        return this.$key;
    }
    static fromJson({ $key, name, symbol}): CurrencyType {
        return new CurrencyType(
            $key, name, symbol);
    }
    constructor(
        public $key: string=null,
        public name: string=null,
        public symbol: string=null) {
        super();
    }

}
