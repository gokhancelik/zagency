import { ProductBase } from './productBase.model';
export class Product extends ProductBase {

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
            super(data);
        }
        else {
            super();
        }
    }
}
