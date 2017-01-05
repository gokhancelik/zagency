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
 
    static fromJson({ $key, name}): PriceType {
        return new PriceType(
            $key, name);
    }
    constructor(
        key: string=null,
        public name: string=null) {
        super();
        this.id=key;
    }

}
