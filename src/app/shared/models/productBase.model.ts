import { IModel } from '../../core/IModel';
export abstract class ProductBase implements IModel {
    productBaseId: number;
    name: string;
    productTypeId: number;
    productTypeName: string;
    description: string;
    companyId: number;
    companyName: string;
    id: number;
    isDeleted: boolean;
    /**
     *
     */
    constructor(data: any = null) {
        if (data) {
            this.companyId = data.companyId;
            this.name = data.name;
            this.productTypeId = data.productTypeId;
            this.productTypeName = data.productTypeName;
            this.companyId = data.companyId;
            this.companyName = data.companyName;
            this.id = data.id;
            this.isDeleted = data.isDeleted;
        }
        else {
            this.companyId = 0;
            this.name = '';
            this.productTypeId = 0;
            this.productTypeName = '';
            this.companyId = 0;
            this.companyName = '';
            this.id = 0;
            this.isDeleted = false;
        }
    }
}
