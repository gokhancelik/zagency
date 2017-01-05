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
            email: {
                title: 'email',
                type: 'string'
            },
            userName: {
                title: 'userName',
                type: 'string'
            },
            companyName: {
                title: 'company',
                type: 'string'
            },
            phone: {
                title: 'phone',
                type: 'string'
            },
            address: {
                title: 'phone',
                type: 'address'
            }
        };
    }
    static fromJson({ $key, name, phone, email, company, companyName, address }): User {
        return new User(
            $key, name, phone, email, company, companyName, address);
    }
    constructor(
        id: string = null,
        public name: string = null,
        public phone: string = null,
        public userName: string = null,
        public email: string = null,
        public company: string = null,
        public companyName: string = null,
        public address: string = null) {
        super();
        this.id = id;

    }

}
