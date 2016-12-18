import { IModel } from '../../core/index';
export class CurrencyType implements IModel {
    id: number;
    description: string;
    companyName: string;
    companyId: number;
    constructor(data: any = null) {
        if (data) {
            this.id = data.id;
            this.description = data.description;
            this.companyName = data.companyName;
            this.companyId = data.companyId;
        }
        else {
            this.id = 0;
            this.description = '';
            this.companyName = '';
            this.companyId = 0;
        }
    }
}
