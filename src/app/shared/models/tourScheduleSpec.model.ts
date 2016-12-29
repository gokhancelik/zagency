import { BaseModel } from './base.model';
export class TourScheduleSpec extends BaseModel {
    static fromJsonList(array): TourScheduleSpec[] {
        return array.map(TourScheduleSpec.fromJson);
    }
    static getColumns(): any {
        return {
            id: {
                title: 'id',
                type: 'string'
            },
            description: {
                title: 'description',
                type: 'string'
            },
            specTypeId: {
                title: 'specType',
                type: 'string'
            }
        };
    }
    get id() {
        return this.$key;
    }
    static fromJson({ $key, description, specTypeId}): TourScheduleSpec {
        return new TourScheduleSpec($key, description, specTypeId);
    }
    constructor(
        public $key: string,
        public description: string,
        public specTypeId: string) {
        super();
    }

}
