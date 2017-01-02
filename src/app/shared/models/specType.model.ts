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
    get id() {
        return this.$key;
    }
    static fromJson({ $key, name,group,code}): SpecType {
        return new SpecType(
            $key, name,group,code);
    }
    constructor(
        public $key: string=null,
        public name: string=null,
        public group: string=null,
        public code: string=null) 
        {
        super();
    }

}

