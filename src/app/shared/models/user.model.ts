import { BaseModel } from './base.model';
export class User extends BaseModel {
    static fromJsonList(array): User[] {
        return array.map(User.fromJson);
    }
    static getColumns(): any {
        return {
            id: {
                title: 'id',
                type: 'string'
            },
            name: {
                title: 'name',
                type: 'string'
            },
            email: {
                title: 'email',
                type: 'string'
            },
            userName: {
                title: 'userName',
                type: 'string'
            },
            company: {
                title: 'company',
                type: 'string'
            },
            phone: {
                title: 'phone',
                type: 'string'
            }
        };
    }
    get id() {
        return this.$key;
    }
    static fromJson({ $key, name, phone, userName, email, company }): User {
        return new User(
            $key, name, phone, userName, email, company);
    }
    constructor(
        public $key: string,
        public name: string,
        public phone: string,
        public userName: string,
        public email: string,
        public company: string) {
        super();
    }

}
