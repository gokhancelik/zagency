import { BaseModel } from './base.model';
export class Role extends BaseModel {
    static fromJsonList(array): Role[] {
        return array.map(Role.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
        };
    }

    static fromJson({ $key, name,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
    }): Role {
        return new Role(
            $key, name,
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
        );
    }
    constructor(
        id: string = null,
        public name: string = null,
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
