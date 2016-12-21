import { ProductBase } from './productBase.model';
export class Product extends ProductBase {

    constructor(data: any = null) {
        if (data) {
            super(data);
        }
        else {
            super();
        }
    }
}
