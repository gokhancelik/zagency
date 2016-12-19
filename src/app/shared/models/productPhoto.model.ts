import { IModel } from '../../core/IModel';
export class ProductPhoto implements IModel {
    id: number;
    productPhotoId: number;
    photoLocationTypeId: number;
    photoLocationTypeName: string;
    name: string;
    photoPath: string;
    isdeleted: boolean;
    productBaseId: number;
}
