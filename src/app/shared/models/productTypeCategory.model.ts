import { IModel } from '../../core/index';
export class ProductTypeCategory implements IModel {
    id: number;
    name: string;
    code: string;
    productTypeCategoryId: number;
    constructor(data: any = null) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.code = data.code;
            this.productTypeCategoryId = data.productTypeCategoryId;
        }
        else {
            this.id = 0;
            this.name = '';
            this.code = '';
            this.productTypeCategoryId = 0;
        }
    }
}
