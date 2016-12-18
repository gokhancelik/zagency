import { IModel } from '../../core/IModel';
export class TourDestination implements IModel {
    id: number;
    tourDestinationId: number;
    name: string;
    latitude: number;
    longitude: number;
    isdeleted: boolean;
    tourId: number;
}
