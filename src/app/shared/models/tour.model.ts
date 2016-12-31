import { BaseModel } from './base.model';
export class Tour extends BaseModel {
    static fromJsonList(array): Tour[] {
        return array.map(Tour.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            }

        };
    }
    get id() {
        return this.$key;
    }
    static fromJson({ $key, name, company}): Tour {
        return new Tour(
            $key, name, company);
    }
    constructor(
        public $key: string,
        public name: string,
        public company: string
    ) {
        super();
    }

}
