
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
            }
        };
    }
    static fromJson({ $key, description, day, tour}): TourProgram {
        return new TourProgram(
            $key, description, day, tour);
    }
    constructor(
        id: string = null,
        public description: string = null,
        public day: string = null,
        public tour: string = null,
    ) {
        super();
        this.id = id;
    }
}
