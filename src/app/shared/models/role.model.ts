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
    get id() {
        return this.$key;
    }
    static fromJson({ $key, name}): Role {
        return new Role(
            $key, name);
    }
    constructor(
        public $key: string,
        public name: string) {
        super();
    }

}
