import { IModel } from '../../core/IModel';
export class TourPhoto implements IModel {
    id: number;
    tourPhotoId: number;
    photoLocationTypeId: number;
    photoLocationTypeName: string;
    name: string;
    photoPath: string;
    isdeleted: boolean;
    tourId: number;
}
