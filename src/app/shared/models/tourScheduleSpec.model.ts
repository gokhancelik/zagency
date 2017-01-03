import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class TourScheduleSpec extends BaseModel {
    static fromJsonList(array): TourScheduleSpec[] {
        return array.map(TourScheduleSpec.fromJson);
    }
    static getColumns(): any {
        return {
            description: {
                title: 'description',
                type: 'string'
            },
            specTypeName: {
                title: 'specTypeName',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, description, specTypeName, tourSchedule}): TourScheduleSpec {
        return new TourScheduleSpec(
            $key, description, specTypeName,tourSchedule);
    }
    constructor(
        id: string = null,
        public description: string = null,
        public specTypeName: string = null,
        public tourSchedule: string = null
    ) {
        super();
        this.id = id;
    }
}
