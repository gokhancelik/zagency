import { Tour } from './tour.model';
import { Observable } from 'rxjs/Observable';

import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class TourProgram extends BaseModel {
    static fromJsonList(array): TourProgram[] {
        return array.map(TourProgram.fromJson);
    }
    static getColumns(): any {
        return {
            description: {
                title: 'description',
                type: 'string'
            },
            day: {
                title: 'day',
                type: 'string'
            },
            tourName: {
                title: 'tour Name',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, description, day, tour, tourObj, tourUrlPath, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt}): TourProgram {
        return new TourProgram(
            $key, description, day, tour, tourObj, tourUrlPath, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
    constructor(
        id: string = null,
        public description: string = null,
        public day: string = null,
       public tour: string = null,
        public tourObj: Observable<Tour> = null,
        public tourUrlPath: string = null,
        createdAt: Date = null,
        createdBy: string = null,
        modifiedAt: Date = new Date(),
        modifiedBy: string = null,
        isDeleted: boolean = false,
        deletedBy: string = null,
        deletedAt: Date = null
    ) {
        super(id, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
}

