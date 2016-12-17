import { IModel } from '../../core/IModel';
export class Tour implements IModel {
    tourId: number;
    name: string;
    tourTypeId: number;
    tourTypeName: string;
    description: string;
    companyId: number;
    companyName: string;
    id: number;
    isDeleted: boolean;
}
