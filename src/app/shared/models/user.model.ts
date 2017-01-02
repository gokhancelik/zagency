import { BaseModel } from './base.model';
export class User extends BaseModel {
    static fromJsonList(array): User[] {
        return array.map(User.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            role: {
                title: 'role',
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
    static fromJson({ $key, name, phone, userName, email, company, role }): User {
        return new User(
            $key, name, phone, userName, email, company, role);
    }
    constructor(
        id: string = null,
        public name: string = null,
        public phone: string = null,
        public userName: string = null,
        public email: string = null,
        public company: string = null,
        public role: string = null) {
        super();
        this.id = id;

    }

}
