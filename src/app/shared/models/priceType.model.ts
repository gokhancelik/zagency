import { BaseModel } from './base.model';
export class PriceType extends BaseModel {
    static fromJsonList(array): PriceType[] {
        return array.map(PriceType.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
        };
    }
    get id() {
        return this.$key;
    }
    static fromJson({ $key, name}): PriceType {
        return new PriceType(
            $key, name);
    }
    constructor(
        public $key: string,
        public name: string) {
        super();
    }

}
