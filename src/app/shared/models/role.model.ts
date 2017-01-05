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
 
    static fromJson({ $key, name}): Role {
        return new Role(
            $key, name);
    }
    constructor(
        key: string=null,
        public name: string=null) 
        {
        super();
        this.id=key;
    }

}
