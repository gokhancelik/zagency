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

    static fromJson({ $key, name, symbol,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
    }): CurrencyType {
        return new CurrencyType(
            $key, name, symbol,
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
        );
    }
    constructor(
        id: string = null,
        public name: string = null,
        public symbol: string = null,
        createdAt: Date = null,
        createdBy: string = null,
        modifiedAt: Date = null,
        modifiedBy: string = null,
        isDeleted: boolean = false,
        deletedBy: string = null,
        deletedAt: Date = null) {
        super(id, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }

}
