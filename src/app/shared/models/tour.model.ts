import { BaseModel } from './base.model';
export class Tour extends BaseModel {
    static fromJsonList(array): Tour[] {
        console.log(array);
        return array.map(Tour.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            urlPath: {
                title: 'url Path',
                type: 'string'
            },
            imageUrl: {
                title: 'image Url',
                type: 'string'
            },
            tourCategory: {
                title: 'tour Category',
                type: 'string'
            },
            company: {
                title: 'company key',
                type: 'string'
            }

        };
    }
    static fromJson({ $key, name, urlPath, imageUrl, tourCategory, company}): Tour {
        return new Tour(
            $key, name, urlPath, imageUrl, tourCategory, company);
    }
    constructor(
        key: string,
        public name: string,
        public urlPath: string,
        public imageUrl: string,
        public tourCategory: string,
        public company: string
    ) {
        super();
        this.id = key;
    }

}
