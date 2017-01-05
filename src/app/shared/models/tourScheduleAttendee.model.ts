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
    static fromJson({ $key, tourSchedule, customer}): PriceType {
        return new PriceType(
            $key, tourSchedule, customer);
    }
    constructor(
        key: string = null,
        public tourSchedule: string = null,
        public customer: string = null
    ) {
        super();
        this.id = key;
    }

}
