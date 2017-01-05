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
            companyName: {
                title: 'company Name',
                type: 'string'
            },
            roleName: {
                title: 'role Name',
                type: 'string'
            },
            phone: {
                title: 'phone',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, name, phone, userName, email, company, companyName, role, roleName }): User {
        return new User(
            $key, name, phone, userName, email, company, companyName, role, roleName);
    }
    constructor(
        id: string = null,
        public name: string = null,
        public phone: string = null,
        public userName: string = null,
        public email: string = null,
        public company: string = null,
        public companyName: string = null,
        public role: string = null,
        public roleName: string = null) {
        super();
        this.id = id;

    }

}
