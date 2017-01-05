import { BaseModel } from './base.model';
export class TourCategory extends BaseModel {
    static fromJsonList(array): TourCategory[] {
        return array.map(TourCategory.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            urlPath: {
                title: 'urlPath',
                type: 'string'
            },
        };
    }
    // get id() {
    //     return this.$key;
    // }
    static fromJson({ $key, name, urlPath, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt}): TourCategory {
        return new TourCategory(
            $key, name, urlPath, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
    constructor(
        key: string = null,
        public name: string = null,
        public urlPath: string = null,
        createdAt: Date = null,
        createdBy: string = null,
        modifiedAt: Date = new Date(),
        modifiedBy: string = null,
        isDeleted: boolean = false,
        deletedBy: string = null,
        deletedAt: Date = null
    ) {
        super(key, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }

}
