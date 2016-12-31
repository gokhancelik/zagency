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
    get id() {
        return this.$key;
    }
    static fromJson({ $key, name, urlPath}): TourCategory {
        return new TourCategory(
            $key, name, urlPath);
    }
    constructor(
        public $key: string,
        public name: string,
        public urlPath: string) {
        super();
    }

}
