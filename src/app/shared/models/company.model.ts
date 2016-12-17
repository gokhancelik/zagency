import { IModel } from '../../core/index';
export class Company implements IModel {
    id: number;
    companyId: number;
    name: string;
    longName: string;
    logoPath: string;
    webSiteUrl: string;
    phone1: string;
    phone2: string;
    fax: string;
    email: string;
    isDeleted: boolean;
    constructor() {
        this.companyId = 0;
        this.longName = '';
        this.logoPath = '';
        this.webSiteUrl = '';
        this.phone1 = '';
        this.phone2 = '';
        this.fax = '';
        this.email = '';
        this.isDeleted = false;
    }
}
