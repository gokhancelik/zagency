import { IModel } from '../../core/index';
export class TourScheduleSpec implements IModel {
    id: number;
    tourScheduleSpecId: number;
    description: string;
    tourScheduleId: number;
    specTypeId: number;
    specTypeName: string;
    constructor(data: any = null) {
        if (data) {
            this.id = data.id;
            this.tourScheduleSpecId = data.tourScheduleSpecId;
            this.description = data.description;
            this.tourScheduleId = data.tourScheduleId;
            this.specTypeName = data.specTypeName;
            this.specTypeId = data.specTypeId;
        }
        else {
            this.id = 0;
            this.tourScheduleSpecId = 0;
            this.description = '';
            this.tourScheduleId = 0;
            this.specTypeName = '';
            this.specTypeId = 0;
        }
    }
}
