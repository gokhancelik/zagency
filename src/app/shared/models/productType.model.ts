
import { IModel } from '../../core/IModel';
export class ProductType implements IModel {
    id: number;
    productTypeId: number;
    name: string;
    companyId: number;
    companyName: string;
    isDeleted: boolean;
    productTypeCategoryId: number;
    productTypeCategoryName: string;
    constructor() {
    }
}
