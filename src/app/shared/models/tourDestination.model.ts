import { IModel } from '../../core/IModel';
export class TourDestination implements IModel {
    id: number;
    tourDestinationId: number;
    name: string;
    latitude: number;
    longitude: number;
    isDeleted: boolean;
    tourId: number;
    constructor(data: any = null) {
        if (data) {
            this.id = data.id;
            this.tourDestinationId = data.tourDestinationId;
            this.name = data.name;
            this.latitude = data.latitude;
            this.longitude = data.longitude;
            this.isDeleted = data.isDeleted;
            this.tourId = data.tourId;
        }
        else {
            this.id = 0;
            this.tourDestinationId = 0;
            this.name = '';
            this.latitude = 0;
            this.longitude = 0;
            this.isDeleted = false;
            this.tourId = 0;
        }
    }
}
