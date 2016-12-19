import { ProductBase } from './productBase.model';
export class Tour extends ProductBase {
    isTemp: boolean;
    /**
     *
     */
    constructor(data: any = null) {
        if (data) {
            super(data);
            this.isTemp = data.isTemp;
        }
        else {
            super();
            this.isTemp = true;
        }
    }
}
