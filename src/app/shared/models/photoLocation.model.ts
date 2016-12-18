import { IModel } from '../../core/IModel';

export class PhotoLocation implements IModel {
    id: number;
    name: string;
    photoLocationTypeId: number;
    width: number;
    height: number;
    constructor(data) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.photoLocationTypeId = data.photoLocationTypeId;
            this.width = data.width;
            this.height = data.height;
        }
        else {
            this.id = 0;
            this.name = '';
            this.photoLocationTypeId = 0;
            this.width = 0;
            this.height = 0;
        }
    }

}
