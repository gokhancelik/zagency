import { BaseModel } from './base.model';
export class Company extends BaseModel {
    static fromJsonList(array): Company[] {
        return array.map(Company.fromJson);
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
            longName: {
                title: 'longName',
                type: 'string'
            },
            webSiteUrl: {
                title: 'webSiteUrl',
                type: 'string'
            },
            phone1: {
                title: 'phone1',
                type: 'string'
            },
            phone2: {
                title: 'phone2',
                type: 'string'
            },
            fax: {
                title: 'fax',
                type: 'string'
            },
            email: {
                title: 'email',
                type: 'string'
            }
        };
    }


    static fromJson({ $key, name, longName, webSiteUrl, phone1, phone2, fax, email, specs }): Company {
        return new Company(
            $key, name, longName, webSiteUrl, phone1, phone2, fax, email, specs);
    }
    constructor(
        id: string,
        public name: string,
        public phone1: string,
        public phone2: string,
        public fax: string,
        public email: string,
        public longName: string,
        public webSiteUrl: string,
        public specs: string,
    ) {
        super();
        this.id = id;
    }

}
