import { IModel } from '../../core/IModel';
/**
 export * TourSchedule
 */
export class TourSchedule implements IModel {
    id: number;
    tourScheduleId: number;
    start: Date;
    end: Date;
    isdeleted: boolean;
    tourId: number;
    quota: number;
    constructor(ts: any = null) {
        if (ts) {
            this.id = ts.id;
            this.tourScheduleId = ts.tourScheduleId;
            this.start = new Date(ts.start);
            this.end = new Date(ts.end);
            this.quota = ts.quota;
            this.isdeleted = ts.isdeleted;
            this.tourId = ts.tourId;
        }
    }
}