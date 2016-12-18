import { IModel } from '../../core/index';
export class TourScheduleSpec implements IModel {
    id: number;
    description: string;
    companyName: string;
    companyId: number;
    specTypeId: number;
    specTypeName: string;
    constructor(data: any = null) {
        if (data) {
            this.id = data.id;
            this.description = data.description;
            this.companyName = data.companyName;
            this.companyId = data.companyId;
            this.specTypeName = data.specTypeName;
            this.specTypeId = data.specTypeId;
        }
        else {
            this.id = 0;
            this.description = '';
            this.companyName = '';
            this.companyId = 0;
            this.specTypeName = '';
            this.specTypeId = 0;
        }
    }
}
