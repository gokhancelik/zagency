import { IModel } from '../../core/index';
export class Company implements IModel {
    id: string;
    name: string;
    longName: string;
    webSiteUrl: string;
    phone1: string;
    phone2: string;
    fax: string;
    email: string;
    constructor(data) {
        if (data) {
            this.name = data.name;
            this.longName = data.longName;
            this.webSiteUrl = data.webSiteUrl;
            this.phone1 = data.phone1;
            this.phone2 = data.phone2;
            this.fax = data.fax || '';
            this.email = data.email;
            this.id = data.name.replace(' ', '-');
        }
        else {
            this.name = '';
            this.longName = '';
            this.webSiteUrl = '';
            this.phone1 = '';
            this.phone2 = '';
            this.fax = '';
            this.email = '';
        }

    }
}
