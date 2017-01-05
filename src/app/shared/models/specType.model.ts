import { BaseModel } from './base.model';
export class SpecType extends BaseModel {
    static fromJsonList(array): SpecType[] {
        return array.map(SpecType.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            group: {
                title: 'group',
                type: 'string'
            },
            code: {
                title: 'code',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, name, group, code,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
    }): SpecType {
        return new SpecType(
            $key, name, group, code,
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
        );
    }
    constructor(
        id: string = null,
        public name: string = null,
        public group: string = null,
        public code: string = null,
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

