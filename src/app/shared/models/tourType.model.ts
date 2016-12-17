
import { IModel } from '../../core/IModel';
export class TourType implements IModel {
    tourTypeId: number;
    name: string;
    companyId: number;
    companyName: string;
    id: number;
    isDeleted: boolean;
    constructor() {

    }
}